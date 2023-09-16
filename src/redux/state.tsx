import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsType
}

export type ProfilePageType = {
    myPostData: MyPostDataType,
    newPostText: string
}
export type MyPostDataType = {
    id: number,
    message: string,
    like: number
}[]
export type DialogsType = {
    dialogs: DialogType,
    messages: MessageType,
    newMessageBody: any
}
export type DialogType = {
    id: number,
    name: string
}[]
//
export type MessageType = {
    id: number,
    message: string
}[]

export type StoreType = {
    _state: StateType,
    updateNewPostsText: (newText: string) => void,
    subscribe: (callback: () => void) => void,
    addPosts: () => void,
    getState: () => StateType,
    _callSubscriber: (callback: any) => void,
    dispatch: (action: ActionAcType) => void

}
export type StoreType1 = {
    store: StateType,
    updateNewPostsText: (newText: string) => void,
    subscribe: (callback: () => void) => void,
    addPosts: () => void,
    getState: () => StateType,
    _callSubscriber: (callback: any) => void,
    // dispatch: (action: ActionAcType) => void

}
export let store: StoreType = {
    _state: {
        profilePage: {
            myPostData: [
                {id: 1, message: 'Очень круто провел ', like: 12334},
                {id: 2, message: 'Очень круто поиграл в футбол', like: 14},
                {id: 3, message: 'Очень круто позанимался спортом', like: 32},
            ],
            newPostText: 'Hello'
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('semen')
    },
    addPosts() {
        let newPost = {id: 4, message: this._state.profilePage.newPostText, like: 0}
        this._state.profilePage.myPostData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostsText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    dispatch(action: ActionAcType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

        // if (action.type === 'ADD-POST') {
        //     let newPost = {id: 4, message:this._state.profilePage.newPostText, like: 0}
        //     this._state.profilePage.myPostData.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // }else if(action.type ==='UPDATE-NEW-MESSAGE-BODY'){
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state)
        // }else if(action.type ==='SEND-MESSAGE'){
        //     let  body =this._state.dialogsPage.newMessageBody
        //     this._state.dialogsPage.newMessageBody = ''
        //     this._state.dialogsPage.messages.push({id: 6,message:body});
        //     this._callSubscriber(this._state)
        // }

    },

}

type AddPostsAcType = ReturnType<typeof addPostsAC>
export type UpdateNewPostsTextAcType = ReturnType<typeof updateNewPostsAC>
type UpdateNewMessageBodyAcType = ReturnType<typeof newMessageBodyAC>
type SendMessgeAcType = ReturnType<typeof sendMessgeAC>
export type ActionAcType = AddPostsAcType | UpdateNewPostsTextAcType | UpdateNewMessageBodyAcType | SendMessgeAcType

export const addPostsAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const newMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    } as const
}
export const updateNewPostsAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText,
    } as const
}
export const sendMessgeAC = () => {
    return {
        type: 'SEND-MESSAGE',

    } as const
}
