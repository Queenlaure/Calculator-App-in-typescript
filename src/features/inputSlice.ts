import {bindActionCreators, createSlice, PayloadAction} from '@reduxjs/toolkit'


interface InputState{
    presentState:string;
    pastState: string;
    sign:string;
    result:string;
}

const initialState:InputState = {
    presentState:'',
    pastState: '',
    sign:'',
    result:''        
}

export const inputSlice = createSlice ({
    name: 'input',
    initialState,
    reducers: {
        addDigit: (state, action:PayloadAction<string> )=>{
            return {
                ...state,
                presentState: state.presentState + action.payload
            }
        },
        calculation: (state) => {
            return {
                ...state,
                presentState: eval(state.presentState)
            }

        },
        empty: (state) => {
            return {
                ...state,
                presentState: ''
            }

        },
        strike: (state) => {
            return {
                ...state,
                presentState: state.presentState.slice(0, -1)
            }
        },
        bracketOperation: (state, action:PayloadAction<string>) => {
            if(state.pastState.includes("(")){
                return {
                    ...state,
                    presentState:action.payload
                }
            }
            return {
                ...state,
                presentState:action.payload

            }
        }
    }
})
export const { addDigit ,calculation, empty, strike}  = inputSlice.actions

export default inputSlice.reducer;