import App from "../App"
import Error403 from "./Error403";
// import RequireAuth from "./RequireAuth";
import Dashboard from "../Modules/Dashboard/Pages/Dashboard"
import Home from "../Modules/Dashboard/Pages/Home"
import GuardedRoutes from "./GuardedRoutes"
import Profile from "../Modules/Profile/Pages/Profile";
import Performance from "../Modules/Performance/Pages/Performance";
import WorkLog from "../Modules/WorkLog/Pages/WorkLog";

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
                path: 'performance',
                element: <Performance/>,
            },
            {
                path: 'worklog',
                element: <WorkLog/>,
            },
            // {
            //     element: <RequireAuth allowedRole={'admin'}/>,
            //     children: [
            //         {
                        
            //         }                  
            //     ]
            // },
            // {
            //     element: <RequireAuth allowedRole={'user'}/>,
            //     children: [
            //         {
                       
            //         }
            //     ]
            // }

        ]
    },
   
]