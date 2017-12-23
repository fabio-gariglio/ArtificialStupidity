using System;
using System.Threading.Tasks;
using Host.Models;
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

        public async Task Move(Position position)
        {
            if (Clients == null) return;

            await Clients.All.InvokeAsync("Move", position);
        }
    }
}