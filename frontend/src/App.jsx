import {useEffect, useState} from "react";
import MainPage from "./pages/MainPage.jsx";
import {useRoutes} from "react-router-dom";
import EmployeePage from "./pages/EmployeePage.jsx";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const routes = useRoutes([
            {
                element: <MainPage onLogin={setUsername}/>,
                path: "/"
            },
            {
                element: <EmployeePage/>,
                path: `/employees/:username`
            },
        ]
    )
    return routes;
}

export default App;
