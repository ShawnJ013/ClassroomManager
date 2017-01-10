using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ClassroomManager.API.Infrastructure;
using ClassroomManager.API.Models;

namespace ClassroomManager.API.Controllers
{
    public class ClassesController : ApiController
    {
        private ClassroomDataContext db = new ClassroomDataContext();

        // GET: api/Classes
        public IHttpActionResult GetClasses()
        {
            var resultSet = db.Classes.Select(c => new
            {
                c.ClassId,
                c.Name,
                TeacherName = c.Teacher.Name,
                c.StartDate,
                c.EndDate,
                c.Enrollments.Count

            });

            return Ok(resultSet);
        }

        // GET: api/Classes/5
        [ResponseType(typeof(Class))]
        public IHttpActionResult GetClass(int id)
        {
            Class @class = db.Classes.Find(id);
            if (@class == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                @class.ClassId,
                @class.Name,
                @class.Teacher,
                @class.StartDate,
                @class.EndDate,
                Students = @class.Enrollments.Select(e => new
                {
                    e.StudentId,
                    e.Student.Name,
                    e.Student.EmailAddress,
                    e.Student.Telephone,
                    e.Student.Enrollments.Count
                })
            });
        }

        // PUT: api/Classes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClass(int id, Class @class)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != @class.ClassId)
            {
                return BadRequest();
            }

            var dbClass = db.Classes.Find(id);

            dbClass.Name = @class.Name;
            dbClass.TeacherId = @class.TeacherId;
            dbClass.StartDate = @class.StartDate;
            dbClass.EndDate = @class.EndDate;

            db.Entry(@class).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Classes
        [ResponseType(typeof(Class))]
        public IHttpActionResult PostClass(Class @class)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Classes.Add(@class);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = @class.ClassId }, @class);
        }

        // DELETE: api/Classes/5
        [ResponseType(typeof(Class))]
        public IHttpActionResult DeleteClass(int id)
        {
            Class @class = db.Classes.Find(id);
            if (@class == null)
            {
                return NotFound();
            }

            db.Classes.Remove(@class);
            db.SaveChanges();

            return Ok(@class);
        }

        // POST: api/classes/1/students/2
        [HttpPost, Route("api/classes/{classId}/students/{studentId}")]
        public IHttpActionResult AddStudentToClass(int classId, int studentId)
        {
            Enrollment enrollment = new Enrollment();

            enrollment.ClassId = classId;
            enrollment.StudentId = studentId;

            db.Enrollments.Add(enrollment);
            db.SaveChanges();

            return Ok();

        }

        //  DELETE: api/classes/1/students/1
        [HttpDelete, Route("api/classes/{classId}/students/{studentId}")]
        public IHttpActionResult RemoveStudentFromClass(int classId, int studentId)
        {
            var enrollment = db.Enrollments.Find(classId, studentId);

            db.Enrollments.Remove(enrollment);

            db.SaveChanges();

            return Ok();
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClassExists(int id)
        {
            return db.Classes.Count(e => e.ClassId == id) > 0;
        }
    }
}