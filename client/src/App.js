import { useState, useEffect, useCallback } from "react";
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
      console.log("useEffect in app");
   }, [employees]);

   //look into useCallback https://stackoverflow.com/questions/62486028/how-do-i-properly-use-useeffect-for-a-async-fetch-call-with-react-react-hooks-e
   const getEmployees = useCallback(async () => {
      const response = await fetch("http://localhost:5000/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
   }, [employees]);

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
