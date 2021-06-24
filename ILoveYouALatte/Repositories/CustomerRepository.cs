using Microsoft.Extensions.Configuration;
using ILoveYouALatte.Models;
using ILoveYouALatte.Utils;

namespace ILoveYouALatte.Repositories
{
    public class CustomerRepository : BaseRepository, ICustomerRepository
    {
        public CustomerRepository(IConfiguration configuration) : base(configuration) { }

        public Customer GetByCustFirebaseId(string custFirebaseId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id, C.CustFirebaseId, c.CustFirstName AS CustFirstName, c.CustLastName AS CustLastName, c.CustEmail, c.UserTypeId
                               
                          FROM Customers c
                               
                         WHERE CustFirebaseId = @CustFirebaseId";

                    DbUtils.AddParameter(cmd, "@CustFirebaseId", custFirebaseId);

                    Customer customer = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        customer = new Customer()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            CustFirebaseId = DbUtils.GetString(reader, "CustFirebaseId"),
                            CustFirstName = DbUtils.GetString(reader, "CustFirstName"),
                            CustLastName = DbUtils.GetString(reader, "CustLastName"),
                            CustEmail = DbUtils.GetString(reader, "CustEmail"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId")                 
                        };
                    }
                    reader.Close();

                    return customer;
                }
            }
        }

        public void Add(Customer customer)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Customer (CustFirebaseId, CustFirstName, CustLastName, CustEmail, UserTypeId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@CustFirebaseId, @FirstName, @LastName, @CustEmail, @UserTypeId)";
                    DbUtils.AddParameter(cmd, "@CustFirebaseId", customer.CustFirebaseId);
                    DbUtils.AddParameter(cmd, "@FirstName", customer.CustFirstName);
                    DbUtils.AddParameter(cmd, "@LastName", customer.CustLastName);
                    DbUtils.AddParameter(cmd, "@CustEmail", customer.CustEmail);
                    DbUtils.AddParameter(cmd, "@UserTypeId", customer.UserTypeId);

                    customer.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
