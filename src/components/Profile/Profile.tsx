import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {}

export  const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer/>
    </div>
}
