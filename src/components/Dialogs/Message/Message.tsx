import React from "react";
import s from './../Dialogs.module.css';


type MessageProps = {
    message: string
}
const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>
            {props.message}</div>
    )
}

export default Message