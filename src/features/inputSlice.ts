import {bindActionCreators, createSlice, PayloadAction} from '@reduxjs/toolkit'

// Interface which contains all the states and their types. the states here are the different conditions(situations) which could be handled
interface InputState{
    presentState:string;
    pastState: string;
    sign:string;
    result:string;
}

// Defining the initialstate with the structure from the InputState interface
const initialState:InputState = {
    presentState:'',
    pastState: '',
    sign:'',
    result:''        
}

//Created a slice using createSlice package which was imported above
export const inputSlice = createSlice ({
    name: 'input',
    initialState,
    //Defining the different reducers which are all the functionalities involved.
    reducers: {

        //For adding what is on the clickable button
        addDigit: (state, action:PayloadAction<string> )=>{
            return {
                ...state,
                presentState: state.presentState + action.payload
            }
        },

        //For evaluating a math operation
        calculation: (state) => {
            return {
                ...state,
                presentState: eval(state.presentState)
            }

        },

        // For clearing the display screen
        empty: (state) => {
            return {
                ...state,
                presentState: ''
            }

        },

        // For deleting a digit
        strike: (state) => {
            return {
                ...state,
                presentState: state.presentState.slice(0, -1)
            }
        },

        //For the bracket
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