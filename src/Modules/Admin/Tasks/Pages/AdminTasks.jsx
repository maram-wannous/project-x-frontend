// import { Link } from 'react-router-dom'
import './AdminTasks.css'
// import { CiCalendar } from "react-icons/ci";
import { CardTask } from '../../../../Components/CardTask/CardTask';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function UserTasks() {
    const isAdmin = true;
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
        <div>
            <div className='d-flex align-items-center justify-content-between px-2 '>
                <p className="header-style mb-0 ">Tasks</p>
                <button className='btn mx-5'><Link to={'/dashboard/tasks/assigntask'}>Assign Task</Link></button>
            </div>
            <Slider {...settings} className='sa_containerSlideAllProjects'>
                <div className='sa_bodyBox bg-transparent'>
                    
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>


                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
            </Slider>
        </div>
    )
}