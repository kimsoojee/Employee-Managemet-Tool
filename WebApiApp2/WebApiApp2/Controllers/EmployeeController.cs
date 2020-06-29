using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiApp2;
using WebApiData2;

namespace WebApiApp.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {
        public EmployeeController() { }

        EmployeeSampleEntities db = new EmployeeSampleEntities();

        public IHttpActionResult GetAll()
        {
            List<AspNetEmployee> EmployeeList = db.AspNetEmployees.ToList();
            if (EmployeeList != null)
                return Ok(EmployeeList);
            else
                return NotFound();
        }

        [Route("{employeeId}")]
        public IHttpActionResult Get(int employeeId)
        {
            List<AspNetEmployee> employeeInfo = db.AspNetEmployees.Where(x => x.employee_id == employeeId).ToList();
            if (!employeeInfo.Any())
            {
                var response = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent(string.Format("No Employee found with ID = {0}", employeeId)),
                    ReasonPhrase = "Employee Not Found"
                };
                throw new HttpResponseException(response);
            }
            return Ok(employeeInfo);
        }

        [MyExceptionFilter]
        public IHttpActionResult Post(AspNetEmployee employee)
        {
            db.AspNetEmployees.Add(employee);
            db.SaveChanges();
            return Ok();
        }

        public IHttpActionResult Put(AspNetEmployee employee)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data");
            var existingEmployee = db.AspNetEmployees.FirstOrDefault(x => x.employee_id == employee.employee_id);
            if (existingEmployee != null)
            {
                existingEmployee.first_name = employee.first_name;
                existingEmployee.last_name = employee.last_name;
                existingEmployee.email = employee.email;
                existingEmployee.hire_date = employee.hire_date;
                existingEmployee.phone_number = employee.phone_number;
                existingEmployee.salary = employee.salary;

                existingEmployee.job_id = employee.job_id;
                existingEmployee.department_id = employee.department_id;
                existingEmployee.manager_id = employee.manager_id;
                db.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            var employee = db.AspNetEmployees.Where(x => x.employee_id == id).FirstOrDefault();
            db.Entry(employee).State = System.Data.Entity.EntityState.Deleted;
            db.SaveChanges();
            return Ok();
        }
    }


}
