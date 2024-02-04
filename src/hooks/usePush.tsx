"use client";

import { useEthersSigner } from "@/wagmi/EthersSigner";
import { useDispatch } from "react-redux";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

import { setPushSign, setRecentRequest } from "@/redux/slice/pushSlice";
import toast from "react-hot-toast";

export default function usePush() {
  const dispatch = useDispatch();
  const signer = useEthersSigner();

  const initializePush = async () => {
    try {
      const user = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING,
      });

      dispatch(setPushSign(user as any));

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

      stream.on(CONSTANTS.STREAM.CHAT, async (data: any) => {
        data.event.includes("message")
          ? console.log("MESSAGE", data)
          : data.event.includes("request")
          ? user.chat.list("REQUESTS").then((requests: any) => {
              const filterRecentRequest = requests.map((request: any) => ({
                profilePicture: request.profilePicture,
                did: request.did,
                msg: request.msg.messageContent,
                name: request.name,
                about: request.about,
              }));

              dispatch(setRecentRequest(filterRecentRequest));
            })
          : data.event.includes("accept")
          ? console.log("ACCEPT", data)
          : toast.error("Your request has been rejected");
      });

      stream.on(CONSTANTS.STREAM.CHAT_OPS, (data: any) => {
        console.log("CHAT_OPS", data);
      });

      stream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {
        console.log("NOTIF", data);
      });

      await stream.connect();

      stream.on(CONSTANTS.STREAM.DISCONNECT, () => {});

      return user;
    } catch (error) {
      toast.error("Request Rejected");
    }
  };

  return {
    initializePush,
  };
}
