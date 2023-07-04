import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostDataType} from "../../redux/state";
// import {MyPostDataType} from "../../index";


type NavPropsType ={
    posts:MyPostDataType
}
const Profile = (props:NavPropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPost name={'My Post'} myposts={props.posts} />
    </div>);
}

export default Profile