﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.API.Models
{
    public class Teacher : Person
    {
        public int TeacherID { get; set; }

       
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        // Navigation Properties
        public virtual ICollection<Class> Classes { get; set; }

    }
}