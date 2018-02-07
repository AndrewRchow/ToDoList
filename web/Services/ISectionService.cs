using System.Collections.Generic;


namespace ToDoList.web
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
        void Delete2(int id);
    }
}