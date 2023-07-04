import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StateType} from "../../redux/state";

// import {DialogType, MessageType} from "../../index";
// type DialogsPropsType={
//     dialog:DialogType,
//     message:MessageType
// }
type DialogsStatePropsType={
    state:StateType
}
const Dialogs = (props:DialogsStatePropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsPage.dialogs.map(el =>
                    <DialogItem name={el.name} id={el.id}/>
                )}
            </div>
            <div className={s.messages}>
                {props.state.dialogsPage.messages.map(el =>
                    <Message message={el.message}/>
                )}
            </div>

        </div>
    )
}
export default Dialogs