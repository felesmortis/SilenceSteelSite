using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace FZ
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "Post",
                routeTemplate: "api/{controller}/{chapter}/{section}",
                defaults: new { controller = "Post", action = "Post", chapter = RouteParameter.Optional, section = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "Posts",
                routeTemplate: "api/{controller}",
                defaults: new { controller = "Post", action = "Posts" }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
