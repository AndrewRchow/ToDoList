using System;
using System.Collections.Generic;

using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Models.Requests
{
    public class ListSectionAddRequest
    {
        public string UserId { get; set; }
        public string Section { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}
