using Microsoft.EntityFrameworkCore;

namespace TodoListApp
{ 

    public class TodoListAppDbContext : DbContext
    {
        public DbSet<Models.Task> Task { get; set; }

        public TodoListAppDbContext(DbContextOptions<TodoListAppDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlite(connectionString);
        }
    }
}
