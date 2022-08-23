import {configureStore} from '@reduxjs/toolkit'
import editReducer from '../features/inputSlice'

//Created the store from the configureStore package which was imported above
export const store = configureStore({
    reducer: { 
        edit: editReducer, 
    }
})
//type Rootstate is a function which is used to annotate the state of the store. It is a typescript something
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;