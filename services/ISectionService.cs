using System.Collections.Generic;
using ToDoList.Models.Domain;
using ToDoList.Models.Requests;

namespace ToDoList.services
{
    public interface ISectionService
    {
        List<ListSection> SelectAll();
        List<ListSection> SelectByUserId(string UserId);
        int Insert(ListSectionAddRequest model);
        void Update(ListSectionUpdateRequest model);
        void Delete(int id);
        List<ListTask> SelectBySectionId(int id);
        int Insert2(ListTaskAddRequest model);
        void Update2(ListTaskUpdateRequest model);
        void Delete2(ListTaskUpdateRequest model);
    }
}