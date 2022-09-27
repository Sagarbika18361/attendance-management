import { useState } from "react";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import CardComp from "./Card";
import QuickIcons from "./QuickIcons";


const Dashboard = () => {

  // for class change of submenu 
// const initialstate = {
//   x:""
// }

// const [class, setClass] = useState(intialstate);

  return <div > 
  <div className="container-fluid main" >
    <div className="row">
      <div className="col-12 text-white d-flex p-0 cardComp ms-0">
        <CardComp color="#f66955"  num={3} str="Total Students" className="Tstudents"  icon={<IoIosPeople />} style={{
    //       backgroundColor: "#cb5e7c",
    // backgroundImage: "-moz-linear-gradient(145deg, #0039e4, #04dbf1)",
    // backgroundImage: "-webkit-linear-gradient(145deg , #0039e4, #04dbf1)",
    // backgroundImage: "linear-gradient(145deg, #d50434, #9d467a)"
  }}/>
        <CardComp  color="#00a65a" num={3} str="Total Teachers " icon={<BsFillPeopleFill />}/>
        <CardComp color="#00c0ef" num={1} str="Total Parent" icon={<BsPersonFill />}/>
      </div>
      <h5 className="mt-3 ms-0 ps-0">Schools Management System Quick Scan</h5>
    </div>
    <div className="row">
      <div className="col-12 pt-3 pb-3" style={{background:"#f0f0f0",height:"100vh"}}>
        <QuickIcons/>
      </div>
    </div>
  </div>
  </div>;
};

export default Dashboard;
