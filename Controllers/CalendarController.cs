using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TodoListApp.Models;

namespace TodoListApp.Controllers
{
    public class CalendarController : Controller
    {
        private readonly TodoListAppDbContext _context;

        public CalendarController(TodoListAppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var tasks = _context.Task.OrderByDescending(x => x.DueDate).ToList();
            ViewBag.Tasks = tasks;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddTask(Models.Task task)
        {
            if (ModelState.IsValid)
            {
                _context.Task.Add(task);
                _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditTask(Models.Task task)
        {
            var existingTask = _context.Task.FirstOrDefault(t => t.Id == task.Id);

            if (existingTask == null)
            {
                return RedirectToAction("Error");
            }

            existingTask.Description = task.Description;
            existingTask.DueDate = task.DueDate;

            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteTask(Models.Task task)
        {
            var taskToDelete = _context.Task.Find(task.Id);

            if (taskToDelete == null)
            {
                return RedirectToAction("Error");
            }

            _context.Task.Remove(taskToDelete);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            var viewModel = new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            };

            return View("~/Views/Shared/Error.cshtml", viewModel);
        }
    }
}
