/* eslint-disable react/prop-types */
 
import avatar from './../../assets/avatar.png'
import add from './../../assets/add.png'
import email from './../../assets/email.png'
import block from './../../assets/block.png'
import gallery from './../../assets/gallery.png'
import user from './../../assets/user.png'

import "./ProfileInfo.css";
import { Link } from 'react-router-dom'
// import React from "react";

export default function ProfileInfo({pageProfile}) {
  return (
    <div className="sl-info">
        <div className="sl-divimg">
          <img className="sl-img" src={avatar} />
          <div className="sl-img-border"></div>
        </div>
        <p className='fw-bold'>Yash Ghori</p>
        <p>Ahmedabad, Gujarat</p>
        <p>India</p>
        <div className="mr-line"></div>
        <ul>
          <li>
            <img src={user} alt="" />
            <p>UI - Intern</p>
          </li>
          <li>
            <img src={block} alt="" />
            <p>On-Teak</p>
          </li>
          <li className='mr-line'></li>
          <li>
            <img src={add} alt="" />
            <p>+91 7048144030</p>
          </li>
          <li>
            <img src={email} alt="" />
            <p>yghori@asite.com</p>
          </li>
          <li>
            <img src={gallery} alt="" />
            <p>PDT - I</p>
          </li>
          <li className='mr-line'></li>
          {
            pageProfile && (<li><Link to={'/dashboard/profile/updateprofile'} className='btn'>Update Profile</Link></li>)
          }
        </ul>
    </div>
  );
}
