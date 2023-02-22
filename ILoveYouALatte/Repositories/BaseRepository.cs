using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace ILoveYouALatte.Repositories
{
    public abstract class BaseRepository
    {
        private readonly string _connectionString;

        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}

/* 
 * A Repository pattern is a design pattern that mediates data from and to the Domain and Data Access Layers (like Entity Framework Core / Dapper).
 * Repositories are Classes that hide logic requires to store or retrieve data. Thus our application will not care about what kind of ORM we are using.
 * Becuase everything related to the ORM (Object Relational Mapping) is handled within a repository later allowing us to have a cleaner seperation of concern.
 * 
 * Decoupling the application from persistant frameworks, like EFC. The Repository pattern helps us achieve this by creating an Abstraction over the Data Access Layer.
 * So if you decide to switch to a different persistance framework, you could do so with minimal impact on the application.
 * Giving it one of the major benefits of using the Repository pattern. Another being the duplication of logic. We can implement the data access one and then invoke it wherever.
 */