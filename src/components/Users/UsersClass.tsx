import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../imags/download.png'
import React from "react";

export class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render()
        {
            return <>
                <button onClick={this.getUsers}></button>
                {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo.small != null ? u.photo.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {

                            this.props.unfollow(u.id)
                        }}>UnFollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>


                </div>)}

            </>;
        }

    }


