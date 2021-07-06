using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using ILoveYouALatte.Controllers;
using ILoveYouALatte.Models;
using ILoveYouALatte.Utils;

namespace ILoveYouALatte.Repositories
{
    public class DrinkOrderRepository : BaseRepository, IDrinkOrderRepository
    {
        public DrinkOrderRepository(IConfiguration configuration) : base(configuration) { }

        public List<DrinkOrder> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
       
                    SELECT Id, DrinkSize, MilkFoam, HotOrIced, MilkChoice, DrinkSyrup, DrinkSweetner, EspressoShots, Toppings, CustId

                    FROM DrinkOrder";

                    var reader = cmd.ExecuteReader();

                    var drinkorders = new List<DrinkOrder>();
                    while (reader.Read())
                    {
                        drinkorders.Add(new DrinkOrder()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            DrinkSize = DbUtils.GetString(reader, "DrinkSize"),
                            MilkFoam = DbUtils.GetString(reader, "MilkFoam"),
                            HotOrIced = DbUtils.GetString(reader, "HotOrIced"),
                            MilkChoice = DbUtils.GetString(reader, "MilkChoice"),
                            DrinkSyrup = DbUtils.GetString(reader, "DrinkSyrup"),
                            DrinkSweetner = DbUtils.GetString(reader, "DrinkSweetner"),
                            EspressoShots = DbUtils.GetString(reader, "EspressoShots"),
                            Toppings = DbUtils.GetString(reader, "Toppings"),
                            CustId = DbUtils.GetInt(reader, "CustId")

                            //PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),

                        }); ;
                    }

                    reader.Close();

                    return drinkorders;
                }
            }
        }


        //public List<DrinkOrder> GetAllDrinksByUser(int userProfileId)
        //{
        //    // this method goes into the DB and pulls out the values of the drinks made by the user
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //               SELECT p.Id, p.Title, p.Content, 
        //                      p.ImageLocation AS HeaderImage,
        //                      p.CreateDateTime, p.PublishDateTime, p.IsApproved,
        //                      p.CategoryId, p.UserProfileId,
        //                      c.[Name] AS CategoryName,
        //                      u.FirstName, u.LastName, u.DisplayName, 
        //                      u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
        //                      u.UserTypeId, 
        //                      ut.[Name] AS UserTypeName
        //                 FROM Drink p
        //                      LEFT JOIN Category c ON p.CategoryId = c.id
        //                      LEFT JOIN UserProfile u ON p.UserProfileId = u.id
        //                      LEFT JOIN UserType ut ON u.UserTypeId = ut.id
        //                WHERE p.UserProfileId = @userProfileId";

        //            cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
        //            var reader = cmd.ExecuteReader();

        //            // storing those value in a new list of type post
        //            var drinks = new List<DrinkOrder>();

        //            while (reader.Read())
        //            {

        //                drinks.Add(NewDrinkFromReader(reader));
        //            }

        //            reader.Close();

        //            return drinks;
        //        }
        //    }
        //}

        //public DrinkOrder NewDrinkFromReader(SqlDataReader reader)
        //{
        //    // there is a DbUtils.GetNullableDateTime available for PublishDateTime that errored
        //    return new DrinkOrder()
        //    {
        //        Id = reader.GetInt32(reader.GetOrdinal("Id")),
        //        Title = reader.GetString(reader.GetOrdinal("Title")),
        //        Content = reader.GetString(reader.GetOrdinal("Content")),
        //        ImageLocation = DbUtils.GetNullableString(reader, "HeaderImage"),
        //        CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
        //        PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
        //        CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId")),
        //        Category = new Category()
        //        {
        //            Id = reader.GetInt32(reader.GetOrdinal("CategoryId")),
        //            Name = reader.GetString(reader.GetOrdinal("CategoryName"))
        //        },
        //        UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
        //        UserProfile = new UserProfile()
        //        {
        //            Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
        //            FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
        //            LastName = reader.GetString(reader.GetOrdinal("LastName")),
        //            DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
        //            Email = reader.GetString(reader.GetOrdinal("Email")),
        //            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
        //            ImageLocation = DbUtils.GetNullableString(reader, "AvatarImage"),
        //            UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
        //            UserType = new UserType()
        //            {
        //                Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
        //                Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
        //            }
        //        }
        //    };
        //}

        public void Add(DrinkOrder drinkOrder)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO DrinkOrder (DrinkSize, MilkFoam, HotOrIced, MilkChoice, DrinkSyrup, DrinkSweetner, EspressoShots, Toppings, CustId)
                        OUTPUT INSERTED.ID
                        VALUES (@DrinkSize, @MilkFoam, @HotOrIced, @MilkChoice, @DrinkSyrup, @DrinkSweetner, @EspressoShots, @Toppings, @CustId)";

                    DbUtils.AddParameter(cmd, "@DrinkSize", drinkOrder.DrinkSize);
                    DbUtils.AddParameter(cmd, "@HotOrIced", drinkOrder.HotOrIced);
                    DbUtils.AddParameter(cmd, "@MilkChoice", drinkOrder.MilkChoice);
                    DbUtils.AddParameter(cmd, "@MilkFoam", drinkOrder.MilkFoam);
                    DbUtils.AddParameter(cmd, "@DrinkSyrup", drinkOrder.DrinkSyrup);
                    DbUtils.AddParameter(cmd, "@DrinkSweetner", drinkOrder.DrinkSweetner);
                    DbUtils.AddParameter(cmd, "@EspressoShots", drinkOrder.EspressoShots);
                    DbUtils.AddParameter(cmd, "@Toppings", drinkOrder.Toppings);
                    DbUtils.AddParameter(cmd, "@CustId", drinkOrder.CustId);

                    drinkOrder.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public DrinkOrder GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT do.Id AS Id, do.DrinkSize, do.HotOrIced, do.MilkChoice, do.MilkFoam, do.DrinkSyrup, do.DrinkSweetner, do.EspressoShots, do.Toppings, do.CustId

                    FROM DrinkOrder do

                    WHERE do.Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    DrinkOrder post = null;
                    if (reader.Read())
                    {
                        post = new DrinkOrder()
                        {
                            Id = id,
                            DrinkSize = DbUtils.GetString(reader, "DrinkSize"),
                            HotOrIced = DbUtils.GetString(reader, "HotOrIced"),
                            MilkChoice = DbUtils.GetString(reader, "MilkChoice"),
                            MilkFoam = DbUtils.GetString(reader, "MilkFoam"),
                            DrinkSyrup = DbUtils.GetString(reader, "DrinkSyrup"),
                            DrinkSweetner = DbUtils.GetString(reader, "DrinkSweetner"),
                            EspressoShots = DbUtils.GetString(reader, "EspressoShots"),
                            Toppings = DbUtils.GetString(reader, "Toppings"),
                            CustId = DbUtils.GetInt(reader, "CustId")

                            //PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),

                        };
                    }

                    reader.Close();

                    return post;
                }
            }
        }


        public void Update(DrinkOrder post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE DrinkOrder
                           SET DrinkSize = @DrinkSize,
                               HotOrIced = @HotOrIced,
                               MilkChoice = @MilkChoice,
                               MilkFoam = @MilkFoam,
                               DrinkSyrup = @DrinkSyrup,
                               DrinkSweetner = @DrinkSweetner,
                               EspressoShots = @EspressoShots,
                               Toppings = @Toppings,
                               CustId = @CustId
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@EspressoShots", post.EspressoShots);
                    DbUtils.AddParameter(cmd, "@HotOrIced", post.HotOrIced);
                    DbUtils.AddParameter(cmd, "@MilkChoice", post.MilkChoice);
                    DbUtils.AddParameter(cmd, "@DrinkSize", post.DrinkSize);
                    DbUtils.AddParameter(cmd, "@DrinkSweetner", post.DrinkSweetner);
                    DbUtils.AddParameter(cmd, "@DrinkSyrup", post.DrinkSyrup);
                    DbUtils.AddParameter(cmd, "@MilkFoam", post.MilkFoam);
                    DbUtils.AddParameter(cmd, "@Toppings", post.Toppings);
                    DbUtils.AddParameter(cmd, "@CustId", post.CustId);
                    DbUtils.AddParameter(cmd, "@Id", post.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Drink WHERE Id = @Id
                                        Delete from Comment where DrinkId = @DrinkId";
                    DbUtils.AddParameter(cmd, "@id", id);
                    DbUtils.AddParameter(cmd, "@DrinkId", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    };
}
