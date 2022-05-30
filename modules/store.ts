import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from '@/modules/counter/counterSlice'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'

const isDev = process.env.NODE_ENV === 'development'
const makeStore = () =>
    configureStore({
        reducer,
        middleware: getDefaultMiddleware =>
        isDev ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
        devTools: isDev
    })

export const wrapper = createWrapper(makeStore, {
    debug: isDev,
});

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;