import { createSlice } from "@reduxjs/toolkit";

const addcardpageSlice = createSlice({
    name:"addcard",
    initialState:{
        
            id: "",
            cardNo: "",
            firstName:"",
            lastName:"",
            validity:"",
            ccvNo:"",
            vendor:""
    },
        
        reducers:{
            addCardNo: (state, action) => {
                state.cardNo += action.payload;
            },
            addFirstName:(state,action)=>{
                state.firstName += action.payload;
            },
            addLastName:(state,action)=> {
                state.lastName += action.payload;
            },
            addValidity:(state,action)=>{
                state.validity += action.payload;
            },
            addCCV:(state,action) =>{
                state.ccvNo += action.payload;
            },
            addVendor:(state,action) => {
                state.vendor += action.payload;
                
            }

        }
    }
)

const {actions, reducer} = addcardpageSlice;
export const {addCardNo,addFirstName,addLastName,addValidity,addCCV,addVendor} = actions;
export default reducer;

