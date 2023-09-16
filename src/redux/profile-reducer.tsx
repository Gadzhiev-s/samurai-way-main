import {ActionAcType, ProfilePageType} from "./state";

let initialState = {
        myPostData: [
            {id: 1, message: 'Очень круто провел ', like: 12334},
            {id: 2, message: 'Очень круто поиграл в футбол', like: 14},
            {id: 3, message: 'Очень круто позанимался спортом', like: 32},
        ],
        newPostText: 'Hello'
    }

const profileReducer = (state:ProfilePageType = initialState, action: ActionAcType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 4, message: state.newPostText, like: 0}
            state.myPostData.push(newPost)
            state.newPostText = ''
            return state

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default :
            return state


    }


}
export default profileReducer