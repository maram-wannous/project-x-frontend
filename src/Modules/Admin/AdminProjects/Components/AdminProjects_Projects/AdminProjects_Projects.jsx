import './AdminProjects_Projects.css'
import img_project from './../AdminProjects_Projects/Imagem.png';
import { Link } from 'react-router-dom';

export const AdminProjects_Projects = () => {
    return (
        <div className='bg-white p-2 sa_AdminProjects_ProjectDiv'>
            <div className='d-flex align-items-center justify-content-between pb-4'>
                <p className='sa_AdminProjects_ProjectsTitle'>Projects</p>
                <Link to={'/dashboard/adminprojects/projects'}>
                    <button className='sa_AdminProjects_ProjectsViweAll'>View all</button>
                </Link>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-5 flex-wrap py-4 sa_AdminProjects_ImgDiv'>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>

                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <img src={img_project} className='sa_projectImage' alt="" />
                    <p className='sa_projectName'>Emo stuff</p>
                </div>

            </div>

        </div>
    )
}