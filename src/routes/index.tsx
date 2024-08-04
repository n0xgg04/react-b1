import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/:id" element={<DetailPage />}/>
            </Routes>
        </BrowserRouter>
    );
};
