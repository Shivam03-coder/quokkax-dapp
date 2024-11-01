import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarOpen: boolean;
  isdarkMode: boolean;
  walletAddress: string;
}

const initialState: initialStateTypes = {
  isSidebarOpen: false,
  isdarkMode: false,
  walletAddress: "",
};

export const applicationState = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setisSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setisdarkMode: (state, action: PayloadAction<boolean>) => {
      state.isdarkMode = action.payload;
    },
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
  },
});

export const { setisSidebarOpen, setisdarkMode, setWalletAddress } =
  applicationState.actions;
