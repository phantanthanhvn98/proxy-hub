import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import Pricing from "../pages/pricing";
import Support from "../pages/support";
import Profile from "../components/profile/profile";
import Store from "../pages/store";
import Wallet from "../pages/wallet";
import Invoices from "../pages/invoices";
import Referal from "../pages/referal";
import Help from "../pages/help";


const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path="/auth/login" element={<SignIn />} />
            <Route path="/auth/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/store" element={<Store />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/referals" element={<Referal />} />
            <Route path="/help-center" element={<Help />} />
            <Route path="/support" element={<Support />} />
        </Routes>
    )
}

export default RouterApp;