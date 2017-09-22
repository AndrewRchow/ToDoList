using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.services
{
    public class ScrapingService
    {
        public List<string> webScrape()
        {
            var document = new HtmlWeb().Load("https://imgur.com/r/shiba");
            var urls = document.DocumentNode.Descendants("img")
                                            .Select(e => e.GetAttributeValue("src", null))
                                            .Where(s => !String.IsNullOrEmpty(s));
            List<string> list = urls.ToList();

            return list;
        }
    }
}
