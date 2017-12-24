using System;
using System.Threading.Tasks;
using Host.Services;
using Microsoft.AspNetCore.SignalR;

namespace Host.SignalR
{  
    public class GameHub : Hub
    {
        private readonly IGameMapFactory _gameMapFactory;

        public GameHub(IGameMapFactory gameMapFactory)
        {
            _gameMapFactory = gameMapFactory;
        }

        public async Task Send(string message)
        {
            if (Clients == null) return;

            await Clients.All.InvokeAsync("Send", message);
        }

        public override async Task OnConnectedAsync()
        {
            var gameMap = await _gameMapFactory.GetAsync();
            await Clients.Client(Context.ConnectionId).InvokeAsync("initialize", gameMap);
        }
    }
}