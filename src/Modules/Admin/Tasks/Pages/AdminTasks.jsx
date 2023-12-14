/* eslint-disable no-unused-vars */
import './AdminTasks.css'
import { CardTask } from '../../../../Components/CardTask/CardTask';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserTasks() {
    const isAdmin = true;
    const [pageCount, setPageCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [noTasks, setNoTasks] = useState(false);
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
  
    })
    .then((data) => tasks.length === 0 && setNoTasks(true))
    .catch((err)=> console.log(err));
  },[]);


    // get other slides projects
  const fetchTasks = async (currentPage) => {
    try{
      await axios.get(`http://127.0.0.1:8000/api/tasks?current_page=${currentPage}&per_page=${limit}`, {
          headers: {
              Accept: 'application/json',
              AUTHORIZATION: `Bearer ${token}`,
              },
      })
      .then((data)=> {
        console.log(data.data)
        // setTasks(data.data);
      });
    }catch(err){
      console.log(err);
    }
  };

    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;
        console.log(currentPage);
        fetchTasks(currentPage);
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
                    {
                        tasks.length === 0 && !noTasks ? <div className='text-center'>Loading...</div>
                        : tasks.length === 0 && noTasks ? <div className='text-center'>No Tasks Found</div>
                        : tasks.map((item, index) => {
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
            <div className='mr-pagination-containers'>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={".."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
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
        </div>
    )
}