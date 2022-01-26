import React from "react";
import s from './Profile.module.css'

export  const Profile = () => {
    return(
        <div className= {s.content}>
            <div>
                <img src='https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/03-30/earth-ocean-35311.jpg'/>
            </div>
            <div>ava+description</div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.post}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    )
}
