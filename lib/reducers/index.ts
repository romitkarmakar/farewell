import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import counter from "./counter"

const combinedReducers = combineReducers({
    counter
})  

export default function reducer(state, action) {
    switch(action.type) {
        case HYDRATE:
            const nextState = {
            ...state,
            ...action.payload,
            }
            if (state.counter) nextState.counter = state.counter // Preserve state during client side navigations
            return nextState
        default: 
            return combinedReducers(state, action);
    }
}

export type RootState = ReturnType<typeof reducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector