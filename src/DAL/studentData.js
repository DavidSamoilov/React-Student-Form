let data;
if (localStorage.getItem("data") === null) {
  data = [
    {
      userName: "David",
      gender: "Male",
      address: "Ashdod",
      email: "www.david@gmail.com",
      course: "React",
    },
    {
      userName: "Daniel",
      gender: "Male",
      address: "Tel-Aviv",
      email: "www.Daniel@gmail.com",
      course: "React",
    },
    {
      userName: "Adi",
      gender: "Male",
      address: "New-York",
      email: "www.Adi@gmail.com",
      course: "React",
    },
    {
      userName: "Roni",
      gender: "Male",
      address: "Yavne",
      email: "www.david@gmail.com",
      course: "React",
    },
    {
      userName: "Linor",
      gender: "Male",
      address: "Gan-Yavne",
      email: "www.Roni@gmail.com",
      course: "React",
    },
    {
      userName: "Moti",
      gender: "Male",
      address: "Eilat",
      email: "www.Moti@gmail.com",
      course: "JavaScript",
    },
    {
      userName: "Liad",
      gender: "Male",
      address: "Beer-Sheva",
      email: "www.Liad@gmail.com",
      course: "NodeJS",
    },
  ];
} else {
  data = JSON.parse(localStorage.getItem("data"));
}

export default data;
