import React from "react";
import StuTable from "./StuTable";
import { BiSearch } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
// import SkipPreviousIcon from 'material-ui/icons/SkipPrevious';

const Students = () => {

  return (
    <>
      <div className="container-fluid d-flex justify-content-evenly">
        <div className="row w-100">
          <div className="col-12 d-flex">
            {/* <div className="dropdown">
                  <a className="btn btn border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    City
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div> */}
              
            </div>
          <StuTable />
        </div>
      </div>
    </>
  );
};

export default Students;

// {new Array(12).fill("").map((item,index)=>{
//   return(
//     <div className="col-4 p-2">
//     <StuTable />
// </div>
//   )
// })}
