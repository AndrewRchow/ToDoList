using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Models.Domain;

namespace ToDoList.services
{
   public class SectionService
    {
        public List<ListSection> SelectAll()
        {
            List<ListSection> SectionList = new List<ListSection>();
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Section_SelectAll", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        ListSection model = Mapper(reader);
                        SectionList.Add(model);
                    }
                }
                conn.Close();
            }
            return SectionList;
        }

        private ListSection Mapper(SqlDataReader reader)
        {
            ListSection model = new ListSection();
            int index = 0;
            model.Id = reader.GetInt32(index++);
            model.UserId = reader.GetString(index++);
            model.Section = reader.GetString(index++);
            model.DateCreated = reader.GetDateTime(index++);
            if (!reader.IsDBNull(index))
            {
                model.DateModified = reader.GetDateTime(index++);
            }
            else
            {
                index++;
            }

            return model;
        }
    }
}
