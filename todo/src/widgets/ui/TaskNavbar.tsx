import React from 'react'
import {Link} from "react-router-dom";
import style from './Navbar.module.css'

export const TaskNavbar = () => {
    return (
        <nav className={style.navbar}>
            <Link to="/">Inbox</Link>
            <Link to="/today">Today</Link>
            <Link to="/n7d">Next 7 Days</Link>

            <hr/>
            <h3><strong>Filter</strong></h3>

            {/*<Link to="/add-task">Add task</Link>*/}
            {/* Добавьте другие ссылки и элементы управления */}
        </nav>
    )
}