using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.API.Models
{
    public class Class
    {
        public int ClassId { get; set; }
        public int? TeacherId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsNightClass { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        // Navigation Properies
        public virtual Teacher Teacher {get; set; }
        public virtual ICollection<Enrollment> Enrollments { get; set; }
        
    }
}