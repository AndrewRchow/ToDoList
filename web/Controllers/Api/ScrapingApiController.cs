using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDoList.Models.Domain;
using ToDoList.Models.Response;
using ToDoList.services;

namespace ToDoList.web.Controllers.Api
{
    [RoutePrefix("api/scrape")]
    public class ScrapingApiController : ApiController
    {

        ScrapingService scrapingService = new ScrapingService();

        [Route(), HttpGet]
        public HttpResponseMessage Get()
        {
            try
            {
                ItemsResponse<string> resp = new ItemsResponse<string>();
                resp.Items = scrapingService.webScrape();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}