import './ProjectProfile.css'

import art from '././../../assets/img/art.png'
import dark_art from '././../../assets/img/dark_art.png'
import emo from '././../../assets/img/emo.png'
import happy  from '././../../assets/img/happy.png'
import spacky_art from '././../../assets/img/spacky_art.png'
import halloween from '././../../assets/img/halloween.png'
import gothic from '././../../assets/img/gothic.png'
import v4m from '././../../assets/img/v4m.png'
import tim from '././../../assets/img/tim.png'




import React from 'react'

export default function ProjectProfile(){
    return (
        <div  className="projects">
        <div  className="Projects-title">Projects</div>
        <div className="projects-View">View all</div>
        
        <div className='title-image emo-p'>Emo stuff</div>
        <div className='title-image tim-p'>Spooky Art</div>
        <div className='title-image happy-p'>- happy :3</div>
        <div className='title-image spacky-p'>Tim Burton</div>
        <div className='title-image dark_art-p'>Dark Art</div>
        <div className='title-image v4m-p'>*V4MPYR*</div>
        <div className='title-image halloween-p'>Halloween!</div>
        <div className='title-image gothic-p'>Gothic art</div>
        <div className='title-image art-p'>I  &lt;3 Art</div>
        <img className='image-project emo' src={emo} alt="Image 1"/>
        <img className='image-project tim' src={tim} alt="Image 2"/>
        <img className='image-project halloween'src={halloween} alt="Image 3"/>
        <img className='image-project spacky'src={spacky_art} alt="Image 4"/>
        <img className='image-project dark_art' src={dark_art} alt="Image 5"/>
        <img className='image-project gothic' src={gothic} alt="gothic_image"/>
        <img className='image-project happy' src={happy} alt=" happy Image 7"/>
        <img className='image-project v4m' src={v4m} alt="v4m Image 8"/>
        <img className='image-project art'src={art} alt="art Image 9"/>
        
        </div>
    )
}

