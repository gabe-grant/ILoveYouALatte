using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ILoveYouALatte.Models;


namespace ILoveYouALatte.Models
{
    public interface IDrinkOrderRepository
    {
        List<DrinkOrder> GetAll();
        DrinkOrder GetById(int id);
        //void Delete(int id);
        //List<DrinkOrder> GetAllDrinksByUser(int userProfileId);
        void Update(DrinkOrder drinkOrder);
        void Add(DrinkOrder drinkOrder);
    }
}