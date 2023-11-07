import './TeamMember.css'
import { FiSearch } from "react-icons/fi";
import img1 from './../TeamMember/Intersect.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export const TeamMember = () => {

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
        <div className='w-100'>
            <div className='d-flex justify-content-between  align-items-center mx-5'>
                <p className='sa_textTitle'>Ui Developers (39)</p>
                <div className='d-flex align-items-center sa_searhView gap-5'>
                    <form className="sa_form">
                        <FiSearch className="sa_searchIcon" />
                        <input type="search" placeholder="Search for anything..." className="sa_searchText sa_searchTextTeamMember" />
                    </form>
                    <p className='sa_viewAll'>View all</p>
                </div>
            </div>
            <Slider className='sa_containerSlideMember' {...settings}>
                    <div className='sa_box'>
                        <div className='d-flex flex-column sa_slide'>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className='sa_box'>
                        <div className='d-flex flex-column sa_slide'>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='sa_box'>
                        <div className='d-flex flex-column sa_slide'>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly flex-wrap'>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                                <div className='sa_picMemberDiv'>
                                    <img className='sa_picMember' src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> 
            </Slider>
        </div>
    )
}
