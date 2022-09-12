import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navigation.module.css';
import {Friends} from "./Friends";
import {DialogsPageType} from "../../Redux/store";


export function  Navigation() {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='../Profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='../Dialogs' className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='../News' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='../Music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='../Settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='../Users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>
            <div>
                <Friends/>
            </div>
        </nav>
    )
}
