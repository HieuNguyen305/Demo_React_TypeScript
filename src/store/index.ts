import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer"
import thunk from "redux-thunk"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhencers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;