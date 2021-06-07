import React from "react";
import Modal from "react-bootstrap/Modal";
import AddStudentForm from "./AddStudentForm";
const ModalButton = ({ show, onHide, setStudentsData, studentsData }) => {
  return (
    <Modal
      className="text-center"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Student Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddStudentForm
          setStudentsData={setStudentsData}
          studentsData={studentsData}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalButton;
