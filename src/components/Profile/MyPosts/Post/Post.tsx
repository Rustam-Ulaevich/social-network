import React from "react";
import s from './Post.module.css'


type PropsType = {
    message: string
    likesCount: number
}

export  const Post = (props: PropsType) => {
    return(
            <div className={s.item}>
                <img src='https://www.blast.hk/attachments/68493/'/>
                {props.message}
                <div>
                    <span>
                        Like: {props.likesCount}
                    </span>
                </div>
            </div>
    )
}
