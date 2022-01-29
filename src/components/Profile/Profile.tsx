import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/state";

type ProfileType = {
    postData: Array<PostDataType>
}


export  const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo />
        <MyPosts postData={props.postData}/>
    </div>
}
