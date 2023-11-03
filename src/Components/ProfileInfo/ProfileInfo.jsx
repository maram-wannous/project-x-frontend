
import avatar from '././../../assets/img/avatar.png'
import add from '././../../assets/img/add_user_icon.png'
import email from '././../../assets/img/email_icon.png'
import block  from '././../../assets/img/block_icon.png'
import garlly from '././../../assets/img/garlly_icon.png'
import user from '././../../assets/img/user_icon.png'
import './ProfileInfo.css'

import React from 'react'

export default function ProfileInfo(){
    return (
        <div className="info">

<div className='Yash-h'></div>

<div className='Yash'>Yash Ghori</div>
    <div className='ahmed'>Ahmedabad, Gujarat</div>
    <div className='india'>India</div>
    <div className='div1'></div>
    <div className='div2'>
      <div className='div3'>
        <div className='div3-1'></div>
        <img src={user} className='div3-2'/>
      </div>
      <div className='number'>+91 7048144030</div>
      <div className='email'>yghori@asite.com</div>
      <div className='pdt'>PDT - I</div>
      <div className='div4'>
        <div className='div4-1'></div>
        <img src={block} className='div4-2'/>

      </div>
      <div className='div5'>
        <div className='div5-1'></div>
        <img src={add} className='div5-2'/>

      </div>
    </div>
    <div className='div6'></div>
    <div className='div7'></div>
    <div className='div8'>
      <img className='div8-img' src={avatar} />
      <div className='div8-2'></div>
    </div>
     <div className='div9'>
      <div className='div10'>UI - Intern</div>
      <div className='div11'>on-teak</div>
      <div className='div12'></div>
      <img src={email} className='div13'/>
      <div className='div14'>
        <div className='div15'></div>
        <img src={garlly} className='div16'/>
      </div>
    </div> 







</div>
    )
}