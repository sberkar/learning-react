import { useState } from "react";
import { Link } from "react-router-dom"

import "./css/navbar.css";
import Person from './media/person.svg';
import Search from './media/search.svg'

function Navbar() {
    const [auth, setAuth] = useState(false)
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
                {!auth?<Link to="/user/login"><button className="signin-btn">Sign In</button></Link>
                :<Link to='/account' ><img src={Person} alt="person" /></Link>}
            </div>
        </nav>
    </header>
}

export default Navbar;