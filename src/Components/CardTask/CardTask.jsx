// import { Clock } from '../Clock/Clock';
import './CardTask.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import ImgTask from './../../assets/ImgTask.png';
import { Link } from "react-router-dom";
import { MdOutlineInsertComment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
// import { CiCircleList } from "react-icons/ci";
// import { useState } from "react";

export const CardTask = () => {

    // const [open, setOpen] = useState(false);

    return (
        <div className='sa_CardTask'>
            <div className='d-flex align-items-center gap-2 justify-content-between flex-wrap '>
                <div className='d-flex align-items-center gap-2'>
                    <HiOutlineLightBulb className='sa_lamp' />
                    <div>
                        <p className='sa_titleTaskCard mb-0 '>Make an Automatic Payment System that enable the design</p>
                        <div className='d-flex align-items-center gap-2 flex-wrap'>
                            <p className='mb-0 sa_TextP'>#402235  Opened 10 days ago by <span className='sa_TextSpan'>Yash Ghori</span></p>
                            <p className='sa_btnType mb-0'>High</p>
                            <p className='sa_btnStatus mb-0'>Pending</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-4'>
                    <div>
                        <p className='sa_DateTextUserProjects mb-0'>Start Date</p>
                        <div className='d-flex gap-1 sa-startdate'>
                            <CiCalendar className='sa_IconBtnKanban' />
                            <p className='sa_DateTextUserProjects mb-0'>25/3/2023</p>
                        </div>
                    </div>
                    <div>
                        <p className='sa_DateTextUserProjects mb-0'>End Date</p>
                        <div className='d-flex gap-1 sa-enddate'>
                            <CiCalendar className='sa_IconBtnKanban' />
                            <p className='sa_DateTextUserProjects mb-0'>25/3/2023</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 '>
                    {/* <Clock /> */}
                    <div className='sa_DivImgTask'>
                        <img src={ImgTask} alt="" />
                    </div>
                    <Link to={'/dashboard/tasks/subtask'}><button><MdOutlineInsertComment className='sa_btnToSubTask' /></button></Link>
                    {/* <button className="position-relative" onClick={()=> {setOpen(!open)}}><CiCircleList className='sa_btnToSubTask' /></button> */}
                    {/* <div className={`sa_dropDownTask ${open? "active" : "inactive"}`} >
                    <div className="d-flex align-items-center gap-3 py-1">    
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Adam got employee of the month</p>
                            <p className="sa_notiDate">03 April, 2021 | 02:00 PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 py-1">  
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Jenny joined team HR</p>
                            <p className="sa_notiDate">04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 py-1">
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Ellie joined team developers</p>
                            <p className="sa_notiDate">04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}
