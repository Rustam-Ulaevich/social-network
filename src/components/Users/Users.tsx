import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../imags/download.png'


export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items)
        })
    }

    return <>
        {
            props.usersPage.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photo.small !=null ? u.photo.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ ()=>{ props.unfollow(u.id) } }>UnFollow</button>
                            : <button onClick={ ()=>{ props.follow(u.id) } }>Follow</button>}

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


                </div>

                )
        }

    </>;
}

// [{
//     id: 1,
//     photoUrl: '',
//     followed: true,
//     fullName: 'Rustam',
//     status: 'I am ohuenni',
//     location: {
//         city: 'Sterlitamak',
//         country: 'Russia',
//     }
// },
// {
//     id: 2,
//     photoUrl: '',
//     followed: true,
//     fullName: 'Svitlana',
//     status: 'I am ohuenni',
//     location: {
//         city: 'Odessa',
//         country: 'Ukraine'
//     }
// },
// {
//     id: 3,
//     photoUrl: '',
//     followed: true,
//     fullName: 'Andrei',
//     status: 'I am ohuenni',
//     location: {
//         city: 'Moscow',
//         country: 'Russia'
//     }
// }]) }
