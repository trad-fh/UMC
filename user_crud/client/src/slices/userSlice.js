import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocal,
  removeAllLocal,
  setUserInLocal,
} from "../utils/local";

const userSlice = createSlice({
  name: "userInfo",
  initialState: { value: getUserFromLocal() },

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      setUserInLocal(state.value);
    },
    logout: (state) => {
      removeAllLocal();
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
