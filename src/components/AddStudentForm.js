import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import validation from "./validation";
import {
  FaEnvelopeOpenText,
  FaRegAddressCard,
  FaUserAlt,
} from "react-icons/fa";

const AddStudentForm = ({ setStudentsData }) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    address: "",
    course: "",
    gender: "",
  });
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  let handleOnBlur = (event) => {
    return 0;
  };

  const resetValues = () => {
    setValues({
      userName: "",
      email: "",
      address: "",
      course: "",
      gender: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setStudentsData((prevState) => [...prevState, values]);
      resetValues();
    }
  }, [errors]);
  return (
    <Form>
      <Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="inlineFormInputGroup">Username</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <FaUserAlt />
            </InputGroup.Text>
            <FormControl
              name="userName"
              id="inlineFormInputGroup"
              placeholder="Username"
              value={values.userName}
              onChange={handleChange}
            />
          </InputGroup>
          {errors.userName && (
            <small className="error">{errors.userName}</small>
          )}
        </Col>
        <Col>
          <Form.Label htmlFor="inlineFormInput">Email</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <FaEnvelopeOpenText />
            </InputGroup.Text>

            <Form.Control
              id="inlineFormInput"
              placeholder="Email address"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </InputGroup>
          {errors.email && <small className="error">{errors.email}</small>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaRegAddressCard />
              </InputGroup.Text>

              <Form.Control
                as="textarea"
                placeholder="Street, Number, City, Zip"
                rows={3}
                name="address"
                value={values.address}
                onChange={handleChange}
              />
            </InputGroup>
            {errors.address && (
              <small className="error">{errors.address}</small>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Form.Label>Select Course</Form.Label>
          </div>
          <div>
            <select onChange={handleChange} name="course">
              <option value="">Select course</option>

              <option value={"React"}>React</option>
              <option value={"JavaScript"}>JavaScript</option>
              <option value={"NodeJS"}>NodeJS</option>
            </select>
          </div>
          {errors.course && <small className="error">{errors.course}</small>}
        </Col>
        <Col>
          <div>
            <Form.Label htmlFor="gender-btn">Select Gender</Form.Label>
          </div>

          <div>
            <ButtonGroup
              value={values.gender}
              name="gender"
              id="gender-btn"
              className="mb-2"
            >
              <Button name="gender" onClick={handleChange} value="Female">
                Female
              </Button>
              <Button name="gender" onClick={handleChange} value={"Male"}>
                Male{" "}
              </Button>
              <Button name="gender" onClick={handleChange} value={"Other"}>
                Other
              </Button>
            </ButtonGroup>
          </div>
          {errors.gender && <small className="error">{errors.gender}</small>}
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            className="btn-block"
            onClick={handleFormSubmit}
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddStudentForm;
