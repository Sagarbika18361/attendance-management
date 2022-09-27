import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStu = () => {  

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
  });
  
  const {  fullname, email, phone,gender } = user;
  const navigate=useNavigate();
  
  
  
  const onInputChange = (e) => {
      console.log(e)
      setUser({ ...user, [e.target.name]: e.target.value });
      };

      const {id} = useParams();
      
      useEffect(()=>{
          loadUser()
        },[])
    
        const loadUser = async ()=>{
            const response=await axios.get(`http://localhost:3005/users/${id}`)
            setUser(response.data)
        }

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/users/${id}`,user);
        navigate("/students");
      };

  return (
    <div className="container my-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Full Name"
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
          <div className=" d-flex justify-content-center align-items-center mt-4 ">
            <button className="btn btn-primary btn-block w-50 ">Edit User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStu;