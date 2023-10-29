/* eslint-disable react/no-unescaped-entities */
import './Error403.css'
export default function Error403(){
    return (
        <div className="text-wrapper">
            <div className="title" data-content={404}>
                403-ACCESS DENIED
            </div>
            <div className="subtitle">
                Oops, you don't have permition to access this page
            </div>
        </div>
    );
}