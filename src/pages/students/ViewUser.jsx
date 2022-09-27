import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewUser = () => {
  const [users, setUser] = useState([{
    name: "",
    username: "",
    email: "",
    phone: "",
   }
 ]);

  console.log(users,"this is single user")
  const { id } = useParams();

  useEffect(() => {
    ViewSingle();
  }, []);

  const ViewSingle = async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <>
      <div className="container py-4">
        <Link className="btn btn-primary" to="/students">
          Student Page
        </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        
        <table class="table">
          <thead className="bg-dark text-white">
            <tr className="mb-4">
              <th className="border-primary bg-secondary">User Details :-</th>
              <th className="text-end border-primary bg-secondary "></th>
            </tr>
            <tr>
              <th>Name :</th>
              <th>{users.fullname}</th>
            </tr>
            <tr>
              <th>Email :</th>
              <th>{users.email}</th>
            </tr>
            <tr>
              <th>Phone Number :</th>
              <th>{users.phone}</th>
            </tr>
            <tr>
              <th>Gender :</th>
              <th>{users.gender}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default ViewUser;
