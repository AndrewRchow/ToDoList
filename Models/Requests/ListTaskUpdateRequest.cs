using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Models.Requests
{
    public class ListTaskUpdateRequest: ListTaskAddRequest
    {
        public int Id { get; set; }
    }
}
