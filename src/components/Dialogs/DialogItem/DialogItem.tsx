import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string,
    id: number
}
const DialogItem = (props: DialogItemProps) => {
    let path = '/Dialogs/' + props.id
    return (<div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink></div>)

}
export default DialogItem
