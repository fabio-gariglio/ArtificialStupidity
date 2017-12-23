using System;
using System.Threading;
using Host.Models;
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
        private readonly IHubContext<ChatHub> _context;

        public Scheduler(IHubContext<ChatHub> context)
        {
            _context = context;
            _timer = new Timer(Run, null, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));
        }

        private void Run(object state)
        {
        }

    }
}
