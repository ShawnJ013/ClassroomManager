using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.API.Models
{
    public class Enrollment
    {
        public int ClassId { get; set; }
        public int StudentId { get; set; }

        // Navigation 
        public virtual Student Student { get; set; }
        public virtual Class Class { get; set; }
    }
}