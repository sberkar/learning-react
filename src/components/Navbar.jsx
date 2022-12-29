import { useState } from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/Auth-Context";

import "./css/navbar.css";
import Search from './media/search.svg'

function Navbar() {
    const { currentUser } = useAuth()

    return <header>
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    .Bcool
                </Link>
            </div>
            <div className="menu">
                <div className="search">
                    <input type="text" placeholder="Search Blogs" />
                    <button><img src={Search} alt="search" /></button>
                </div>
            </div>
            <div className="account">
                {currentUser === null?<Link to="/user/login"><button className="signin-btn">Sign In</button></Link>
                :<div className="loggedin-user">
                    <Link to="/post/create" className="post-create-btn">Create New</Link>
                    <Link to='/user/account' ><img src={currentUser.photoURL} alt="person" /></Link>
                </div>}
            </div>
        </nav>
    </header>
}

export default Navbar;