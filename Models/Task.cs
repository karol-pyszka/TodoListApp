using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoListApp.Models
{
    /// <summary>
    ///     Task on list
    /// </summary>
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary>
        ///     Task description
        /// </summary>
        [Required]
        public string Description { get; set; }

        /// <summary>
        ///     Task due date
        /// </summary>
        [Required]
        public DateTime DueDate { get; set; }
    }
}
