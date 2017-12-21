using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Host.Services;
using Microsoft.AspNetCore.Mvc;

namespace Host.Controllers
{
    public class HomeController : Controller
    {
        public HomeController(IScheduler scheduler)
        {
            
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
