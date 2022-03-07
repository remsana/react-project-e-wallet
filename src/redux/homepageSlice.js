import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    activeCard: {
      id: 1,
      cardNo: "5121 5121 5121 5121",
      firstName: "",
      lastName: "",
      month: "09",
      year:"22",
      ccvNo: "111",
      vendor: "Visa",
    },

    cards: [],    

    addCard: {
      id: "",
      cardNo: "",
      firstName: "",
      lastName: "",
      month: "",
      year:"",
      ccvNo: "",
      vendor: "",
    },
  },
  reducers: {
    activeCardDetails: (state, action) => {
      // console.log(action.payload);    
      state.activeCard.firstName = action.payload.name.first;
      state.activeCard.lastName = action.payload.name.last;
      state.activeCard.id = state.activeCard.id;
      state.activeCard.cardNo = state.activeCard.cardNo;
      state.activeCard.year = state.activeCard.year;
      state.activeCard.month = state.activeCard.month;
      state.activeCard.ccvNo = state.activeCard.ccvNo;
      state.activeCard.vendor = state.activeCard.vendor;
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card, index) => index !== action.payload);
    },
    moveCard: (state, action) => {
      state.cards.push(state.activeCard);
      state.activeCard = {
        id: state.cards[action.payload].id,
        firstName: state.cards[action.payload].firstName,
        lastName: state.cards[action.payload].lastName,
        cardNo: state.cards[action.payload].cardNo,
        year: state.cards[action.payload].year,
        month: state.cards[action.payload].month,
        ccvNo: state.cards[action.payload].ccvNo,
        vendor: state.cards[action.payload].vendor,
      };
      console.log(state.activeCard);
      state.cards = state.cards.filter(
        (card, index) => index !== action.payload
      );
      console.log(state.cards);
    },
    addCardNo: (state, action) => {
      state.addCard.cardNo = action.payload;
      console.log("addCard state:", state.addCard.cardNo);
    },
    addFirstName: (state, action) => {
      state.addCard.firstName = action.payload;
      console.log("addCard state:", state.addCard.firstName);
    },
    addLastName: (state, action) => {
      state.addCard.lastName = action.payload;
    },
    addMonth: (state, action) => {
      state.addCard.month = action.payload;
    },
    addYear: (state, action) => {
      state.addCard.year = action.payload;
    },
    addCCV: (state, action) => {
      state.addCard.ccvNo = action.payload;
    },
    addVendor: (state, action) => {
      state.addCard.vendor = action.payload;
      
  },
  newCard:(state) => {
    if(state.addCard.cardNo.length === 19 && state.addCard.ccvNo.length === 3){
      state.cards.push(state.addCard);
    }else{
      {alert("Please check if you have entered the following correctly!\n\n1.The card number should contain 16 digits!\n2.CCV number should contain only 3 digits! \n3.Enter all the necessary fields!")}
      
    }
  }
  },
});

export const {
  activeCardDetails,
  deleteCard,
  moveCard,
  addCardNo,
  addFirstName,
  addLastName,
  addMonth,
  addYear,
  addCCV,
  addVendor,
  newCard,
} = homepageSlice.actions;

export default homepageSlice.reducer;
