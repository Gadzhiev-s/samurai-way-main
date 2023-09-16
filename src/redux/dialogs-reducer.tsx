import {ActionAcType, DialogsType} from "./state";

let initialState = {
    dialogs: [
        {id: 1, name: 'Shamil'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Vladimir'},

    ],
    messages: [
        {id: 1, message: 'Assalamu alaikum'},
        {id: 2, message: 'Wa-alaykumu s-salamu'},
        {id: 3, message: 'how are you bro?'},

    ],
    newMessageBody: ''
}
const dialogsReducer = (state:DialogsType =initialState, action: ActionAcType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body});

            return state
        default :
            return state


    }

}
export default dialogsReducer