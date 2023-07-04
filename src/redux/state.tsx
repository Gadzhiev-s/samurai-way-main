
 export type StateType ={
    profilePage:ProfilePageType,
    dialogsPage:DialogsType
}


 export const state = {
    profilePage:{
        myPostData:[
            {id: 1, message: 'Очень круто провел ', like: 12334},
            {id: 1, message: 'Очень круто поиграл в футбол', like: 14},
            {id: 1, message: 'Очень круто позанимался спортом', like: 32},
        ]
    },
    dialogsPage:{
        dialogs:[
            {id: 1, name: 'Shamil'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Sergey'},
            {id: 5, name: 'Vladimir'},

        ],
        messages:[
            {id: 1, message: 'Assalamu alaikum'},
            {id: 2, message: 'Wa-alaykumu s-salamu'},
            {id: 3, message: 'how are you bro?'},

        ]
    }
}
 type ProfilePageType = {
    myPostData:MyPostDataType
}
 export type MyPostDataType = {
    id: number,
    message: string,
    like: number
}[]
export type DialogsType = {
    dialogs:DialogType,
    messages:MessageType
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


