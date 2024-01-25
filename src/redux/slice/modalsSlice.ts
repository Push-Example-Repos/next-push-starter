import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalsState {
  openAddContact: boolean;
  activeWallet: string | null;
}

const initialState: ModalsState = {
  activeWallet: null,
  openAddContact: false,
};

const modalsSlice = createSlice({
  name: "modals",

  initialState,

  reducers: {
    toggleAddContactModal: (
      state: ModalsState,
      action: PayloadAction<boolean>
    ) => {
      state.openAddContact = action.payload;
    },

    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
    },
  },
});

export const { toggleAddContactModal, setActiveWallet } = modalsSlice.actions;

export default modalsSlice.reducer;
