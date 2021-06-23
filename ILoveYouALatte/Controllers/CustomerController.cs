using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ILoveYouALatte.Models;
using ILoveYouALatte.Repositories;

namespace ILoveYouALatte.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet("{custFirebaseId}")]
        public IActionResult GetByFirebaseUserId(string custFirebaseId)
        {
            var customer = _customerRepository.GetByCustFirebaseId(custFirebaseId);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Register(Customer customer)
        {
            // All newly registered users start out as a "user" user type (i.e. they are not admins)
            customer.UserTypeId = UserType.USER_TYPE_ID;
            _customerRepository.Add(customer);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { custFirebaseId = customer.CustFirebaseId }, customer);
        }
    }
}
