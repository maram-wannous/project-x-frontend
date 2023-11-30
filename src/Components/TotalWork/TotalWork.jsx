import './TotalWork.css';
export default function TotalWork(){
    return (
         <div className="si-container1">
            <div className="d-flex align-items-center justify-content-between" >
                <p className='fw-bold'>Total work done</p>
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