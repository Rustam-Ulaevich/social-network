const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    id: number
    photo: any
    followed: boolean
    name: string
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
}

export type InitialUsersType = {
    users: Array<UserType>
}

let initialState: InitialUsersType = {
    users: []
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
                ...state, users: [...state.users,]
            }

        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)

export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
