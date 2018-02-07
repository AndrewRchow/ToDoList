using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.web
{
    public class ListTask
    {
        public int Id { get; set; }
        public int SectionId { get; set; }
        public string Task { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}
