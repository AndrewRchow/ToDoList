﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Models.Response
{
    /// <summary>
    /// This class simply sets IsSuccesful to true by default.
    /// Many of the response classes will end up inheriting from here
    /// since they should be returning IsSuccessful = true
    /// </summary>
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {

            this.IsSuccessful = true;
        }
    }
}
