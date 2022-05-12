import Modal from "react-modal";

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

const DeleteModal = ({
   modalIsOpen,
   closeModal,
   employeeId,
   isUpdated,
   setIsUpdated,
}) => {
   const handleDelete = async () => {
      const response = await fetch(
         `http://localhost:5000/api/employees/${employeeId}`,
         {
            method: "DELETE",
         }
      );
      //const data = await response.json();
      setIsUpdated(!isUpdated);
      closeModal();
   };

   return (
      <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
      >
         <div>
            <h1>Are you sure you want to delete this employee?</h1>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
         </div>
      </Modal>
   );
};

export default DeleteModal;
