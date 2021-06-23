using ILoveYouALatte.Models;

namespace ILoveYouALatte.Repositories
{
    public interface ICustomerRepository
    {
        void Add(Customer customer);
        Customer GetByCustFirebaseId(string custFirebaseId);
    }
}