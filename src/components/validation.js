const validation = (values) => {
  let errors = {};
  if (!values.userName) {
    errors.userName = "UserName is required ";
  } else if (values.userName && values.userName.length < 2) {
    errors.userName = "UserName should be no less than 2 characters ";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.address) {
    errors.address = "Address is required";
  } else if (values.address && values.address.length < 10) {
    errors.address = "Address should be no less than 10 characters";
  }
  if (!values.course) {
    errors.course = "Course is required";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  return errors;
};

export default validation;
