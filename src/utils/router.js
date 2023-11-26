import {useRoutes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Form from "../components/Form/Form";

export default function Router () {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/register',
            element: <Form/>
        }
    ]);
    return routes
}