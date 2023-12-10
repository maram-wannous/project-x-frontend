import './AdminAllprojects.css'
import { CardProject } from '../../../../Components/CardProject/CardProject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const AdminAllProjects = () => {
  const isAdmin = true;

  const token = localStorage.getItem('bearer');
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects?page=1&pageSize=6', {
      headers: {
        Accept: 'application/json',
        AUTHORIZATION: `Bearer ${token}`,
      },
    })
    .then((data)=> setProjects(data.data.projects.data))
    .catch((err)=> console.log(err));
  }, []);


  state = {
    activeSlide: 0,
    activeSlide2: 0
  };
  var settings = {
    dots: true,
    customPaging: (i) => {
      return <div>{i + 1}</div>;
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => this.setState({activeSlide: next }),
    aftereChange: current => this.setState({activeSlide2: current }),
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
    <div className=''>
      <div className="sa_divTitle d-flex align-items-center justify-content-between">
        <p className="header-style">Projects</p>
        <Link to={'/dashboard/adminprojects/add'}><button className='btn'>Create</button></Link>
      </div>

      <Slider {...settings} className='sa_containerSlideAllProjects'>
        <div className='sa_AdminAllProjects_BodyDiv'>
          {Projects.map((item) => (
            <div key={item.id}>
              <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} title={item.title} status={item.status} /></Link>
            </div>
          ))}
        </div>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} title="sara" status="OnTrack" description="sssssssssssssssssssssjjjjjjjjj''''''''''''''llllllllllpppppppppsssssssssssssssssssssjjjjjjjjj''''''''''''''llllllllllppppppppp"/></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
        </div>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
        </div>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
        </div>
      </Slider>
    </div>
  )
}