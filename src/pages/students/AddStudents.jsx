import axios from "axios";
import React, { useState } from "react";
// import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddStudents = () => {
  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const loadUser = async () => {
  //   await axios.post("http://localhost:3005/users");
  // };

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
  });
  
  const {  fullname, email, phone, gender } = user;
  const navigate=useNavigate();

  // const onInputChange =(e)=>{
  //   setUsers({...users,[e.targer.name]:e.target.value})
  // }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //  const result= await axios.post("http://localhost:3005/users",users)
  //  console.log(result.data);
  //  navigate("/")
  // };

  const onInputChange = (e) => {
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3005/users", user);
        navigate("/students");
      };

  return (
    <div className="container my-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Name"
              name="fullname"
              value={fullname}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudents;