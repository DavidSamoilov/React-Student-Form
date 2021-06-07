import React, { useEffect, useState } from "react";
import data from "./DAL/studentData";
import DisplayStudentData from "./components/DisplayStudentData";
import ModalButton from "./components/ModalButton";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
function App() {
  
  const [modalShow, setModalShow] = useState(false);

  const [studentsData, setStudentsData] = useState(data);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(studentsData));
    
  }, [studentsData])

  return (
    <Container>
      <Header/>

      <ModalButton
        setStudentsData={setStudentsData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <DisplayStudentData
        studentsData={studentsData}
        setModalShow={setModalShow}
        setStudentsData={setStudentsData}
      />
      
    </Container>
  );
}

export default App;
