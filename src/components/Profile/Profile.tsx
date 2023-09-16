import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {StoreType} from "../../redux/state";


type ProfileStatePropsType={
    store:StoreType

}
const Profile = (props:ProfileStatePropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPostContainer store={props.store}
        // updateNewPostsText={props.updateNewPostsText} addPosts={props.addPosts}
        />
    </div>);
}

export default Profile