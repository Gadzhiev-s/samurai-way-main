import React from "react";
import p from './Post.module.css'

type PostPropsType = {
    name:string
    like:number
}
const Post = (props:PostPropsType) => {
    return (<div className={p.g}>
            <div className={p.item}>
                <img src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'} alt={'картинка'}/>
                <div>{props.name}</div>
                <div className={p.red}>Like {props.like}</div>
            </div>

        </div>

    )
}

export default Post