using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.web
{
    public class ListTaskUpdateRequest: ListTaskAddRequest
    {
        public int Id { get; set; }
    }
}
