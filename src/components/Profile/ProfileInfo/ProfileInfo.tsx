import React from "react";
import s from './Profile.module.css'
import keyboard from './banner-909710_1280.jpg'


export function ProfileInfo() {
    return <>
        <div>
            <img src={keyboard}
             width={500} height={200}/>
        </div>
        <div>Ava+description</div>
    </>
}
