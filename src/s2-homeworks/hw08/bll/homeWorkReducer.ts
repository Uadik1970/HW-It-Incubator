import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // const sortByNameUp = (state:UserType[]) => {
            //     return (
            //         state.a.name > state.b.name ? 1 : -1
            //     )
            // }
            return [...state.sort((a: UserType, b: UserType) => {
                return action.payload === 'up'
                    ? a.name > b.name ? 1 : -1
                    : a.name < b.name ? 1 : -1
            })] // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
