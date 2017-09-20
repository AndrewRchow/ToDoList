using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ToDoList.services;
using ToDoList.Models.Domain;
using ToDoList.Models.Requests;

namespace TodoList.Tests.Services
{
   
    [TestClass]
    public class SectionServiceTests 
    {
        [TestMethod]
        public void SectionService_SelectAll_Test()
        {
            SectionService svc = new SectionService();
            List<ListSection> model = svc.SelectAll();
            Assert.IsNotNull(model);
        }

        [TestMethod]
        public void SectionService_Insert_Test()
        {
            SectionService svc = new SectionService();
            ListSectionAddRequest model = new ListSectionAddRequest();
            model.UserId = "8f3e9c6f-d914-4eee-8c01-50c4bebb2f07";
            model.Section = "Hiii";
            var result = svc.Insert(model);
            Assert.IsInstanceOfType(result, typeof(int), "Expected result to be an int");
            Assert.IsTrue(result > 0, "Expected result to be greater than 0");
            
        }

        [TestMethod]
        public void SectionService_SelectByUserId_Test()
        {
            SectionService svc = new SectionService();
            string something = "insertActualUserIdHere";
            var result = svc.SelectByUserId(something);
            Assert.IsNotNull(result);
        }


    }
}
