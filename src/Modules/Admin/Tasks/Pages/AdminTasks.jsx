import './AdminTasks.css'
import imgTeam from './../../../../assets/imgTeam.png';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AdminTasks() {
    return (
        <div>
            <div className='sa_divTitle'>
                <div>
                    <p className="header-style">Projects / Addodle</p>
                    <div className=" d-flex  align-items-center justify-content-between ">
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
                            <button className='sa_btnOfTrak'>OnTrack</button>
                        </div>
                        <div>
                            <button className='btn'>Assign Task</button>
                        </div>
                    </div>
                </div>

            </div>
</div>
)
}



