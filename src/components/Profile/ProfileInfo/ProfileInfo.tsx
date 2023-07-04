import React from "react";
import p from './ProfileInfo.module.css'

// type NavPropsType ={}
const ProfileInfo = () => {
    return (
        <div className={p.content}>
            <img src={'https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg'} alt={'фото'}/>
            <div className={p.discriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo