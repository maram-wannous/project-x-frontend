import "./Sidbar.css"
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { FaTasks, FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgPerformance } from "react-icons/cg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import {  useState } from "react";

export default function Sidbar() {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <div>
            <div className="sa_sidebar bg-white pt-5" 
                style={{width: isOpen ? '240px' : 'fit-content'}}>
                    <NavLink to='' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <BiSolidHome />
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Home</p>
                    </NavLink>
                    <NavLink to='adminprojects' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <RiProjectorFill />
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Project</p>
                    </NavLink>
                    <NavLink to='tasks' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <FaTasks />
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Tasks</p>
                    </NavLink>
                    <NavLink to='worklog' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <GoProjectRoadmap />
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Work Logs</p>
                    </NavLink>
                    <NavLink to='performance' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <CgPerformance />
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Performance</p>
                    </NavLink>
                    <NavLink to='users' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <FaUsers/>
                        <p className='m-0' style={{display: isOpen ? 'block' : 'none'}}
                        >Users</p>
                    </NavLink>
                    <div>
                        <div className="sa_showSidbar position-absolute"
                         onClick={()=>setIsOpen(!isOpen)}
                         style={{right: isOpen ? '10px' : '-10px'}}
                         >
                            {
                                isOpen? (<IoIosArrowDropleftCircle/>): (<IoIosArrowDroprightCircle/>)
                            }
                        </div>
                    </div>
            </div>
            
        </div>
    )
}