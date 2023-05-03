import React from "react";
import p from './MyPost.module.css'
import Post from "./Post";

type MyPostPropsType = {
    name:string
}
const MyPost = (props:MyPostPropsType) => {
    return (<div className={p.g}>
            {props.name}
            <div>
                <div className={p.item}>
                    New post
                </div>

                    <Post name={'Очень круто провел время'} like={1}/>
                    <Post name={'Очень круто поиграл в футбол'} like={14}/>
                    <Post name={'Очень круто позанимался спортом'} like={32}/>
            </div>
        </div>
    )
}

export default MyPost