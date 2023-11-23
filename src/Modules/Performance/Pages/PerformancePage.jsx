import WorkLog from '../../../Components/WorkLog/WorkLog'
import './Performance.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardTask } from '../../../Components/CardTask/CardTask';




export default function PerformancePage() {

    var settings = {
        dots: true,
        customPaging: (i) => {
            return <div>{i + 1}</div>;
        },
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='overflow-hidden'>
            <div className='px-2'>
                <p className="header-style mb-0">Performance Report</p>
            </div>
            <div className="py-4">
            <div className="row px-4 sa_rowperformance">
                     <div className="col-md-6 mt-2 sa_chart">
                        <div className="RA-bgBlue">
                            <div className="RA-bgWhite RA-MarginBoxProj ">
                                <div className="">
                                    <Performance/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2 sa_chart">
                        <div className="RA-bgBlue">
                            <div className="RA-bgWhite RA-MarginBoxProj">
                                <div className="text-center d-flex justify-content-center">
                                    <div className="w-85">
                                        <WorkLog/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center flex-wrap gap-1 mb-2">
                    <div className="sa_divPerformancePerformance">
                        <Performance/>
                    </div>
                    <div className="sa_divPerformanceWorkLog">
                        <WorkLog className='maram-log'/>
                    </div>
                </div> */}
                <Slider {...settings} className=' sa_containerSlidePerformanc'>
                <div className='sa_bodyBox bg-transparent mb-2'>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    )
}