import React from "react";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// import Home from   './components/Home/Home'
import { Outlet } from "react-router-dom";

function Layout(){

    return(
        <>
        <Header />
        <Outlet/> 
        <Footer />
        {/* outlet ke andar jo bhi change krte hain bas wahi change hota hai baki sab same rehta hai */}
        </>
    )
}


export default Layout