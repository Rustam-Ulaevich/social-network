import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsItemsType = {
    id: number
    name: string
}

export function DialogsItems(props: DialogsItemsType) {

    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessagesDataType = {
    id: number
    message: string
}

export function Messages(props: MessagesDataType) {
    return <div className={s.message}>{props.message}</div>
}

export function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Rustam'},
        {id: 2, name: 'Gulnara'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Dinara'},
        {id: 5, name: 'Samira'},
    ]

    let messagesData = [
        {id: 1, message: 'Ты купил хлеб?'},
        {id: 2, message: 'Вылетело из головы'},
        {id: 3, message: 'Дуй в магазин!!!'},
        ]

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogsItems id={dialogsData[0].id} name={dialogsData[0].name}/>
            <DialogsItems id={dialogsData[1].id} name={dialogsData[1].name}/>
            <DialogsItems id={dialogsData[2].id} name={dialogsData[2].name}/>
            <DialogsItems id={dialogsData[3].id} name={dialogsData[3].name}/>
            <DialogsItems id={dialogsData[4].id} name={dialogsData[4].name}/>
        </div>
        <div className={s.messages}>
            <Messages message={messagesData[0].message} id={messagesData[0].id}/>
            <Messages message={messagesData[1].message} id={messagesData[1].id}/>
            <Messages message={messagesData[2].message} id={messagesData[2].id}/>
        </div>
    </div>)
}
