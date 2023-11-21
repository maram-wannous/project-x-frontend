import './ProjectDetails.css'
import imgTeam from './../../../../assets/imgTeam.png';
import { FaLongArrowAltRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Clock } from '../../../../Components/Clock/Clock';
import { CardTask } from '../../../../Components/CardTask/CardTask';
import { BiCommentDots } from "react-icons/bi";
import { SlFolderAlt } from "react-icons/sl";


export default function ProjectDetails() {
    return(
        <div>
            <div className='sa_divTitle d-flex justify-content-between flex-wrap'>
                <div>
                    <p className="header-style">Projects / Addodle</p>
                    <div className='d-flex align-items-center gap-2'>
                        <p className='mb-0'>Addodle</p>
                        <div className='sa_CardImageTeam'>
                            <img className='sa_imgTeam' src={imgTeam} alt="" />
                        </div>
                        <FaLongArrowAltRight className='text-black-50' />
                        <div className='d-flex position-relative '>
                            <div className='sa_CardImageTeam sa_CardImage1'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                            <div className='sa_CardImageTeam sa_CardImage2'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                            <div className='sa_CardImageTeam sa_CardImage3'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                            <div className='sa_CardImageTeam sa_CardImage4'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                            <div className='sa_CardImageTeam sa_CardImage5'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                            <div className='sa_CardImageTeam sa_CardImage6'>
                                <img className='sa_imgTeam' src={imgTeam} alt="" />
                            </div>
                        </div>
                        <p className='sa_btnOfTrak ms-2'>OnTrack</p>
                    </div>
                </div>
                <div className='d-flex gap-4'>
                    <div className='d-flex flex-column align-items-center h-100 justify-content-end'>
                        <p className='sa_textTime'>Start Date</p>
                        <Clock />
                    </div>
                    <div className='d-flex flex-column align-items-center h-100 justify-content-end'>
                        <p className='sa_textTime'>Deadline</p>
                        <Clock />
                    </div>
                </div>
            </div>
            <div className='sa_bodyBox sa_divTitle '>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='sa_backTask'>
                    <CardTask />
                </div>
                <div className='d-flex align-items-center gap-4 justify-content-end '>
                    <div className='d-flex align-items-center gap-2'>
                        <BiCommentDots className='sa_iconBottomTaska' />
                        <p className='mb-0 sa_textBottomTaska'>50 tasks</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <SlFolderAlt className='sa_iconBottomTaska' />
                        <p className='mb-0 sa_textBottomTaska'>15 files</p>
                    </div>
                </div>
            </div>
        </div>
    )
}