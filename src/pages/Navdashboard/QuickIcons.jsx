import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillPeopleFill, BsFillStarFill, BsPersonFill } from "react-icons/bs";
import { FaBus, FaHome } from "react-icons/fa";
import { IoIosPeople} from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { ImBooks, ImTree } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight ,AiFillPieChart} from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { SiLibrarything } from "react-icons/si";
import "./quickicons.css"

const QuickIcons = () => {
  return (
    <div>
      <div className="container m-0">
        <div className="row">
          <div className="col-md-12 " >
            <div className="row">
              <div className="col-3">
                <Link className="quickLinks" to={`/students`} >
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <IoIosPeople style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px", top:"4px"}} />
                     <Card.Text style={{color:"#2d70a2"}}  className="text-center"> 
                     Students
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </div>
              <div className="col-3">
                 <Link className="quickLinks" to={`/teachers`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <BsFillPeopleFill style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                      Teachers
                    </Card.Text>
                  </Card.Body>
                </Card>
                 </Link>
              </div>
              <div className="col-3">
                <Link className="quickLinks" to={`/parents`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <BsPersonFill style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Parents
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </div>
              <div className="col-3">
                <Link className="quickLinks" to={`/subjects`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <ImBooks style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Subjects
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </div>
              <div className="col-3">
                <Link className="quickLinks" to={`/sections`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <AiOutlineAlignRight style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Sections
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </div>
              <div className="col-3">
              <Link className="quickLinks" to={`/class`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <ImTree style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Class
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              </div>
              <div className="col-3">
              <Link className="quickLinks" to={`/attendance`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <TiTick style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                      Attendance
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-3">
              {/* <Link className="quickLinks" to={`/class`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <ImTree style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Class
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col-3">
              {/* <Link className="quickLinks" to={`/attendance`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <TiTick style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                      Attendance
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col">
              {/* <Link className="quickLinks" to={`/exam`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <BsFillStarFill style={{color:"#2d70a2",position: "relative",right: "-97px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Exams
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col">
              {/* <Link className="quickLinks" to={`/marks`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <FaHome style={{color:"#2d70a2",position: "relative",right: "-63px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Exam Marks
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col">
              {/* <Link className="quickLinks" to={`/payments`}>
                <Card className="quickicons">
                  <Card.Body className="cardBody"> 
                  <IoWalletSharp style={{color:"#2d70a2",position: "relative",right: "-63px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Payments
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-3 ms-2 p-0" style={{width:"204px",marginRight:"27px"}}>
              {/* <Link className="quickLinks" to={`/accounting`}>
                <Card className="quickicons-last" >
                  <Card.Body className="cardBody"> 
                  <AiFillPieChart style={{color:"#2d70a2",position: "relative",right: "-63px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                     Accounting
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col-3  p-0" style={{width:"204px",marginRight:"27px"}}>
              {/* <Link className="quickLinks" to={`/library`}>
                <Card className="quickicons-last" >
                  <Card.Body className="cardBody"> 
                  <SiLibrarything style={{color:"#2d70a2",position: "relative",right: "-63px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                      Library
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
              <div className="col-3  p-0" style={{width:"204px"}}>
              {/* <Link className="quickLinks" to={`/transport`}>
                <Card className="quickicons-last" >
                  <Card.Body className="cardBody"> 
                  <FaBus style={{color:"#2d70a2",position: "relative",right: "-63px",height: "29px",width: "38px"}}/>
                     <Card.Text style={{color:"#2d70a2"}} className="text-center"> 
                      Transport
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickIcons;
