const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    id: number
    photos: {
        small: string | null
        large: string| null
    }
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string |         null
    // location: {
    //     city: string
    //     country: string
    // }
}

export type InitialUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


export const usersReducer = (state: InitialUsersType = initialState, action: ActionsType): InitialUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

            return {...state}

        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)

export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users: Array<UserType>) => {

    return ({type: SET_USERS, users} as const)
}
