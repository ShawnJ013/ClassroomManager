using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.API.Models
{
    public class Student : Person
    {
        public int StudentId { get; set; }
        
        public bool HasCriminalRecord { get; set; }

        // Navigation Properties
        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}