import './AdminSubTask.css'
import { Link } from "react-router-dom";
// import { CardTask } from './../../../../Components/CardTask/CardTask';
import ImgTask from './../../../../assets/ImgTask.png';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { CiCalendar } from 'react-icons/ci';
import { MdOutlineInsertComment } from 'react-icons/md';
import { CardTask } from '../../../../Components/CardTask/CardTask';

export default function AdminSubTask() {
    const isAdmin = true;
    return (
        <div>
            <div className="d-flex justify-content-between sa_divTitle">
                <p className="header-style">Task / Make an Automatic Payment System that enable the design</p>
                <Link to={'/dashboard/tasks/assigntask'}><button className="btn">Assign Sub task</button></Link>
            </div>
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
                            <div className='sa_backSubTask w-100'>
                                <CardTask isAdmin={isAdmin} />
                            </div>
                            <div className='sa_backSubTask w-100'>
                                <CardTask isAdmin={isAdmin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}