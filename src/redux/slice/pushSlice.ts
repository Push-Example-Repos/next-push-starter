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
    setPushSign: (state: PushState, action: PayloadAction<PushSign>) => {
      state.pushSign = action.payload;
    },

    setCurrentContact: (state: PushState, action: PayloadAction<Contact>) => {
      state.currentContact = [action.payload];
    },

    setRecentContact: (state: PushState, action: PayloadAction<Contact[]>) => {
      state.recentContact = action.payload;
    },

    updateRecentRequest: (state: PushState, action: PayloadAction<any[]>) => {
      state.recentRequest = action.payload;
    },

    setMessages: (
      state: PushState,
      action: PayloadAction<MessageResponse[]>
    ) => {
      state.messages = action.payload.map(
        (message: any) => message as WritableDraft<MessageResponse>
      );
    },

    updateMessages: (
      state: PushState,
      action: PayloadAction<WritableDraft<MessageResponse>>
    ) => {
      state.messages.push(action.payload);
    },

    resetContacts: (state: PushState) => {
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
