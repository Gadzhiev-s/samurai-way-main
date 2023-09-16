import React from "react";
import {addPostsAC, StoreType, updateNewPostsAC} from "../../../redux/state";
import MyPost from "./MyPost";

export type MyPostPropsType = {
    store:StoreType
    // name: string
    // myPosts: MyPostDataType
    // dispatch: (action: ActionAcType) => void
    // newPosts: string
    // addPosts: () => void
    // updateNewPostsText: (newText: string) => void
}
// newPosts={props.store.profilePage.newPostText} name={'My Post'} myPosts={props.store.profilePage.myPostData} dispatch={props.dispatch}

const MyPostContainer = (props: MyPostPropsType) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostsAC())

    }
    const onPostChange = (text: string) => {
        let action = updateNewPostsAC(text)
        props.store.dispatch(action)
    }
    return <MyPost name={'My Post'} posts={state.profilePage.myPostData} newPosts={state.profilePage.newPostText} addPosts={addPost}
                   updateNewPostsText={onPostChange}/>
}

export default MyPostContainer