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
                path: '',
                element: <Home/>,
            },
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'profile/updateprofile',
                element: <UpdateProfile/>,
            },
            {
                path: 'performance',
                element: <PerformancePage/>,
            },
            {
                path: 'worklog',
                element: <WorkLog/>,
            },
            // Admin pages
            {
                path: 'adminprojects',
                element: <AdminProjects/>,
            },
            {
                path: 'adminprojects/projects',
                element: <AdminAllProjects/>,
            },
            {
                path: 'adminprojects/add',
                element: <AddProject/>,
            },
            {
                path: 'adminprojects/update/:id',
                element: <UpdateProject/>,
            },
            {
                path: 'adminprojects/details/:id',
                element: <AdminProjectDetails/>,
            },
            {
                path: 'tasks',
                element: <AdminTasks/>,
            },
            {
                path: 'tasks/subtask',
                element: <AdminSubTask/>,
            },
            {
                path: 'tasks/assigntask',
                element: <AssignTask/>,
            },
            {
                path: 'tasks/assignsubtask',
                element: <AssignSubTask/>,
            },
            {
                path: 'users',
                element: <ViewUsers/>,
            },
            {
                path: 'users/add',
                element: <AddUser/>,
            },
            {
                path: 'users/:id',
                element: <UpdateUser/>,
            },

            // User Pages
            {
                path: 'usertasks',
                element: <UserTasks/>,
            },
            {
                path: 'usertasks/subtask',
                element: <UserSubTask/>,
            },
            {
                path: 'userprojects',
                element: <UserProjects/>,
            },
            {
                path: 'userprojects/details',
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