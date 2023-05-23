import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main ";
import Home from "../Page/Home/Home";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import BookService from "../LayPage/BookService";
import Booking from "../LayPage/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'book/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }, {
                path: 'bookings',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    }
])
export default router;