import React from "react";
import p from './MyPost.module.css'
import Post from "./Post/Post";
import {MyPostDataType} from "../../../redux/state";



  export type MyPostPropsType = {
    name: string
    myposts:MyPostDataType
}
const MyPost = (props: MyPostPropsType) => {
    return (<div className={p.postBlock}>
           <h3>{props.name}</h3>
            <div>
                <div className={p.item}>
                    New post
                </div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                {props.myposts.map(el=>
                <Post name={el.message} like={el.like}/>
                )}
            </div>
        </div>
    )
}

export default MyPost