import React from 'react';
import s from './Navigation.module.css';

export function  Navigation() {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='../Profile'>Profile</a></div>
            <div className={s.item}>
                <a href='../Dialogs'>Message</a></div>
            <div className={s.item}>
                <a href='../News'>News</a></div>
            <div className={s.item}>
                <a href='../Music'>Music</a></div>
            <div className={s.item}>
                <a href='../Settings'>Settings</a></div>
        </nav>
    )
}
