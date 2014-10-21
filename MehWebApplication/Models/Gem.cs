using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MehWebApplication.Models
{
    public class Gem
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Rarity { get; set; }
        public decimal Price { get; set; }
        public int Shine { get; set; }
        public string Color { get; set; }
        public int Faces { get; set; }
    }
}