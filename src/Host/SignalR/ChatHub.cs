using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Host.SignalR
{
    public class ChatHub : Hub
    {
        public async Task Send(string message)
        {
            if (Clients == null) return;

            await Clients.All.InvokeAsync("Send", message);
        }
    }
}