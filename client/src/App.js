import { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Loader from "./components/Loader";
import InputModal from "./components/InputModal";

function App() {
   const [employees, setEmployees] = useState([]);
   const [loading, setLoading] = useState(true);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [isUpdated, setIsUpdated] = useState(false);

   useEffect(() => {
      getEmployees();
      //console.log("useEffect in app");
   }, [isUpdated]);

   const getEmployees = async () => {
      const response = await fetch("http://localhost:5000/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
      //console.log("get employees function");
   };

   console.log("component rendered");

   return (
      <div>
         <h1>Employees</h1>
         {loading ? (
            <Loader />
         ) : (
            <div className="employee-list">
               {employees.map((employee) => (
                  <EmployeeCard
                     key={employee._id}
                     employee={employee}
                     isUpdated={isUpdated}
                     setIsUpdated={setIsUpdated}
                  />
               ))}
            </div>
         )}

         <button onClick={() => setModalIsOpen(true)}>Add Employee</button>
         <InputModal
            modalIsOpen={modalIsOpen}
            closeModal={() => setModalIsOpen(false)}
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
         />
      </div>
   );
}

export default App;
