using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Models.Domain;
using ToDoList.Models.Requests;

namespace ToDoList.services
{
    public class SectionService : ISectionService
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
        public List<ListSection> SelectByUserId(string UserId)
        {
            List<ListSection> SectionList = new List<ListSection>();
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Section_SelectByUserId", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserId", UserId);
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
        public int Insert(ListSectionAddRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Section_Insert", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserId", model.UserId);
                    cmd.Parameters.AddWithValue("@Section", model.Section);
                    SqlParameter idParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                    idParam.Direction = ParameterDirection.Output;
                    cmd.ExecuteNonQuery();
                    return (int)idParam.Value;
                }
            }
        }

        public void Update(ListSectionUpdateRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Section_Update", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.Parameters.AddWithValue("@Section", model.Section);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Section_Delete", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<ListTask> SelectBySectionId(int id)
        {
            List<ListTask> SectionList = new List<ListTask>();
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Task_SelectBySectionId", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SectionId", id);
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        ListTask model = Mapper2(reader);
                        SectionList.Add(model);

                    }
                }
                conn.Close();
            }
            return SectionList;
        }
        private ListTask Mapper2(SqlDataReader reader)
        {
            ListTask model = new ListTask();
            int index = 0;
            model.Id = reader.GetInt32(index++);
            model.SectionId = reader.GetInt32(index++);
            model.Task = reader.GetString(index++);
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
        public int Insert2(ListTaskAddRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Task_Insert", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SectionId", model.SectionId);
                    cmd.Parameters.AddWithValue("@Task", model.Task);
                    SqlParameter idParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                    idParam.Direction = ParameterDirection.Output;
                    cmd.ExecuteNonQuery();
                    return (int)idParam.Value;
                }
            }
        }
        public void Update2(ListTaskUpdateRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Task_Update", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SectionId", model.SectionId);
                    cmd.Parameters.AddWithValue("@Task", model.Task);
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete2(ListTaskUpdateRequest model)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("dbo.Task_Delete", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
