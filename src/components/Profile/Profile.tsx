import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    postData: ProfilePageType
}

export  const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts state={props.postData}/>
    </div>
}
