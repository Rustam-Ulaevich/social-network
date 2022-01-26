import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export  const Profile = () => {
    return(
        <div className= {s.content}>
            <div>
                <img src='https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/03-30/earth-ocean-35311.jpg'/>
            </div>
            <div>ava+description</div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}
