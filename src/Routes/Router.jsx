import App from "../App"
import Error403 from "./Error403";
// import RequireAuth from "./RequireAuth";
import Dashboard from "../Modules/Dashboard/Pages/Dashboard"
import Home from "../Modules/Dashboard/Pages/Home"
import GuardedRoutes from "./GuardedRoutes"
import Profile from "../Modules/Profile/Pages/Profile";
import Performance from "../Modules/Performance/Pages/Performance.jsx";
import WorkLog from "../Modules/WorkLog/Pages/WorkLog";
/*
import AdminProjects from "../Modules/Admin/AdminProjects/Pages/AdminProjects";
*/
import UpdateProject from "../Modules/Admin/AdminProjects/Pages/UpdateProject";
import AdminViewProjects from "../Modules/Admin/AdminProjects/Pages/AdminViewProjects";
import AddProject from "../Modules/Admin/AdminProjects/Pages/AddProject";
import ViewUsers from "../Modules/Admin/Users/Pages/ViewUsers";
import AddUser from "../Modules/Admin/Users/Pages/AddUser";
import UpdateUser from "../Modules/Admin/Users/Pages/UpdateUser";
import UpdateProfile from "../Modules/Profile/Pages/UpdateProfile";
import AdminTasks from "../Modules/Admin/Tasks/Pages/AdminTasks";

const isAuthenticated= true;

// const isAuthenticated = localStorage.getItem('user');
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
                OnFaild={() => <Error403 />}/>
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
                path: 'updateprofile',
                element: <UpdateProfile/>,
            },
            {
                path: 'performance',
                element: <Performance/>,
            },
            {
                path: 'worklog',
                element: <WorkLog/>,
            },
            // Admin pages
          /*  {
                path: 'adminprojects',
                element: <AdminProjects/>,
            },*/
            {
                path: 'projects',
                element: <AdminViewProjects/>,
            },
            {
                path: 'projects/add',
                element: <AddProject/>,
            },
            {
                path: 'projects/update',
                element: <UpdateProject/>,
            },
            {
                path: 'tasks',
                element: <AdminTasks/>,
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
                path: 'users/update',
                element: <UpdateUser/>,
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