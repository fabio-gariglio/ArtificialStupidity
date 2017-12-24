using System.Threading.Tasks;
using Host.Models;

namespace Host.Services
{
    public interface IGameMapFactory
    {
        Task<GameMap> GetAsync();
    }
}