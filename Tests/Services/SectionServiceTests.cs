using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ToDoList.services;
using ToDoList.Models.Domain;

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

       
    }
}
