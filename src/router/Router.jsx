import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout/HomeLayout";
import { BookingLayout } from "../layout/BookingLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>} />
            <Route path="/booking" element={<BookingLayout/>} />
        </Routes>
    )
}