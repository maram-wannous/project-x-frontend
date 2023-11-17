import { Clock } from '../Clock/Clock';
import './CardTask.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import ImgTask from './../../assets/ImgTask.png';
import { Link } from "react-router-dom";
import { MdOutlineInsertComment } from "react-icons/md";

export const CardTask = () => {
    return (
        <div className='sa_CardTask'>
            <div className='d-flex align-items-center gap-2 justify-content-between flex-wrap '>
                <div className='d-flex align-items-center gap-2'>
                    <HiOutlineLightBulb className='sa_lamp' />
                    <div>
                        <p className='sa_titleTaskCard mb-0 '>Make an Automatic Payment System that enable the design</p>
                        <div className='d-flex align-items-center gap-2 flex-wrap'>
                            <p className='mb-0 sa_TextP'>#402235  Opened 10 days ago by <span className='sa_TextSpan'>Yash Ghori</span></p>
                            <button className='sa_btnCancel'>Canceled</button>
                            <button className='sa_btnComplete'>Completed</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 '>
                    <Clock />
                    <div className='sa_DivImgTask'>
                        <img src={ImgTask} alt="" />
                    </div>
                    <Link to={'/dashboard/tasks/subtask'}><button><MdOutlineInsertComment className='sa_btnToSubTask'/></button></Link>
                </div>
            </div>
        </div>
    )
}
