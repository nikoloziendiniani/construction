import React from "react"
import { Link } from "react-router-dom"

import logo from "./../../asset/images/construction logo .png"

import "./../layout.css"

const Navbar = () => {

    return (
        <>
            <section className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <Link to="/">
                        home
                    </Link>
                    <Link to="sevices/rent">
                        rent
                    </Link>
                    <Link to="sevices/fix">
                        fix
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Navbar