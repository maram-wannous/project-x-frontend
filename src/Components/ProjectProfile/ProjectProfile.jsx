import { useState } from "react";
import ImgText from "../ImgText/ImgText";
import "./ProjectProfile.css";

export default function ProjectProfile() {
  const [project] = useState(true);

  return (
    <div className="sl-projects">
      <div className="mr-profilproject">
        <p className="fw-bold">Projects</p>
        <button className="btn">View all</button>
      </div>
      <div className="mr-profileprojectcontent">
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
        <ImgText project={project}/>
      </div>
      
    </div>
  );
}


