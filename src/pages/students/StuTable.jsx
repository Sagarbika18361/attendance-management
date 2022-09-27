import React, { Fragment, useEffect, useState } from "react";
import "./table.css";
import axios from "axios";
import {
  BsArrowDown,
  BsArrowUp,
  BsFillEyeFill,
  BsFillPenFill,
} from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./dropdown.css"
// import DeleteModal from "./DeleteModal";
// import { useParams } from "react-router-dom";
// import classes from './StuTable.module.css'
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

const StuTable = () => {
  const [users, setUser] = useState([
    // {
    //   name: "",
    //   username: "",
    //   email: "",
    //   phone: "",
    //   website: "",
    // },
  ]);

  console.log(users, "this is user");

  // search students
  const [query, setQuery] = useState("");
  // const [copy, setCopy] = useState([]);

  // console.log(copy,"this is copy of api")

  // const funcSearch=(e)=>{
  //   const getSearch= e.target.value;
  //   setQuery(getSearch)
  //   if(getSearch == "")
  //   {
  //     setUser(copy)
  //   }else {
  //     const searchdata= copy.filter( (item)=> item.fullname.toLowerCase().includes(getSearch))
  //     .filter( (item) => item.email.toLowerCase().includes(getSearch))

  //     setUser(searchdata)
  //   }
  // }

  // search students

  // delete()

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/users`);

    setUser(result.data.reverse());
    // setCopy(result.data)
    // console.log(result.data.reverse());
  };
  //  delete users

  // const [modal, setModal] = useState(true)
  let ID = 0;
  const idGiven = (id) => {
    ID = id;
    console.log(ID);
  };
  const deleteUser = async (id) => {
    console.log(" deleted", id);
    await axios.delete(`http://localhost:3005/users/${id}`);
    // console.log(delresult);
    loadUser();
  };

  // const [open, setOpen] = useState(false);
  // const isOpen = () => {
  //   open? setOpen(false) : setOpen(true)
  // }

  // sorting

  const [corder, setCOrder] = useState("ASC");
  const [sorder, setSOrder] = useState("ASC");
  const [order, setOrder] = useState("ASC");
  const [dorder, setDOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...users].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );

      // if (col === 'createdAt') setCOrder('DSC')
      // if (col === 'SourceName') setSOrder('DSC')
      // if (col === 'Description') setDOrder('DSC')
      setUser(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...users].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      if (col === "createdAt") setCOrder("ASC");
      if (col === "SourceName") setSOrder("ASC");
      if (col === "Description") setDOrder("ASC");
      setUser(sorted);
      setOrder("ASC");
    }
  };
  // sorting end

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  City
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Source
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Status
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Branch
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div class="dropdown drpdwn">
                <a
                  class="btn btn-white border dropdown-toggle drpanchor"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Assign To
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="row">
      <div className="col-4">
        <input
             className="w-100 mt-2 mb-2"
            type="date"
            placeholder="Select Followup Data"
            style={{height: "36px",
    border: "1px solid #e0e4e7",
    borderRadius: "5px",
}}
          /></div>
      <div className="col-4 ">
        <input
            className="w-100 mt-2 mb-2"
            type="date"
            placeholder="Select Enquiry Date"
            style={{height: "36px",
    border: "1px solid #e0e4e7",
    borderRadius: "5px",
}}
          /></div>
      <div className="col-4">
      <input
             className="w-100 mt-2 mb-2"
            type="text"
            placeholder="Search..."
            style={{height: "36px",
    border: "1px solid #e0e4e7",
    borderRadius: "5px",
}}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
      </div>
    </div>

      {/* dropdown end */}

      {users.name != "" ? (
        <section className="intro">
          <div className="gradient-custom-2 h-100">
            <div className="mask d-flex align-items-center h-100">
              <div className="container m-0 p-0 w-100" >
                <div className="row justify-content-center"  style={{
                        width:"107%"
                      }}>
                  <div className="col-12">
                    <div
                      className="table-responsive stuTableDiv"
                      style={{
                        overflow: "auto",
                        height: "400px",
                        borderBottom:"1px solid black"
                      }}
                    >
                      <table
                        className="table table-white mb-0"
                        style={{ border: "1px solid black" }}
                      >
                        <thead>
                          <tr
                            className="text-white"
                            style={{
                              background: "#1c3a8f",
                              position: "sticky",
                              top: "0px",
                            }}
                          >
                            <th
                              className=""
                              scope="col"
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                            >
                              Total
                            </th>
                            <th
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                              scope="col"
                              onClick={() => sorting("fullname")}
                            >
                              Full Name
                              {order == "ASC" ? <BsArrowDown /> : <BsArrowUp />}
                            </th>
                            <th
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                              scope="col"
                              onClick={() => sorting("email")}
                            >
                              E-Mail
                              {order == "ASC" ? <BsArrowDown /> : <BsArrowUp />}
                            </th>
                            <th
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                              scope="col "
                              onClick={() => sorting("phone")}
                            >
                              CONTACTS
                              {order == "ASC" ? <BsArrowDown /> : <BsArrowUp />}
                            </th>
                            <th
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                              scope="col "
                            >
                              Status
                              {/* { order == 'ASC' ? <BsArrowDown /> : <BsArrowUp />} */}
                            </th>
                            <th
                              style={{
                                position: "sticky",
                                top: 0,
                              }}
                              scope="col "
                            >
                              Operation
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*  */}
                          {users &&
                            users
                              .filter((e) => {
                                if (query == "") {
                                  return e;
                                } else if (
                                  e.fullname
                                    .toLowerCase()
                                    .includes(query.toLowerCase()) ||
                                  e.email
                                    .toLowerCase()
                                    .includes(query.toLowerCase()) ||
                                  e.phone
                                    .toLowerCase()
                                    .includes(query.toLowerCase())
                                ) {
                                  return e;
                                }
                              })
                              .map((curElem, index) => {
                                return (
                                  <>
                                    <tr
                                      key={index}
                                      style={{
                                        borderBottom: "1px solid black",
                                      }}
                                    >
                                      <th scope="row">{index + 1}</th>
                                      <td>{curElem.fullname}</td>
                                      <td>{curElem.email}</td>
                                      <td>+91 {curElem.phone}</td>
                                      {curElem.status == "active" ? (
                                        <td className="text-success">
                                          {curElem.status}
                                        </td>
                                      ) : (
                                        <td className="text-warning">
                                          Inactive
                                        </td>
                                      )}
                                      <div>
                                        <Link
                                          to={`/students/users/${curElem.id}`}
                                        >
                                          <span className="text-success me-1 pointer btn btn-sm">
                                            <BsFillEyeFill />
                                          </span>
                                        </Link>
                                        <Link
                                          to={`/students/users/edit/${curElem.id}`}
                                        >
                                          <span className="text-white  pointer me-1 text-primary pen btn btn-sm">
                                            <BsFillPenFill />
                                          </span>
                                        </Link>
                                        <a
                                          href="#"
                                          onClick={() => deleteUser(curElem.id)}
                                        >
                                          <span className="text-danger  pointer">
                                            <AiFillDelete />
                                          </span>
                                        </a>

                                        {/* <a
                                    data-toggle="modal"
                                    data-target="#mymodal"
                                    // onClick={() => idGiven(curElem.id)}
                                    // onClick={() => { func1(); func2();}}
                                    onClick={()=>{isOpen(); idGiven(curElem.id)}}
                                    className="text-danger btn btn-sm "
                                  >
                                    <AiFillDelete />
                                  </a> */}
                                      </div>
                                    </tr>

                                    {/* delete modal */}
                                    {/* <div
                              className={open? "modal fade openStyle": "modal fade"}
                                // className="modal fade"
                                id="mymodal"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                                
                              >
                                <div
                                  className="modal-dialog modal-md modal-dialog-centered"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">
                                        Confirmation
                                      </h5>
                                    </div>
                                    <div className="modal-body">
                                      Are you sure to delete this Information
                                      permanently?
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-flat"
                                        id="confirm"
                                        // onClick={() => deleteUser(ID)}
                                        onClick={()=>{isOpen();deleteUser(ID)}}
                                        data-dismiss="modal"
                                      >
                                        Continue
                                      </button>
                                      <button
                                        type="button"
                                        className="btn  border btn-flat"
                                        data-dismiss="modal"
                                        onClick={isOpen}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                                  </>
                                );
                              })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default StuTable;
