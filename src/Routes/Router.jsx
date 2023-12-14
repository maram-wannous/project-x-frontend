import App from "../App"
// import RequireAuth from "./RequireAuth";
import Dashboard from "../Modules/Dashboard/Pages/Dashboard"
import Home from "../Modules/Dashboard/Pages/Home"
import GuardedRoutes from "./GuardedRoutes"
import Profile from "../Modules/Profile/Pages/Profile";
import WorkLog from "../Modules/WorkLog/Pages/WorkLog";
import UpdateProject from "../Modules/Admin/AdminProjects/Pages/UpdateProject";
import AddProject from "../Modules/Admin/AdminProjects/Pages/AddProject";
import ViewUsers from "../Modules/Admin/Users/Pages/ViewUsers";
import AddUser from "../Modules/Admin/Users/Pages/AddUser";
import UpdateUser from "../Modules/Admin/Users/Pages/UpdateUser";
import UpdateProfile from "../Modules/Profile/Pages/UpdateProfile";
import AdminTasks from "../Modules/Admin/Tasks/Pages/AdminTasks";
import { AdminAllProjects } from "../Modules/Admin/AdminProjects/Pages/AdminAllProjects";
import UserTasks from "../Modules/User/Tasks/Pages/UserTasks";
import UserSubTask from "../Modules/User/Tasks/Pages/UserSubTask";
import AdminSubTask from "../Modules/Admin/Tasks/Pages/AdminSubTask";
import AssignTask from "../Modules/Admin/Tasks/Pages/AssignTask";
import AssignSubTask from "../Modules/Admin/Tasks/Pages/AssignSubTask";
import UserProjects from "../Modules/User/Projects/Pages/UserProjects";
import ProjectDetails from "../Modules/User/Projects/Pages/ProjectDetails";
import AdminProjects from "../Modules/Admin/AdminProjects/Pages/AdminProjects.jsx";
import PerformancePage from "../Modules/Performance/Pages/PerformancePage.jsx";
import { Navigate } from "react-router-dom";
import AdminProjectDetails from "../Modules/Admin/AdminProjects/Pages/AdminProjectDetails.jsx";

const isAuthenticated= localStorage.getItem('bearer');


export const routes = [
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/dashboard',
        element: <GuardedRoutes
                isAccessable={isAuthenticated}
                OnSucess={() => <Dashboard />}
                OnFaild={() => <Navigate to={'/'} replace={true}/>}/>
        ,
        children: [
            {
                path: '/dashboard/',
                element: <Home/>,
            },
            {
                path: '/dashboard/profile',
                element: <Profile/>,
            },
            {
                path: '/dashboard/profile/updateprofile',
                element: <UpdateProfile/>,
            },
            {
                path: '/dashboard/performance',
                element: <PerformancePage/>,
            },
            {
                path: '/dashboard/worklog',
                element: <WorkLog/>,
            },
            // Admin pages
            {
                path: '/dashboard/adminprojects',
                element: <AdminProjects/>,
            },
            {
                path: '/dashboard/adminprojects/projects',
                element: <AdminAllProjects/>,
            },
            {
                path: '/dashboard/adminprojects/add',
                element: <AddProject/>,
            },
            {
                path: '/dashboard/adminprojects/update/:id',
                element: <UpdateProject/>,
            },
            {
                path: '/dashboard/adminprojects/details/:id',
                element: <AdminProjectDetails/>,
            },
            {
                path: '/dashboard/tasks',
                element: <AdminTasks/>,
            },
            {
                path: '/dashboard/tasks/subtask',
                element: <AdminSubTask/>,
            },
            {
                path: '/dashboard/tasks/assigntask',
                element: <AssignTask/>,
            },
            {
                path: '/dashboard/tasks/assignsubtask',
                element: <AssignSubTask/>,
            },
            {
                path: '/dashboard/users',
                element: <ViewUsers/>,
            },
            {
                path: '/dashboard/users/add',
                element: <AddUser/>,
            },
            {
                path: '/dashboard/users/:id',
                element: <UpdateUser/>,
            },

            // User Pages
            {
                path: '/dashboard/usertasks',
                element: <UserTasks/>,
            },
            {
                path: '/dashboard/usertasks/subtask',
                element: <UserSubTask/>,
            },
            {
                path: '/dashboard/userprojects',
                element: <UserProjects/>,
            },
            {
                path: '/dashboard/userprojects/details',
                element: <ProjectDetails/>,
            },

            

            // {
            //     element: <RequireAuth allowedRole={'admin'}/>,
            //     children: [
            //         {       هون بحط الصفحات الخاصة بالأدمن
                        
            //         }                  
            //     ]
            // },
            // {
            //     element: <RequireAuth allowedRole={'user'}/>,
            //     children: [
            //         {   هون بحط الصفحات الخاصة باليوزر
                       
            //         }
            //     ]
            // }

        ]
    },
   
]