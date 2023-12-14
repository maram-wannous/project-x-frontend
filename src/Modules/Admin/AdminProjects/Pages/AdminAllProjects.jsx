/* eslint-disable no-unused-vars */
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
  const [noProjects, setNoProjects] = useState(false)

  const token = localStorage.getItem('bearer');

  // console.log('pagecount' + pageCount);
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
  .then((data) => projects.length === 0 && setNoProjects(true))
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
        {
          projects.length === 0 && !noProjects ? <div className='text-center'>Loading...</div>
          : projects.length === 0 && noProjects ? <div className='text-center'>No Projects Found</div>
          : 
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

      <div className='mr-pagination-containers'>
      <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
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
    </div>

  )
}