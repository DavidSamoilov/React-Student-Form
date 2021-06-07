import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FullStudentData from "./FullStudentCard";

const DisplayStudentData = ({
  studentsData,
  setModalShow,
  setStudentsData,
}) => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState("");
  const currentStudent = (e) => {
    setSelectedStudentIndex(e.target.id);
  };
  const sortDataByName = () => {
    setStudentsData(([...prevState]) => {
      return prevState.sort(function (a, b) {
        if (a.userName < b.userName) {
          return -1;
        }
        if (a.userName > b.userName) {
          return 1;
        }
        return 0;
      });
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="students-names">
            <ul>
              {studentsData.map((item, index) => {
                return (
                  <li
                    className="li-students"
                    key={index}
                    id={index}
                    onClick={currentStudent}
                  >
                    {item.userName}
                  </li>
                );
              })}
              <Container>
                <Row className="justify-content-center">
                  <Col>
                    <button onClick={() => setModalShow(true)}>
                      <i className="fas fa-plus-square"></i>
                    </button>
                    <small> add student</small>
                  </Col>
                  <Col></Col>

                  <button onClick={sortDataByName}>Sort By name</button>
                </Row>
              </Container>
            </ul>
          </Col>
          <Col>
            {selectedStudentIndex && (
              <FullStudentData
                selectedStudentIndex={selectedStudentIndex}
                studentsData={studentsData}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayStudentData;
