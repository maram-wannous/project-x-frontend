import './WorkedWith.css';
import ImgText from '../ImgText/ImgText';
import { useState } from 'react';

export default function WorkedWith(){
    
    const [work]= useState(true);
    return (
        <div className="si-container2">
            <h6 className='fs-6 mr-p-color'>Inicio &gt; Profile</h6>
            <h3 className='fs-5 fw-bold'>UI Developer</h3>
            <p className="fs-6 si-prg mr-p-color">Lorem ipsum is the best sentence in thhe world</p>
            <div className="d-flex justify-content-between align-items-center flex-row mb-3">
                <h6 className="fs-6 fw-bold m-0">worked with</h6>
                <button className="fs-6 btn">view all</button>
            </div>
            <div className="mr-profileworkcontent">
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
                <ImgText work={work}/>
            </div>
        </div>
    )
}



 