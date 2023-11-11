import "./ProjectProfile.css";

import art from './../../assets/art.png'
import dark_art from './../../assets/dark_art.png'
import emo from './../../assets/emo.png'
import happy  from './../../assets/happy.png'
import spacky_art from './../../assets/spacky_art.png'
import halloween from './../../assets/halloween.png'
import gothic from './../../assets/gothic.png'
import v4m from './../../assets/v4m.png'
import tim from './../../assets/tim.png'
import React from "react";

export default function ProjectProfile(props) {
  return (
    <div className="sl-projects">
      <h1 className="sl-title">Projects</h1>
      <a href="" className="sl-View">View all</a>
      <p className="title-image emo-p">Emo stuff</p>
      <p className="title-image tim-p">Spooky Art</p>
      <p className="title-image happy-p">- happy :3</p>
      <p className="title-image spacky-p">Tim Burton</p>
      <p className="title-image dark_art-p">Dark Art</p>
      <p className="title-image v4m-p">*V4MPYR*</p>
      <p className="title-image halloween-p">Halloween!</p>
      <p className="title-image gothic-p">Gothic art</p>
      <p className="title-image art-p">I &lt;3 Art</p>
      <img className="image-project emo" src={emo} alt="Image 1" />
      <img className="image-project tim" src={tim} alt="Image 2" />
      <img className="image-project halloween" src={halloween} alt="Image 3" />
      <img className="image-project spacky" src={spacky_art} alt="Image 4" />
      <img className="image-project dark_art" src={dark_art} alt="Image 5" />
      <img className="image-project gothic" src={gothic} alt="gothic_image" />
      <img className="image-project happy" src={happy} alt=" happy Image 7" />
      <img className="image-project v4m" src={v4m} alt="v4m Image 8" />
      <img className="image-project art" src={art} alt="art Image 9" />
    </div>
  );
}


