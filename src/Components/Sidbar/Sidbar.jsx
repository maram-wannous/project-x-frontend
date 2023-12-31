import "./Sidbar.css"
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { FaTasks, FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgPerformance } from "react-icons/cg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import {  useEffect, useState } from "react";
import axios from "axios";

export default function Sidbar() {
    const [currentUser, setCurrentUser] = useState("");
    
    const [isOpen,setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: undefined
      });

      
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
          });
        }
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      const token = localStorage.getItem('bearer');

    //get user
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Admin/profile', {
            headers: {
                Accept: 'application/json',
                AUTHORIZATION: `Bearer ${token}`,
            }
        })
        .then((data)=> setCurrentUser(data.data));
      },[]);
    


    return (
            <div className="sa_sidebar bg-white pt-5"
                style={{
                    width: windowSize.width < 991 ? (isOpen? '240px' : 'fit-content') : '240px'
                }}
            >
                   
                    <NavLink to='/dashboard/' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <BiSolidHome />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Home</p>
                    </NavLink>
                    <NavLink to={currentUser.email==="admin@gmail.com"?'/dashboard/adminprojects': '/dashboard/userprojects'} className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <RiProjectorFill />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Projects</p>
                    </NavLink>
                    <NavLink to={currentUser.email==="admin@gmail.com"?'/dashboard/tasks': '/dashboard/usertasks'} className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <FaTasks />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Tasks</p>
                    </NavLink>
                    <NavLink to='/dashboard/worklog' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <GoProjectRoadmap />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Work Logs</p>
                    </NavLink>
                    <NavLink to='/dashboard/performance' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <CgPerformance />
                        <p className='m-0' 
                       style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Performance</p>
                    </NavLink>
                    {currentUser.email==="admin@gmail.com" && <NavLink to='/dashboard/users' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <FaUsers/>
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Users</p>
                    </NavLink>}

                    <div className="d-lg-none sa_showSidbar position-absolute"
                        onClick={()=>setIsOpen(!isOpen)}
                        >
                        {
                            isOpen? (<IoIosArrowDropleftCircle/>): (<IoIosArrowDroprightCircle/>)
                        }
                    </div>
            </div>
    )
}