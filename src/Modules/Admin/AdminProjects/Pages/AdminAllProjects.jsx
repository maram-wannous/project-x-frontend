/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';
import './AdminAllprojects.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CardProject } from '../../../../Components/CardProject/CardProject';


export const AdminAllProjects = () => {

  const isAdmin = true;
  const [pageCount, setPageCount] = useState(0);
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('bearer');

  console.log('pagecount' + pageCount);
  // console.log(projects);

  let limit = 6;

  // get the first slid
useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/projects?current_page=1&per_page=${limit}`, {
      headers: {
          Accept: 'application/json',
          AUTHORIZATION: `Bearer ${token}`,
          },
  })
  .then((data)=> {
    const total = data.data.projects.meta.total;
    setPageCount(Math.ceil(total / limit));
    setProjects(data.data.projects.data);
    // console.log(data.data.projects);

  })
  .catch((err)=> console.log(err));
},[]);

// get other slides projects
  const fetchProjects = async (currentPage) => {
    try{
      await axios.get(`http://127.0.0.1:8000/api/projects?current_page=${currentPage}&per_page=${limit}`, {
          headers: {
              Accept: 'application/json',
              AUTHORIZATION: `Bearer ${token}`,
              },
      })
      .then((data)=> {
        // console.log(data.data.projects);
        setProjects(data.data.projects.data);});
    }catch(err){
      console.log(err);
    }
  };

  const handlePageClick = async (data) => {

    let currentPage = data.selected + 1;
    fetchProjects(currentPage);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  return(
    <div>
      <div className="sa_divTitle d-flex align-items-center justify-content-between">
        <p className="header-style">Projects</p>
        <Link to={'/dashboard/adminprojects/add'}><button className='btn'>Create</button></Link>
      </div>

      <div className="row p-2">
           <Link className="col-sm-6 col-md-4 v my-2" to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
           <Link className="col-sm-6 col-md-4 v my-2"  to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
           <Link className="col-sm-6 col-md-4 v my-2"  to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
           <Link className="col-sm-6 col-md-4 v my-2" to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
           <Link className="col-sm-6 col-md-4 v my-2" to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
           <Link className="col-sm-6 col-md-4 v my-2" to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>

        {
          projects.map((item, index) => {
            <Link to={`/dashboard/adminprojects/details/${item.id}`} className="col-sm-6 col-md-4 v my-2">
               <CardProject key={index} isAdmin={isAdmin}
                          id={item.id}
                          title={item.title}
                          end_date={item.end_date}
                          description={item.description}
                          status={item.status}
              />
            </Link>
          })
        }
      </div>


      <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={6}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center align-items-end mr-project-paginat"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>

  )
}



























































// console.log(typeof(projects));
// console.log(noProjects);
// console.log(activeSlide);


// get the first slid
// useEffect(()=>{
//   axios.get(`http://127.0.0.1:8000/api/projects?current_page=0&per_page=${6}`, {
//       headers: {
//           Accept: 'application/json',
//           AUTHORIZATION: `Bearer ${token}`,
//           },
//   })
//   .then((data)=> setProjects(data.data.projects.data))
//   .catch((err)=> console.log(err));
// },[]);


// get the projects in each slid after click next and prev
// async function handleShowSlidData(slideNum) {
//       try{
//         axios.get(`http://127.0.0.1:8000/api/projects?current_page=${slideNum}&per_page=${6}`, {
//           headers: {
//               Accept: 'application/json',
//               AUTHORIZATION: `Bearer ${token}`,
//               },
//       })
//       .then((data)=> setProjects(data.data.projects.data))
//       }catch(err){
//         console.log(err);
//       }
//     }

  // custom next arrow
  // const CustomNextArrow = ({ className, style, onClick, currentSlidnum }) => {
  //   const handleNextClick = (slideNum) => {
  //     handleShowSlidData(slideNum);
  //     onClick(); // Call the original onClick function to navigate to the next slide
  //   }
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block"}}
  //       onClick={()=> handleNextClick(currentSlidnum)}
  //     />
  //   );
  // }
  
  // custom prev arrow
  // const CustomPrevArrow = ({ className, style, onClick, currentSlidnum }) => {
  //   const handlePrevClick = (slideNum) => {
  //     handleShowSlidData(slideNum);
  //     onClick(); // Call the original onClick function to navigate to the previous slide
  //   }
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block"}}
  //       onClick={()=> handlePrevClick(currentSlidnum)}
  //     />
  //   );
  // }

  // var settings = {
  //   dots: true,
  //   customPaging: (i) => {
  //     return <div>{i + 1}</div>;
  //   },
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // initialSlide: 1,
  //   afterChange: current => setActiveSlide(current),
  //   nextArrow: <CustomNextArrow currentSlidnum={activeSlide} />,
  //   prevArrow: <CustomPrevArrow currentSlidnum={activeSlide}/>,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         // initialSlide: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };


//   return (
//     <div className=''>
//       <div className="sa_divTitle d-flex align-items-center justify-content-between">
//         <p className="header-style">Projects</p>
//         <Link to={'/dashboard/adminprojects/add'}><button className='btn'>Create</button></Link>
//       </div>
//       <Slider {...settings} className='sa_containerSlideAllProjects'>
//         <div className='sa_AdminAllProjects_BodyDiv'>
//         {
//           projects.length === 0 ? (<div className="text-center">Loading...</div>)
//           : (
//           projects.map((item,index)=>{
//             <Link to={`/dashboard/adminprojects/details/${item.id}`}>
//               <CardProject key={index} isAdmin={isAdmin}
//                           id={item.id}
//                           title={item.title}
//                           end_date={item.end_date}
//                           description={item.description}
//                           status={item.status}
//               />
//             </Link>

//           }))
//         }
//         </div>
//         <div className='sa_AdminAllProjects_BodyDiv'>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//           <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin}/></Link>
//         </div>
//       </Slider>
//     </div>
//   )
// }