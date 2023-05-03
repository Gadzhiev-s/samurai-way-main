import React from "react";
import s from './Nav.module.css';
// type NavPropsType ={
//     title: string
// }
const Nav = () => {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Setting</a>
        </div>

    </nav>)
}
export default Nav