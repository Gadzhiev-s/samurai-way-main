import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
// type NavPropsType ={
//     title: string
// }
const Nav = () => {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={'/Dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Music'} activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Setting'} activeClassName={s.activeLink}>Setting</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Friends'} activeClassName={s.activeLink}>Friends</NavLink>
        </div>

    </nav>)
}
export default Nav