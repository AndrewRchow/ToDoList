using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ToDoList.web.Startup))]
namespace ToDoList.web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
