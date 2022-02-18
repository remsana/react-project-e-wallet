import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        cards: [{
            id: 1,
            firstName: "Remya",
            lastName: "Panicker",
            status: "active"
        },
        {
            id: 2,
            firstName: "Remya",
            lastName: "Panicker",
            status: "inactive"
        },{
            id: 3,
            firstName: "Remya",
            lastName: "Panicker",
            status: "inactive"
        },{
            id: 4,
            firstName: "Remya",
            lastName: "Panicker",
            status: "inactive"
        }]
    },
    reducers: {
        changeStatus: (state) => {
            state.cards.status = "active"
        }

    }
});

export const { changeStatus} = homepageSlice.actions;
export default homepageSlice.reducer;