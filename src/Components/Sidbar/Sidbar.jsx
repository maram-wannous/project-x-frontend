import "./Sidbar.css"
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgPerformance } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import{ FaArrowAltCircleLeft } from "react-icons/fa";
import{ FaArrowAltCircleRight } from "react-icons/fa";

export default function Sidbar() {
    return (
        <div>
            <div className="sa_sidebar position-absolute bg-white">
                <div className="sa_itemSidbar">
                    <BiSolidHome className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='/' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Home
                    </NavLink>
                </div>
                <div className="sa_itemSidbar">
                    <RiProjectorFill className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Project
                    </NavLink>
                </div>
                <div className="sa_itemSidbar">
                    <FaTasks className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Tasks
                    </NavLink>
                </div>
                <div className="sa_itemSidbar">
                    <GoProjectRoadmap className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Work Logs
                    </NavLink>
                </div>
                <div className="sa_itemSidbar">
                    <CgPerformance className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Performance
                    </NavLink>
                </div>
                <div className="sa_itemSidbar">
                    <IoMdSettings className="sa_iconSidbar" />
                    <NavLink className="sa_textSidbar" to='' style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "", };
                    }}>
                        Settings
                    </NavLink>
                </div>
            </div>
            <div>
                <div className="sa_showSidbar position-absolute">
                    <FaArrowAltCircleLeft />
                </div>
                <div className="sa_showSidbar position-absolute">
                    <FaArrowAltCircleRight />
                </div>
            </div>
        </div>
    )
}