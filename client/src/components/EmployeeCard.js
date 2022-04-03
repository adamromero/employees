import { useEffect, useState } from "react";
import InputModal from "./InputModal";
import DeleteModal from "./DeleteModal";

const EmployeeCard = ({ employee, updated, setUpdated }) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const handleEdit = () => {
      setModalIsOpen(true);
   };

   const handleDelete = () => {
      console.log("delete");
      setIsDeleteModalOpen(true);
   };

   return (
      <>
         <div className="employee-card">
            <h2>{employee.name}</h2>
            <p>{employee.email}</p>
            <p>{employee.age}</p>
            <p>{employee.position}</p>
            <p>${employee.salary}</p>
            {/* <p>{employee.hireDate && employee.hireDate}</p> */}
            <div>
               <button onClick={() => handleEdit()}>Edit</button>
               <button onClick={() => handleDelete()}>Delete</button>
            </div>
         </div>
         <InputModal
            modalIsOpen={modalIsOpen}
            closeModal={() => setModalIsOpen(false)}
            setUpdated={setUpdated}
            updated={updated}
            employee={employee}
         />
         <DeleteModal
            modalIsOpen={isDeleteModalOpen}
            closeModal={() => setIsDeleteModalOpen(false)}
            employeeId={employee._id}
         />
      </>
   );
};

export default EmployeeCard;
