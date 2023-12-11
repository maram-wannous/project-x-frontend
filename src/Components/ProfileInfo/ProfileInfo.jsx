/* eslint-disable react/prop-types */
 
import avatar from './../../assets/avatar.png'
import add from './../../assets/add.png'
import emailimg from './../../assets/email.png'
import block from './../../assets/block.png'
import gallery from './../../assets/gallery.png'
import userimg from './../../assets/user.png'

import "./ProfileInfo.css";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function ProfileInfo({pageProfile}) {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');

  // get profile info
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/Admin/profile', {
          headers: {
              AUTHORIZATION: `Bearer ${token}`,
          }
      })
      .then((data)=> setUser(data.data))
      .catch(() => navigate(("/"), {replace: true}));
    },[]);


  // handle logout
  async function handleLogout(){
    try{
        await fetch('http://127.0.0.1:8000/api/Admin/logout', {
          method: 'post',
          headers: {
            AUTHORIZATION: `Bearer ${token}`,
        },
        });
        localStorage.removeItem('bearer')
        window.location.pathname= "/";
    }
    catch (err){
        console.log(err);
    }
}

  return (
    <div className="sl-info">
        <div className="sl-divimg">
          <img className="sl-img" src={avatar} />
          <div className="sl-img-border"></div>
        </div>
        <p className='fw-bold'>{user.first_name} {user.last_name}</p>
        <p>{user.designation}</p>
        <p>{user.country} - {user.address}</p>
        <div className="mr-line"></div>
        <ul>
          <li>
            <img src={userimg} alt="" />
            <p>{user.department}</p>
          </li>
          <li>
            <img src={block} alt="" />
            <p>On-Teak</p>
          </li>
          <li className='mr-line'></li>
          <li>
            <img src={add} alt="" />
            <p>{user.phone}</p>
          </li>
          <li>
            <img src={emailimg} alt="" />
            <p>{user.email}</p>
          </li>
          <li>
            <img src={gallery} alt="" />
            <p>PDT - I</p>
          </li>
          <li className='mr-line'></li>
          {
            pageProfile && (<li><Link to={'/dashboard/profile/updateprofile'} className='mr-up-del-btn'>Update Profile</Link></li>)
          }
          <li><button className='mr-up-del-btn mt-3' onClick={handleLogout}>Logout</button></li>
        </ul>
    </div>
  );
}
