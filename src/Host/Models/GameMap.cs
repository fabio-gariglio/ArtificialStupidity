namespace Host.Models
{
    public class GameMap
    {
        public int Width { get; }
        public int Height { get; }
        public int[,] Terrain { get; }

        public GameMap(int height, int width)
        {
            Height = height;            
            Width = width;
            Terrain = new int[height, width];
        }
    }
}