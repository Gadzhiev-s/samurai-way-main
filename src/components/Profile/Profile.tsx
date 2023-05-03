import React from "react";
import p from './Profile.module.css'

import MyPost from "./Post/MyPost";

// type NavPropsType ={}
const Content = () => {
    return (<div>
        <div className={p.content}>
            <img src={'https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg'} alt={'фото'}/>

            <div>
                Ava + description
                <MyPost name={'My Post'}/>
            </div>
        </div>
    </div>);
}

export default Content