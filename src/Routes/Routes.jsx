import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import College from "../pages/College/College";
import CollegeDetail from "../pages/CollegeDetail/CollegeDetail";
import PrivetRoute from "./PrivedRoutes";
import HomeCollege from "../pages/HomeCollege/HomeCollege";
import NotFound from "../pages/NotFound/NotFound";
import Admission from "../pages/Admission/Admission";
import Candidate from "../pages/Candidate/Candidate";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile/Profile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "college",
                element: <College></College>,
                loader: () => fetch('https://brightstorm-server-site.vercel.app/college')
            },
            {
                path: "collegeDetail/:id",
                element: <PrivetRoute><CollegeDetail></CollegeDetail></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brightstorm-server-site.vercel.app/college/${params.id}`)
            },
            {
                path: "HomeCollege",
                element: <HomeCollege></HomeCollege>,
            },
            {
                path: "admission",
                element: <Admission></Admission>,
            },
            {
                path: "candidate",
                element: <Candidate></Candidate>,
            },
            {
                path: "myCollege",
                element: <MyCollege></MyCollege>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
                loader: ({ params }) => fetch(`https://brightstorm-server-site.vercel.app/apply/${params.email}`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);