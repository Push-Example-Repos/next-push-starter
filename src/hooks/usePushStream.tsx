"use client";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "@pushprotocol/restapi";

import { MessageResponse } from "@/types/messageTypes";

import {
  setPushSign,
  setRecentContact,
  updateMessages,
  updateRecentRequest,
} from "@/redux/slice/pushSlice";

import { useSelector } from "react-redux";

export function usePushStream() {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.push.pushSign);

  const initializeStream = async () => {
    const stream = await user.initStream(
      [
        CONSTANTS.STREAM.CHAT,
        CONSTANTS.STREAM.CHAT_OPS,
        CONSTANTS.STREAM.NOTIF,
        CONSTANTS.STREAM.CONNECT,
        CONSTANTS.STREAM.DISCONNECT,
      ],
      {}
    );

    stream.on(CONSTANTS.STREAM.CONNECT, () => {
      console.log("CONNECTED");
    });

    stream.on(CONSTANTS.STREAM.CHAT, (data: any) => {
      // data.event?.includes("message")
      //   ? dispatch(
      //       updateMessages({
      //         fromDID: data.from,
      //         timestamp: data.timestamp,
      //         messageContent: data.message?.content,
      //         messageType: data.message?.type,
      //       })
      //     )
      //   : data.event?.includes("request")
      //   ? dispatch(updateRecentRequest([data]))
      //   : data.event?.includes("accept")
      //   ? dispatch(setRecentContact(data))
      //   : toast.error("Your request has been rejected");
      console.log("CHAT", data);
    });

    stream.on(CONSTANTS.STREAM.CHAT_OPS, (data: any) => {
      console.log("CHAT_OPS", data);
    });

    stream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {
      console.log("NOTIF", data);
    });

    await stream.connect();

    stream.on(CONSTANTS.STREAM.DISCONNECT, () => {});
  };

  return {
    initializeStream,
  };
}
