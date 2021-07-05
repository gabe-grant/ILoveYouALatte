
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ILoveYouALatte.Repositories;
using ILoveYouALatte.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ILoveYouALatte.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DrinkOrderController : ControllerBase
    {
        private readonly IDrinkOrderRepository _drinkOrderRepository;
        public DrinkOrderController(IDrinkOrderRepository drinkOrderRepository)
        {
            _drinkOrderRepository = drinkOrderRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_drinkOrderRepository.GetAll());
        }


        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var drinkOrder = _drinkOrderRepository.GetById(id);
        //    if (drinkOrder == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(drinkOrder);
        //}

        [HttpPost]
        public IActionResult DrinkOrder(DrinkOrder drinkOrder)
        {
            _drinkOrderRepository.Add(drinkOrder);
            return NoContent();
        }

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _drinkOrderRepository.Delete(id);
        //    return NoContent();
        //}

        // That is is passed here and then this controller method is invoked
        //[HttpGet("currentUser={id}")]
        //public IActionResult AllDrinkOrdersByUser(int id)
        //{
        //    // GetAllDrinksByUser method is called on drinkOrder repository
        //    var drinkOrders = _drinkOrderRepository.GetAllDrinkOrdersByUser(id);
        //    return Ok(drinkOrders);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, DrinkOrder drinkOrder)
        //{
        //    if (id != drinkOrder.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _drinkOrderRepository.Update(drinkOrder);
        //    return Ok(drinkOrder);
        //}

        //private int GetCurrentUserProfileId()
        //{
        //    string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
        //    return int.Parse(id);
        //}

    }
}
