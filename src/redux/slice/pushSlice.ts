import { Draft } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PushSign } from "@/types/pushTypes";
import { Contact } from "@/types/contactTypes";
import { MessageResponse } from "@/types/messageTypes";

type WritableDraft<T> = Draft<T>;

interface PushState {
  messages: MessageResponse[];
  pushSign: PushSign;
  recentRequest: Contact[];
  recentContact: Contact[];
  currentContact: Contact[];
}

const initialState: PushState = {
  messages: [],
  pushSign: {},
  recentRequest: [],
  recentContact: [],
  currentContact: [],
};

const pushSlice = createSlice({
  name: "push",

  initialState,

  reducers: {
    setPushSign: (state, action: PayloadAction<PushSign>) => {
      state.pushSign = action.payload;
    },

    setCurrentContact: (state, action: PayloadAction<Contact>) => {
      state.currentContact = [action.payload];
    },

    setRecentContact: (state, action: PayloadAction<Contact[]>) => {
      state.recentContact = action.payload;
    },

    updateRecentRequest: (state, action: PayloadAction<any[]>) => {
      state.recentRequest = action.payload;
    },

    setMessages: (state, action: PayloadAction<MessageResponse[]>) => {
      state.messages = action.payload.map(
        (message) => message as WritableDraft<MessageResponse>
      );
    },

    updateMessages: (
      state,
      action: PayloadAction<WritableDraft<MessageResponse>>
    ) => {
      state.messages.push(action.payload);
    },

    resetContacts: (state) => {
      initialState;
    },
  },
});

export const {
  setPushSign,
  setCurrentContact,
  setRecentContact,
  resetContacts,
  setMessages,
  updateMessages,
  updateRecentRequest,
} = pushSlice.actions;

export default pushSlice.reducer;
