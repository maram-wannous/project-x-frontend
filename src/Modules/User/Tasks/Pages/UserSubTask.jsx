import {  useState } from 'react'
import './UserSubTask.css'
import TaskPopUp from '../Components/TaskPopUp/TaskPopUp';
import { CardTask } from './../../../../Components/CardTask/CardTask';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { CiCalendar } from 'react-icons/ci';
import { MdOutlineInsertComment } from 'react-icons/md';
import ImgTask from './../../../../assets/ImgTask.png';
import { Link } from 'react-router-dom';

export default function UserSubTask() {
    const [openPopUp, setOpenPopUp] = useState(false);
    console.log(openPopUp);

    const handleOpenPopup = (value) =>{
        setOpenPopUp(!value);
    }
    
    return (
        <div>
            <p className="header-style">Task / Subtasks</p>
                {openPopUp && <TaskPopUp closePopup={handleOpenPopup} openPopUp={openPopUp}/>}
            <div className="sa_bodyBox sa_divTitle">
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
                            <Link to={'/dashboard/tasks/subtask'}>
                                <button><MdOutlineInsertComment className='sa_btnToSubTask' /></button>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center flex-column mt-4">
                            <div className='sa_backSubTask w-100' onClick={()=>handleOpenPopup(openPopUp)} >
                                <CardTask />
                            </div>
                            <div className='sa_backSubTask w-100' onClick={()=>handleOpenPopup(openPopUp)} >
                                <CardTask />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}