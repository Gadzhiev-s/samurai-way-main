import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "../../redux/state";


type DialogsStatePropsType = {
    state: DialogsType
    sendMessage:()=>void
    updateNewMessageBody:(e:string)=>void

}
const Dialogs = (props: DialogsStatePropsType) => {
    let newMessageBody = props.state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()

    }
    const onNewMessageChange = (e:any) => {
       let body =  e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map((el, i) =>
                    <DialogItem key={el.id} name={el.name} id={el.id}/>
                )}
                <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
            <div className={s.messages}>
                {props.state.messages.map((el, i) =>
                    <Message key={el.id} message={el.message}/>
                )}
            </div>

        </div>
    )
}
export default Dialogs