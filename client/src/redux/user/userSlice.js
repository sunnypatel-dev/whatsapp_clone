import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // logged in user detail stored
  currentUserTotalContactsData: null, // logged in user's chat detail stored
  currentClickedContactChat: null,
  // currentClickedContactChat: null,
  // loading: false,
  // error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUserInfo: (state, action) => {
      state.currentUser = action.payload;
      // state.error = false;
    },
    signInUserTotalContactsData: (state, action) => {
      state.currentUserTotalContactsData = action.payload;
    },
    currentClickedContactChat: (state, action) => {
      state.currentClickedContactChat = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signInUserInfo,
  signInUserTotalContactsData,
  currentClickedContactChat,
  signInFailure,
} = userSlice.actions;

export default userSlice.reducer;
