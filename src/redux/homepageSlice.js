import { createSlice } from "@reduxjs/toolkit";

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
      state.activeCard.validity = state.activeCard.validity;
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
        validity: state.cards[action.payload].validity,
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
    state.cards.push(state.addCard);
    //  console.log(state.addCard);
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
