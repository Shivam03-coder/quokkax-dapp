import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  imageUrl: string;
  storyUrl: string;
}

const initialState: initialStateTypes = {
  imageUrl: "",
  storyUrl: "",
};

export const IPFSstate = createSlice({
  name: "ipfs-state",
  initialState,
  reducers: {
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setStoryUrl: (state, action: PayloadAction<string>) => {
      state.storyUrl = action.payload;
    },
  },
});

export const { setImageUrl, setStoryUrl } = IPFSstate.actions;
