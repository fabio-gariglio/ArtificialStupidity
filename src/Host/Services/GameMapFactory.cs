using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Host.Models;

namespace Host.Services
{
    public class GameMapFactory : IGameMapFactory
    {
        private GameMap _gameMap;

        public async Task<GameMap> GetAsync()
        {
            if (_gameMap == null)
            {
                var content = await GetFileContentAsync(@"Data/GameMap.txt");
                _gameMap = AsGameMap(content);
            }

            return _gameMap;
        }

        private static GameMap AsGameMap(List<string> content)
        {
            var rowsNumber = content.Count();
            var columnsNumber = content.Last().Length;
            
            var gameMap = new GameMap(rowsNumber, columnsNumber);

            for (var r = 0; r < rowsNumber; r++)
            {
                for (var c = 0; c < columnsNumber; c++)
                {
                    var row = content[r];
                    gameMap.Terrain[r, c] = row[c] == '1' ? 1 : 0;
                }                
            }

            return gameMap;            
        }

        private static async Task<List<string>> GetFileContentAsync(string path)
        {
            var lines = new List<string>();

            using (var stream = new StreamReader(@"Data/GameMap.txt"))
            {
                string line;
                
                while((line = await stream.ReadLineAsync()) != null)
                {
                    lines.Add(line);
                }
            }

            return lines;
        }

    }
}