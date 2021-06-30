using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ILoveYouALatte.Models
{
    public class DrinkOrder
    {

        public int Id { get; set; }
        public string DrinkType { get; set; }
        public string DrinkDescription { get; set; }
        public int DrinkPrice { get; set; }
        public string DrinkSize { get; set; }
        public string MilkFoam { get; set; }
        public string HotOrIced { get; set; }
        public string MilkChoice { get; set; }
        public string DrinkSyrup { get; set; }
        public string DrinkSweetner { get; set; }
        public int EspressoShots { get; set; }
        public string Toppings { get; set; }

    }
}
