import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="home">Home</NavLink>
                </li>
                <li>
                    <Link exact to="about">About</Link>
                </li>
                <li>
                    <Link exact to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation