import { combineReducers, createStore } from "redux"
import TodoReducers from "./reducers/TodoReducers";

const rootReducer=combineReducers({
    todos:TodoReducers,
})

export const store=createStore(rootReducer)

// const store = configureStore()