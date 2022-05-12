import { useState, useEffect } from "react";

const initialState = {
   name: "",
   email: "",
   age: "",
   position: "",
   salary: "",
};

const EmployeeForm = ({ employee, closeModal, isUpdated, setIsUpdated }) => {
   const [formState, setFormState] = useState(initialState);

   useEffect(() => {
      if (employee) {
         setFormState(employee);
      }
   }, []);

   const createEmployee = async () => {
      const response = await fetch("http://localhost:5000/api/employees", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formState),
      });
      //const data = await response.json();
      setFormState(initialState);
      setIsUpdated(!isUpdated);
      closeModal();
   };

   const updateEmployee = async () => {
      const response = await fetch(
         `http://localhost:5000/api/employees/${employee._id}`,
         {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
         }
      );
      //const data = await response.json();
      setIsUpdated(!isUpdated);
      closeModal();
   };

   const handleChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const newEmployee = {
         name: e.target.name.value,
         email: e.target.email.value,
         age: e.target.age.value,
         position: e.target.position.value,
         salary: e.target.salary.value,
      };

      setFormState(newEmployee);
      if (!employee) {
         createEmployee();
      } else {
         updateEmployee();
      }
   };

   return (
      <div>
         <h2>Employee Form</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="name"
               id="name"
               value={formState.name || ""}
               onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
               type="text"
               name="email"
               id="email"
               value={formState.email || ""}
               onChange={handleChange}
            />
            <br />
            <label htmlFor="age">Age</label>
            <input
               type="text"
               name="age"
               id="age"
               value={formState.age || ""}
               onChange={handleChange}
            />
            <br />
            <label htmlFor="position">Position</label>
            <input
               type="text"
               name="position"
               id="position"
               value={formState.position || ""}
               onChange={handleChange}
            />
            <br />
            <label htmlFor="salary">Salary</label>
            <input
               type="text"
               name="salary"
               id="salary"
               value={formState.salary || ""}
               onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default EmployeeForm;
