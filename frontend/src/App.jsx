import {useEffect, useState} from "react";
import MainPage from "./pages/MainPage.jsx";
import EmployeePage from "./pages/EmployeePage.jsx";
import EditEmployeePage from "./pages/EditEmployeePage.jsx";
import CreateEmployeePage from "./pages/CreateEmployeePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import {useRoutes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            localStorage.removeItem('token');

        }
    }, []);

    const routes = useRoutes([
            {
                element: <MainPage auth={isAuthenticated}/>,
                path: "/"
            },
            {
                element: <HomePage/>,
                path: "/:username/menu"
            },
            {
                element: <EmployeePage/>,
                path: `/:username/employees`
            },
            {
                element: <SchedulePage/>,
                path: `/:username/schedule`
            },
            {
                element: <EditEmployeePage/>,
                path: "/:username/employees/:id"
            },
            {
                element: <CreateEmployeePage/>,
                path: "/:username/employees/create"
            },
            {
                element: <ErrorPage/>,
                path: "error"
            },
            {
                element: <LoginPage/>,
                path: "/login"
            }
        ]
    )
    return routes;
}

export default App;
