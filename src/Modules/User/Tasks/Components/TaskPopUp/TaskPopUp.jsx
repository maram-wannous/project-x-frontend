/* eslint-disable react/prop-types */
import i1 from './../../../../../assets/Tags-Sub.png';
import i2 from './../../../../../assets/Ok-Sub.png';
import i3 from './../../../../../assets/Person-Sub.png';
import i4 from './../../../../../assets/Male User-Sub.png';
import i5 from './../../../../../assets/Calendar-Sub.png'; 
import ellipse from './../../../../../assets/Ellipse 19.png';
import att from './../../../../../assets/Attach.png';
import plus from './../../../../../assets/Plus Math.png';
import fpic from './../../../../../assets/Group 15.png';
import d1 from './../../../../../assets/Group1.png';
import d2 from './../../../../../assets/Group2.png';
import d3 from './../../../../../assets/Group3.png';
import d4 from './../../../../../assets/Group4.png';
import d5 from './../../../../../assets/Group5.png';
import d6 from './../../../../../assets/Group6.png';
import x from './../../../../../assets/iconx.png';
import './TaskPopUp.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TaskPopUp ({closePopup, openPopUp}) {
    const [isVisible,setIsVisible]= useState(false);
    const hundleClick=()=> setIsVisible(true); 
    const hundleClick2=()=> setIsVisible(false); 
    const [comment, setComment] = useState("");  
    const [date]= useState(new Date());
    return(
        <div className="d-flex align-items-center justify-content-center">
             <div className='si-subtask'>
                <div className='si-xtitle'>
                <p>Project / Task ID-1234</p>
                <Link to={'/dashboard/usertasks/subtask'}><img className='xp' onClick={() => closePopup(openPopUp)} src={x}/></Link>
                </div>
                <h1>Make a Suitable form</h1>
                <section>
                <img className='tags' src={i1} />
                <p>Priority</p>
                <p className='si-hight'>Hight</p>
                </section>
                <section>
                <img className='ok' src={i2} />
                <p>Status</p>
                <p className='si-comp'>Complete</p>
                </section>
                <section>
                <img className='person' src={i3} />
                <p>Owner</p>
                <img className='ell' src={ellipse}/>
                <p className='p1'>UI Sharks</p>
                </section>
                <section>
                <img className='male' src={i4} />
                <p>Assigne</p>
                <img className='ell2' src={ellipse}/>
                <p className='p1'>Coder bhani</p>
                </section>
                <section>
                <img className='calendar' src={i5} />
                <p>Due Date</p>
                <p className='p2'>March 24th 2023</p>
                </section>
            <div className='si-div3'></div>
            <div className='si-subdiv2'>
                <h6>Attachments</h6>
                <section>
                <img src={att}/>
                <p style={{color:'orange'}}>Document Links</p>
                </section>
                <section>
                <img src={plus}/>
                <p>Add Attachment</p>
                </section>
            </div>
            <div className='si-div4'></div>
            <div className='si-subdiv2'>
                <h6>Description</h6>
                <p>lorem ipsum salig nen, ip-tv plus labesa. Eurov yk. Funkionell dumhet<br/>sabel som antiras mide.Heteron bionebelt preseling, divis peng. Trer beroren.</p>
            </div>
            <div className='si-div5'></div>
           
            <div className='si-last-sec'>
                <img className='si-fpic' src={fpic}/>
                 <div className={isVisible? 'btndiv' : 'btndivhidden'}>
                <section className='si-grey-sec'>
                    <div className='si-flex'>
                    <select className='si-select'>
                    <option hidden value="">Normal Text</option>
                    </select>
                    <img src={d1}/>
                    <img src={d2}/>
                    <img src={d3}/>
                    <img src={d4}/>
                    <img src={d5}/>
                    <img src={d6}/>
                    </div>
                    <div className='si-dev6'></div>
                    <input placeholder='Add Attachment or add comment to describe the issues...' type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
                </section>
                </div> 
                 <div>
                 <button onClick={hundleClick} className='si-grey-sec2'>
                    Add Attachment
                 </button>
                 <p className='printComm'>
                 Yash Ghori commented at {date.toDateString()} 
                 <br/>{comment} 
                    </p>
                 </div>
            </div> 
            <div className={isVisible? 'btndiv' : 'btndivhidden'}>
            <button className='save' type='submit' onClick={hundleClick2} >Save</button>  
            <button className='can-btn' onClick="./UserTasks.jsx">cancel</button>
            </div>
           
            </div>
        </div>
    )
}