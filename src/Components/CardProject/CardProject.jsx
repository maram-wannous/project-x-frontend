import './CardProject.css'
import { FiEdit } from "react-icons/fi";
import { BsHourglassBottom } from "react-icons/bs";
import { SlFolderAlt } from "react-icons/sl";
import imgTeam from './../../assets/imgTeam.png';
import { Link } from 'react-router-dom'


export const CardProject = () => {
  return (
    <div className='sa_cardProject'>
        <div className='d-flex align-items-center justify-content-between border-bottom pb-2'>
            <div className='d-flex align-items-center gap-3 '>
                <p className='sa_ProjectName'>Adoddle</p>
                <Link to={'/dashboard/adminprojects/update'}><FiEdit className='sa_FiEdit'/></Link>
            </div>
            <button className='sa_buttOfftrack'>Offtrack</button>
        </div>
        <div className='pt-4 pb-4 px-2 sa_CardText'>
            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            <p className='mb-0'> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='d-flex align-items-center gap-2 pb-3'>
            <BsHourglassBottom className='sa_BsHourglassBottom'/>
            <p className='sa_DateProject mb-0'>05 APRIL 2023</p>
        </div>
        <div className='d-flex align-items-center justify-content-between px-2 py-3'>
            <div className='d-flex align-items-center position-relative'>
                <div className='sa_CardImageTeam position-absolute'>
                    <img className='sa_imgTeam sa_imgTeam1' src={imgTeam} alt="" />
                </div>
                <div className='sa_CardImageTeam sa_CardImageTeam2 position-absolute'>
                    <img className='sa_imgTeam sa_imgTeam2' src={imgTeam} alt="" />
                </div>
                <div className='sa_CardImageTeam sa_CardImageTeam3 position-relative '>
                    <img className='sa_imgTeam sa_imgTeam3' src={imgTeam} alt="" />
                </div>
                <div className='sa_CardImageTeam sa_CardImageTeam4 position-relative'>
                    <img className='sa_imgTeam sa_imgTeam4' src={imgTeam} alt="" />
                </div>
                <div className='sa_CardImageTeam sa_CardImageTeam5 position-relative'>
                    <img className='sa_imgTeam' src={imgTeam} alt="" />
                </div>
                <div className='sa_CardImageTeam sa_CardImageTeam6 position-relative'>
                    <img className='sa_imgTeam' src={imgTeam} alt="" />
                </div>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <SlFolderAlt className='sa_SlFolderAlt'/>
                <p className='sa_14_issues mb-0'>14 issues</p>
            </div>
        </div>
    </div>
  )
}