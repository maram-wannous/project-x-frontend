import './TotalWork.css'
export default function TotalWork(){
    return (
         <div className="p-8 container" bg="light"  rounded>
         <div className="d-xl-flex flex-row " >
             <h2>Total work done</h2>
              <button class="btn btn-info opacity-50 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               This Week
             </button>
             </div>
            <div className="circle">
                5w: 2d 
            </div>
         </div>
    )
}