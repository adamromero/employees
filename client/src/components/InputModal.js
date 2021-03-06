import Modal from "react-modal";
import EmployeeForm from "./EmployeeForm";

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "500px",
      width: "100%",
      height: "420px",
   },
};

Modal.setAppElement("#root");

const InputModal = ({
   modalIsOpen,
   closeModal,
   employee,
   isUpdated,
   setIsUpdated,
}) => {
   return (
      <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
      >
         <EmployeeForm
            employee={employee}
            closeModal={closeModal}
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
         />
      </Modal>
   );
};

export default InputModal;
