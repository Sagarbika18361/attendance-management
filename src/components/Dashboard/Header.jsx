import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../Dashboard/headerSearchbar.css";
// import { BiSearch } from "react-icons/bi";
import "./header.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

const HomeHeader = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {pathname == "/students" ? (
        <div
          className="position-fixed headerNavFixed"
          style={{ width: "100vw" }}
        >
          <nav
            className="navbar navbar mr-3 "
            style={{ backgroundColor: "#272c36", height: "63px" }}
          >
            <div className="container-fluid ">
              <a
                className="navbar-brand text-white "
                href="/"
                style={{ backgroundColor: "#272c36" }}
              >
                <FaHome />
                <span className="ms-4 p-0">Schools Management System</span>
              </a>

             
                <span className="text-white me-4 position-relative">
                  {" "}
                  <Link
                    to="/students/add"
                    className="text-white  bg-success text-decoration-none rounded-pill p-2 "
                  >
                    <BsFillPlusCircleFill /> ADD STUDENT
                  </Link>{" "}
                </span>
             
            </div>
          </nav>
        </div>
      ) : (
        <div
          className="position-fixed headerNavFixed"
          style={{ width: "100vw" }}
        >
          <nav
            className="navbar navbar mr-3 "
            style={{ backgroundColor: "#272c36", height: "63px" }}
          >
            <div className="container-fluid ">
              <a
                className="navbar-brand text-white "
                href="/"
                style={{ backgroundColor: "#272c36" }}
              >
                <FaHome />
                <span className="ms-4 p-0">Schools Management System</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default HomeHeader;
