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
       
                    SELECT Id, DrinkSize, MilkFoam, HotOrIced, MilkChoice, DrinkSyrup, DrinkSweetener, EspressoShots, Toppings, CustId

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
                            DrinkSweetener = DbUtils.GetString(reader, "DrinkSweetener"),
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


        public void Add(DrinkOrder drinkOrder)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO DrinkOrder (DrinkSize, MilkFoam, HotOrIced, MilkChoice, DrinkSyrup, DrinkSweetener, EspressoShots, Toppings, CustId)
                        OUTPUT INSERTED.ID
                        VALUES (@DrinkSize, @MilkFoam, @HotOrIced, @MilkChoice, @DrinkSyrup, @DrinkSweetener, @EspressoShots, @Toppings, @CustId)";

                    DbUtils.AddParameter(cmd, "@DrinkSize", drinkOrder.DrinkSize);
                    DbUtils.AddParameter(cmd, "@HotOrIced", drinkOrder.HotOrIced);
                    DbUtils.AddParameter(cmd, "@MilkChoice", drinkOrder.MilkChoice);
                    DbUtils.AddParameter(cmd, "@MilkFoam", drinkOrder.MilkFoam);
                    DbUtils.AddParameter(cmd, "@DrinkSyrup", drinkOrder.DrinkSyrup);
                    DbUtils.AddParameter(cmd, "@DrinkSweetener", drinkOrder.DrinkSweetener);
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
                    SELECT do.Id AS Id, do.DrinkSize, do.HotOrIced, do.MilkChoice, do.MilkFoam, do.DrinkSyrup, do.DrinkSweetener, do.EspressoShots, do.Toppings, do.CustId

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
                            DrinkSweetener = DbUtils.GetString(reader, "DrinkSweetener"),
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
                               DrinkSweetener = @DrinkSweetener,
                               EspressoShots = @EspressoShots,
                               Toppings = @Toppings,
                               CustId = @CustId
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@EspressoShots", post.EspressoShots);
                    DbUtils.AddParameter(cmd, "@HotOrIced", post.HotOrIced);
                    DbUtils.AddParameter(cmd, "@MilkChoice", post.MilkChoice);
                    DbUtils.AddParameter(cmd, "@DrinkSize", post.DrinkSize);
                    DbUtils.AddParameter(cmd, "@DrinkSweetener", post.DrinkSweetener);
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
                    cmd.CommandText = @"DELETE FROM DrinkOrder WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    };
}
