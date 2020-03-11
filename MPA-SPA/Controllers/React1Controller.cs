using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SPA.Models;

namespace SPA.Controllers
{
    public class React1Controller : Controller
    {
    
        public IActionResult Index()
        {
            return View();
        }

    }
}
