/* eslint-disable react/prop-types */
import './imgtext.css'
import emo from './../../assets/img/emo.png'
export default function ImgText ({work, project}) {
    return (
        <div className="mr-imgtextcontainer">
            <img src={emo} alt="emo" className={work?'mr-img-work' : project? 'mr-img-project' : ''}/>
            <p>Emo stuff</p>
        </div>
    )
}