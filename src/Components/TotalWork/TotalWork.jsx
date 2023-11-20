import './TotalWork.css';
export default function TotalWork(){
    return (
         <div className="si-container1"   rounded>
         <div className="d-xl-flex flex-row " >
             <h1>Total work done</h1>
              <button className="btn btn-info opacity-30 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               This Week
             </button>
             </div>
            <div className="si-circle">
                5w: 2d 
            </div>
         </div>
    )
}