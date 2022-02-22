import { createSlice } from "@reduxjs/toolkit";
import {apiSlice} from "./apiSlice";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    activeCard: {
      id: 1,
      cardNo: "1212 1212 1212 1212",
      firstName:"",
      lastName:"",
      validity:"",
      ccvNo:"",
      vendor:""
    },

    cards: [
      {
        id: 2,
        firstName: "Card No. 1",
        lastName: "Here is the first in array",
      },
      {
        id: 3,
        firstName: "Card No. 2",
        lastName: "Here is the second in array",
      },
            
    ],
  },
  reducers: {
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    moveCard: (state, action) => {
      state.cards.push(state.activeCard);
      state.activeCard = {
        id: state.cards[action.payload].id,
        firstName: state.cards[action.payload].firstName,
        lastName: state.cards[action.payload].lastName,
      };
      // console.log(state.activeCard);
      state.cards = state.cards.filter((card, index) => index !== action.payload);      
      // console.log(state.cards);      
    }
    
  },
});

export const { deleteCard, moveCard } = homepageSlice.actions;
export default homepageSlice.reducer;
