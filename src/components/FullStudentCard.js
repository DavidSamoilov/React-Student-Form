import React from "react";

const FullStudentData = ({ selectedStudentIndex, studentsData }) => {
  let { userName, address, email, gender, course } =
    studentsData[selectedStudentIndex];
  return (
    <div id="card">
      <img
        alt="user-image"
        id="userImage"
        src={`https://randomuser.me/api/portraits/men/${selectedStudentIndex}.jpg`}
      ></img>
      <i className="fa fa-book" id="badge"></i>
      <h4 id="playerName">{userName}</h4>
      <div id="states">
        <ul id="info">
          <li>Gender</li>
          <li>Course</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
        <ul id="values">
          <li>{gender}</li>
          <li>{course}</li>
          <li>{email}</li>
          <li>{address}</li>
        </ul>
      </div>
    </div>
  );
};

export default FullStudentData;
