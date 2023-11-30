import R1 from './../../../assets/R1.png';
import R2 from './../../../assets/R2.png';
import R3 from './../../../assets/R3.png';
import R4 from './../../../assets/R4.png';
import R5 from './../../../assets/R5.png'; 
import TotalWork from './../../../Components/TotalWork/TotalWork';
import './WorkLog.css';

export default function WorkLog(){
    return (
        <div className="container d-flex flex-wrap py-4">
             <div className='si-contaierLog'>
                <p className='si-prgLog'>05 Nov 2022 <span style={{fontWeight:'bold',marginLeft:'70px'}}> Make an Automatic Payment System that enable the design</span></p>
                <p className='si-prgLog'>05 Nov 2022 <span style={{fontWeight:'bold',marginLeft:'70px'}}> Make an Automatic Payment System that enable the design</span></p>
                <p className='si-prgLog'>04 Nov 2022 <span style={{fontWeight:'bold',marginLeft:'70px'}}> Make an Automatic Payment System that enable the design</span></p>
                <p className='si-prgLog'>03 Nov 2022 <span style={{fontWeight:'bold',marginLeft:'70px'}}> Make an Automatic Payment System that enable the design</span></p>
                <p className='si-prgLog'>02 Nov 2022 <span style={{fontWeight:'bold',marginLeft:'70px'}}> Make an Automatic Payment System that enable the design</span></p>
            </div>
        {/* <div className='si-worklogTotal'> */}
            <div>
                <TotalWork/>
                <div className='si-notification'>
                    <div className='si-notflex'>
                        <h5>Notification</h5>
                        <button>view all</button>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R1}/>
                        <section>
                        <h6>Ellie joined team developer </h6>
                        <p style={{color:'gray'}}>04 April,2021104:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R2}/>
                        <section>
                        <h6>Jenny joined team HR</h6>
                        <p style={{color:'gray'}}>04 April,2021104:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R3}/>
                        <section>
                        <h6>Adam got employee  month</h6>
                        <p style={{color:'gray'}}>03 April,2021102:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R4}/>
                        <section>
                        <h6>Robert joined team design</h6>
                        <p style={{color:'gray'}}>02 April,2021102:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R5}/>
                        <section>
                        <h6>Jack joined team design</h6>
                        <p style={{color:'gray'}}>01 April,2021103:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R5}/>
                        <section>
                        <h6>Jack joined team design</h6>
                        <p style={{color:'gray'}}>01 April,2021103:00 PM</p>
                        </section>
                    </div>
                    <div className='si-notflex2'>
                        <img src={R5}/>
                        <section>
                        <h6>Jack joined team design</h6>
                        <p style={{color:'gray'}}>01 April,2021103:00 PM</p>
                        </section>
                    </div>
                </div>
            </div>
       
           
        </div>
    )
}