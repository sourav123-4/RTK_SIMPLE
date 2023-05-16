import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllUser(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.removeAllUser, () => {
      return [];
    });
  },
});

export { userSlice };
export const { addUser, removeUser, removeAllUser } = userSlice.actions;
