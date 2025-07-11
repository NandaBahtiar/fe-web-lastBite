import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from '../pages/HomePage';
import {NotFound} from "../components/Library/NotFound/index.jsx";
import DeveloperPage from "../pages/DeveloperPage/DeveloperPage.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/developers" element={<DeveloperPage/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;
