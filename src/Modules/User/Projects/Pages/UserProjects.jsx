import './UserProjects.css'
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardProject } from '../../../../Components/CardProject/CardProject';

export default function UserProjects() {

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
            <div className="sa_divTitle d-flex align-items-center justify-content-between">
                <p className="header-style mb-0">Projects</p>
                <form className="sa_formUserProject">
                    <FiSearch className="sa_searchIcon" />
                    <input type="search" placeholder="Search for anything..." className="sa_searchText sa_searchUserProject" />
                </form>
            </div>
            <Slider {...settings} className='sa_containerSlideAllProjects sa_containerSlideUserProjects'>
                <div className='sa_AdminAllProjects_BodyDiv'>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                </div>
                <div className='sa_AdminAllProjects_BodyDiv'>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                </div>
                <div className='sa_AdminAllProjects_BodyDiv'>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                    <Link to={'/dashboard/userprojects/details'}><CardProject /></Link>
                </div>
            </Slider>
        </div>
    )
}