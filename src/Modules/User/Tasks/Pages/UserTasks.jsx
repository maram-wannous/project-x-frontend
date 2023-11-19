import { Link } from 'react-router-dom'
import './UserTasks.css'
import { CiCalendar } from "react-icons/ci";
import { CardTask } from '../../../../Components/CardTask/CardTask';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function UserTasks() {
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
                <Link to={'/dashboard/usertasks/Kanban'}><button className='sa_btnKanbanView'><CiCalendar className='sa_IconBtnKanban' />Kanban View</button></Link>
            </div>
            <Link to={'/dashboard/usertasks/subtask'}>open SubTask</Link>
            <Slider {...settings} className='sa_containerSlideAllProjects'>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
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
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
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
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask />
                    </div>
                </div>
            </Slider>
        </div>
    )
}