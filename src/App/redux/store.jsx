import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './root_reducer';
import localForage from "localforage";
import {persistStore } from 'redux-persist';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
    // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

/*
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(loggerMiddleware)
    )
);
*/
// enable persistent store
export const persist = persistStore(store, {
    storage: localForage,
    whitelist: [
        'login'
    ]
});


export default store;