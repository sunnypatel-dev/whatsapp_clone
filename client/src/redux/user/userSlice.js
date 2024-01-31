import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // logged in user detail stored
  currentUserTotalContactsData: null, // logged in user's chat detail stored
  currentClickedContactChat: null, // current clicked contacts  chat taken from the currentUsersTotalContactsData
  searchedUsersInfo: null, // searched user info saved here
  mateFound: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUserInfo: (state, action) => {
      state.currentUser = action.payload;
      // state.error = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    signInUserTotalContactsData: (state, action) => {
      state.currentUserTotalContactsData = action.payload;
    },
    setCurrentClickedContactChat: (state, action) => {
      state.currentClickedContactChat = action.payload;
    },
    searchedUsersInfo: (state, action) => {
      state.searchedUsersInfo = action.payload;
    },
    setMateFound: (state, action) => {
      state.mateFound = action.payload;
    },
  },
});

export const {
  signInUserInfo,
  signInUserTotalContactsData,
  setCurrentClickedContactChat,
  signInFailure,
  searchedUsersInfo,
  setMateFound,
} = userSlice.actions;

export default userSlice.reducer;
