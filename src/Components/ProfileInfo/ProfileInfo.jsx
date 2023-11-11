 
import avatar from './../../assets/avatar.png'
import add from './../../assets/add.png'
import email from './../../assets/email.png'
import block from './../../assets/block.png'
import gallery from './../../assets/gallery.png'
import user from './../../assets/user.png'

import "./ProfileInfo.css";
import React from "react";

export default function ProfileInfo(props) {
  return (
    <div className="sl-info"> 
      <h1>Yash Ghori</h1>
      <h3 className="ahmed">Ahmedabad, Gujarat</h3>
      <h3 className="india">India</h3> 
      <div className="sl-div2">
        <div className="sl-div3"> 
          <img src={email} className="sl-div3-2" />
        </div>
        <p className="sl-number">+91 7048144030</p>
        <p className="sl-email">yghori@asite.com</p>
        <p className="sl-pdt">PDT - I</p>
        <div className='sl-div4'>
        <div className='sl-div4-1'></div>
        <img src={add} className='sl-div4-2'/>
      </div>
        <div className="sl-div5">
          <img src={gallery} className="sl-div5-2" />
        </div>
      </div>
      <div className="sl-div6"></div>
      <div className="sl-div7"></div>
      <div className="sl-div8">
        <img className="sl-div8-img" src={avatar} />
        <div className="sl-div8-2"></div>
      </div>
      <div className="sl-div9">
        <p className="sl-div10">UI - Intern</p>
        <p className="sl-div11">on-teak</p> 
        <img src={user} className="sl-div13" />
        <div className="div14"> 
          <img src={block} className="sl-div16" />
        </div>
      </div>
    </div>
  );
}
