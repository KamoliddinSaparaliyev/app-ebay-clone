import { createStore } from "redux";
import rootReducer from './combaineReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['like', 'login', 'basket']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer)
const persistor = persistStore(store)


export { store, persistor }