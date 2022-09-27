import { NavLink } from "react-router-dom";
import { FaBars, FaHome,FaBus , FaDivide } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiFillPieChart, AiOutlineAlignRight, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsFillPeopleFill, BsFillStarFill, BsPersonFill, BsPlusSquareFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { IoIosPeople, IoMdSettings } from "react-icons/io";
import { ImBooks, ImTree } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { IoWalletSharp } from "react-icons/io5";
import { SiLibrarything } from "react-icons/si";
// import { HiSquares2X2 } from "react-icons/hi2";


const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/students",
    name: "Student",
    icon: <IoIosPeople />,
  },
  {
    path: "/teachers",
    name: "Teachers",
    icon: <BsFillPeopleFill />,
  },
  // {
  //   path: "/parents",
  //   name: "parents",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  {
    path: "/parents",
    name: "Parents",
    icon: <BsPersonFill />,
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: <ImBooks />,
  },
  // {
  //   path: "/sections",
  //   name: "sections",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  {
    path: "/sections",
    name: "Sections",
    icon: <AiOutlineAlignRight />,
  },
  // {
  //   path: "/division",
  //   name: "Division",
  //   icon: <FaDivide />,
  // },
  {
    path: "/class",
    name: "Class",
    icon: <ImTree />,
  },
  {
    path: "/attendance",
    name: "Attendance",
    icon: <TiTick />,
  },
];


const SideBar = ({ children }) => {
  
  const initialState ={
    x:" "
  }
  
  const [init, setInit] = useState(initialState)
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen );
  const funcset = () => setInit({x:"left-202"});

  console.log(init)


  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 18,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
            
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              {/* <FaBars onClick={toggle}  /> */}
              <FaBars onClick={toggle}   />
            </div>
          </div>
          {/* search bar */}
          {/* <div className="search bg-black me-2" style={{background: "black",border: "0",outline: "0",height:"42px" }}>
            <div className="search_icon cursor-pointer">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search..."
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link text-decoration-none"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main style={{paddingLeft: isOpen ? '210px':'60px' }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
