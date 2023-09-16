import React from "react";
import p from './MyPost.module.css'
import Post from "./Post/Post";
import {MyPostDataType} from "../../../redux/state";

export type MyPostPropsType = {
    name: string
    posts: MyPostDataType
    newPosts: string
    addPosts: () => void
    updateNewPostsText: (newText: string) => void
}
const MyPost = (props: MyPostPropsType) => {
    let newPostElement: React.RefObject<HTMLTextAreaElement>  = React.createRef<HTMLTextAreaElement>()

    let addPostFunction = () => {
        props.addPosts()
    }
    const addPostChange = () => {
        if(newPostElement.current){
        let text = newPostElement.current.value
        props.updateNewPostsText(text)}
    }
    return (<div className={p.postBlock}>
            <h3>{props.name}</h3>
            <div>
                <div className={p.item}>
                    New post
                </div>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPosts} onChange={addPostChange}/>
                    </div>
                    <button onClick={addPostFunction}>Add post</button>
                </div>
                {props.posts.map(el =>
                    <Post key={el.id} name={el.message} like={el.like}/>
                )}
            </div>
        </div>
    )
}

export default MyPost