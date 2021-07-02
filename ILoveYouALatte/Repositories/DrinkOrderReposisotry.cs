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

        //public List<DrinkOrder> GetAll()
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
       
        //            SELECT p.id AS Id, p.Title, p.CategoryId AS DrinkCategoryId,
        //            p.PublishDateTime, p.UserProfileId AS DrinkUserProfileId,
                    
        //            up.FirstName,

        //            c.Name
        //            FROM Drink p
        //            LEFT JOIN Category c on p.CategoryId = c.Id
        //            LEFT JOIN UserProfile up ON p.UserProfileId = up.id
        //            ORDER BY PublishDateTime";

        //            var reader = cmd.ExecuteReader();

        //            var drinks = new List<DrinkOrder>();
        //            while (reader.Read())
        //            {
        //                drinks.Add(new DrinkOrder()
        //                {
        //                    Id = DbUtils.GetInt(reader, "Id"),
        //                    Title = DbUtils.GetString(reader, "Title"),
        //                    PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
        //                    UserProfileId = DbUtils.GetInt(reader, "DrinkUserProfileId"),
        //                    UserProfile = new UserProfile()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "DrinkUserProfileId"),
        //                        FirstName = DbUtils.GetString(reader, "FirstName"),
        //                    },
        //                    Category = new Category()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "DrinkCategoryId"),
        //                        Name = DbUtils.GetString(reader, "Name")
        //                    }
        //                }); ;
        //            }

        //            reader.Close();

        //            return drinks;
        //        }
        //    }
        //}


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
                        INSERT INTO DrinkOrder (DrinkSize, MilkFoam, HotOrIced, MilkChoice, DrinkSyrup, DrinkSweetner, EspressoShots, Toppings)
                        OUTPUT INSERTED.ID
                        VALUES (@DrinkSize, @MilkFoam, @HotOrIced, @MilkChoice, @DrinkSyrup, @DrinkSweetner, @EspressoShots, @Toppings)";

                    DbUtils.AddParameter(cmd, "@DrinkSize", drinkOrder.DrinkSize);
                    DbUtils.AddParameter(cmd, "@HotOrIced", drinkOrder.HotOrIced);
                    DbUtils.AddParameter(cmd, "@MilkChoice", drinkOrder.MilkChoice);
                    DbUtils.AddParameter(cmd, "@MilkFoam", drinkOrder.MilkFoam);
                    DbUtils.AddParameter(cmd, "@DrinkSyrup", drinkOrder.DrinkSyrup);
                    DbUtils.AddParameter(cmd, "@DrinkSweetner", drinkOrder.DrinkSweetner);
                    DbUtils.AddParameter(cmd, "@EspressoShots", drinkOrder.EspressoShots);
                    DbUtils.AddParameter(cmd, "@Toppings", drinkOrder.Toppings);

                    drinkOrder.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        //public DrinkOrder GetById(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //            SELECT p.Id AS DrinkId, p.Title, p.ImageLocation, p.Content, p.CreateDateTime, 
        //                p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId,
        //                up.Id AS UserProfileId, up.FirebaseUserId, up.DisplayName, up.FirstName, 
        //                up.LastName, up.Email,
        //                up.CreateDateTime, up.ImageLocation, up.UserTypeId
        //            FROM Drink p
        //            LEFT JOIN UserProfile up ON p.UserProfileId = up.id
        //            WHERE p.Id = @id";

        //            DbUtils.AddParameter(cmd, "@Id", id);

        //            var reader = cmd.ExecuteReader();

        //            DrinkOrder post = null;
        //            if (reader.Read())
        //            {
        //                post = new DrinkOrder()
        //                {
        //                    Id = id,
        //                    Title = DbUtils.GetString(reader, "Title"),
        //                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
        //                    Content = DbUtils.GetString(reader, "Content"),
        //                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
        //                    PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
        //                    IsApproved = DbUtils.GetBool(reader, "IsApproved"),
        //                    CategoryId = DbUtils.GetInt(reader, "CategoryId"),
        //                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
        //                    UserProfile = new UserProfile()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "UserProfileId"),
        //                        FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
        //                        DisplayName = DbUtils.GetString(reader, "DisplayName"),
        //                        FirstName = DbUtils.GetString(reader, "FirstName"),
        //                        LastName = DbUtils.GetString(reader, "LastName"),
        //                        Email = DbUtils.GetString(reader, "Email"),
        //                        CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
        //                        ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
        //                        UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
        //                    },
        //                };
        //            }

        //            reader.Close();

        //            return post;
        //        }
        //    }
        //}


        //public void Update(DrinkOrder post)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                UPDATE Drink
        //                   SET Title = @Title,
        //                       Content = @Content,
        //                       CreateDateTime = @CreateDateTime,
        //                       IsApproved = @IsApproved,
        //                       PublishDateTime = @PublishDateTime,
        //                       ImageLocation = @ImageLocation,
        //                       CategoryId = @CategoryId,
        //                       UserProfileId = @UserProfileId
        //                 WHERE Id = @Id";

        //            DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
        //            DbUtils.AddParameter(cmd, "@Content", post.Content);
        //            DbUtils.AddParameter(cmd, "@CreateDateTime", post.CreateDateTime);
        //            DbUtils.AddParameter(cmd, "@Title", post.Title);
        //            DbUtils.AddParameter(cmd, "@ImageLocation", post.ImageLocation);
        //            DbUtils.AddParameter(cmd, "@PublishDateTime", post.PublishDateTime);
        //            DbUtils.AddParameter(cmd, "@IsApproved", post.IsApproved);
        //            DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
        //            DbUtils.AddParameter(cmd, "@Id", post.Id);

        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

        //public void Delete(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"DELETE FROM Drink WHERE Id = @Id
        //                                Delete from Comment where DrinkId = @DrinkId";
        //            DbUtils.AddParameter(cmd, "@id", id);
        //            DbUtils.AddParameter(cmd, "@DrinkId", id);
        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

    };
}
