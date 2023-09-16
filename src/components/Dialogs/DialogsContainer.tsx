import React from "react";
import {newMessageBodyAC, sendMessgeAC, StoreType} from "../../redux/state";
import Dialogs from "./Dialogs";


type DialogsStatePropsType = {
    store: StoreType

}
const DialogsContainer = (props: DialogsStatePropsType) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessgeAC())

    }
    const onNewMessageChange = (body:string) => {
        props.store.dispatch(newMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}  sendMessage={onSendMessageClick} state={state} />
}
export default DialogsContainer