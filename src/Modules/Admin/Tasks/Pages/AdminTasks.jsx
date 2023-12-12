import './AdminTasks.css'
import { CardTask } from '../../../../Components/CardTask/CardTask';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserTasks() {
    const isAdmin = true;
    // const [pageCount, setPageCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('bearer');

    let limit = 8;

    // get the first slid
    useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/tasks?current_page=1&per_page=${limit}`, {
        headers: {
            Accept: 'application/json',
            AUTHORIZATION: `Bearer ${token}`,
            },
    })
    .then((data)=> {
    //   const total = data.data.projects.meta.total;
    //   setPageCount(Math.ceil(total / limit));
      setTasks(data.data);
      console.log(data);
  
    })
    .catch((err)=> console.log(err));
  },[]);


    // get other slides projects
//   const fetchTasks = async (currentPage) => {
//     try{
//       await axios.get(`http://127.0.0.1:8000/api/tasks?current_page=${currentPage}&per_page=${limit}`, {
//           headers: {
//               Accept: 'application/json',
//               AUTHORIZATION: `Bearer ${token}`,
//               },
//       })
//       .then((data)=> {
//         console.log(data.data.projects)
//         // setTasks(data.data);
//       });
//     }catch(err){
//       console.log(err);
//     }
//   };

    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;
        console.log(currentPage);
        // fetchTasks(currentPage);
        // scroll to the top
        //window.scrollTo(0, 0)
      };
  

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between px-2 '>
                <p className="header-style mb-0 ">Tasks</p>
                <button className='btn mx-5'><Link to={'/dashboard/tasks/assigntask'}>Assign Task</Link></button>
            </div>
            <div className='sa_bodyBox bg-transparent'>
                <div className="row p-2">
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
                            {
                            tasks.map((item, index) => {
                                <div key={index} className='sa_backTask'>
                                    <CardTask isAdmin={isAdmin} 
                                            title={item.title} 
                                            description={item.description} 
                                            user_id={item.user_id} 
                                            priority={item.priority}
                                            status={item.status}
                                            start_date={item.start_date}
                                            end_date={item.end_date}
                                            />
                                </div>
                            })
                            }
                </div>
            </div>            

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={6}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center align-items-end mr-project-paginat py-3"}
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





{/* <Slider {...settings} className='sa_containerSlideAllProjects'>
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
            </Slider> */}

        // var settings = {
    //     dots: true,
    //     customPaging: (i) => {
    //       return <div>{i + 1}</div>;
    //     },
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           initialSlide: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };