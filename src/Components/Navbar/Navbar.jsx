import "./Navbar.css"
import { MainLogo } from "../../assets/MainLogo";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import person_pic from "././../../assets/person_pic.png";
import noti_pic1 from "././../../assets/noti_pic1.png";
import noti_pic2 from "././../../assets/noti_pic2.png";
import noti_pic3 from "././../../assets/noti_pic3.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    
    const [open, setOpen] = useState(false);

    return (
    <nav className="px-4 py-2 d-flex justify-content-between align-items-center  gap-3 bg-white position-fixed top-0 left-0 sa-nav">
        <div>
            <MainLogo/>
        </div>
        <div className="d-flex align-items-center gap-3">
            <form className="sa-form">
                <FiSearch className="sa_searchIcon" />
                <input type="search" placeholder="Search for anything..." className="sa_searchText" />
            </form>
            <div>
                <button onClick={()=> {setOpen(!open)}}>
                    <div className="position-relative">
                        <div className="sa_countNotif"></div>
                        <IoNotificationsOutline className="sa_notifIcon"/>
                    </div>
                </button>
                <div className={`sa_dropDown ${open? "active" : "inactive"}`} >
                    <div className="d-flex align-items-center gap-3 py-1">
                        <img className="sa_notiPic" src={noti_pic1} alt="" />
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Adam got employee of the month</p>
                            <p className="sa_notiDate">03 April, 2021 | 02:00 PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 py-1">
                        <img className="sa_notiPic" src={noti_pic2} alt="" />
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Jenny joined team HR</p>
                            <p className="sa_notiDate">04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 py-1">
                        <img className="sa_notiPic" src={noti_pic3} alt="" />
                        <div className="d-flex flex-column gap-1">
                            <p className="sa_notiContent">Ellie joined team developers</p>
                            <p className="sa_notiDate">04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-end gap-1">
                <Link to={'/dashboard/profile'}><p className="sa_name">Anima Agrawal</p></Link>
                <p className="sa_info">U.P, India</p>
            </div>
            <div>
                <img className="sa_personPic" src={person_pic} alt="person" />
            </div>
        </div>
    </nav>
    )
}

