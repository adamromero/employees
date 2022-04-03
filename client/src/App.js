import { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Loader from "./components/Loader";
import InputModal from "./components/InputModal";

function App() {
   const [employees, setEmployees] = useState([]);
   const [loading, setLoading] = useState(true);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   //const [editModalState, setEditModalState] = useState(false);

   useEffect(() => {
      getEmployees();
   }, [employees]);

   const getEmployees = async () => {
      const response = await fetch("/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
   };

   return (
      <div>
         <h1>Employees</h1>
         {loading ? (
            <Loader />
         ) : (
            <div className="employee-list">
               {employees.map((employee) => (
                  <EmployeeCard key={employee._id} employee={employee} />
               ))}
            </div>
         )}

         <button onClick={() => setModalIsOpen(true)}>Add Employee</button>
         <InputModal
            modalIsOpen={modalIsOpen}
            closeModal={() => setModalIsOpen(false)}
         />
      </div>
   );
}

export default App;
