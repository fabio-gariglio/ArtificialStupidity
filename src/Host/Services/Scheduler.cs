using System;
using System.Threading;
using Host.SignalR;
using Microsoft.AspNetCore.SignalR;

namespace Host.Services
{
    public interface IScheduler
    {
    }

    public class Scheduler : IScheduler
    {
        private readonly Timer _timer;

        public Scheduler(IHubContext<ChatHub> context)
        {
            _timer = new Timer(_=>{
                context.Clients.All.InvokeAsync("send", Guid.NewGuid().ToString());
            }, null, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));

        }
    }
}
