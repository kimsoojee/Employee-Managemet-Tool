﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;  
using System.Net.Http;  
using System.Web.Http.Filters;
using System.Web.Http.Controllers;

namespace WebApiApp2
{
    public class MyExceptionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            if (!actionContext.ModelState.IsValid)
            {
                actionContext.Response = actionContext.Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest, actionContext.ModelState);
            }
        }
    }
}