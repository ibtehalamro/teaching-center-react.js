import React from 'react'
import Header from "../../Layout/Components/Header";
import SideNavbar from "../../Layout/Components/SideNavbar";
import Footer from "../../Layout/Components/Footer";

export default function AdminDashboardLayout(props) {
    return (
        <main className="admin-dashboard dashboard" >
            <Header />
            <SideNavbar />
            {props.children}
            <Footer />
        </main>
    )
}
