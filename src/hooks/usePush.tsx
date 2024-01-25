"use client";

import { useEthersSigner } from "@/wagmi/EthersSigner";
import { useDispatch, useSelector } from "react-redux";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

import { setPushSign } from "@/redux/slice/pushSlice";

export default function usePush() {
  const dispatch = useDispatch();
  const signer = useEthersSigner();

  const initializePush = async () => {
    const user = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });

    dispatch(setPushSign(user as any));

    return user;
  };

  return {
    initializePush,
  };
}
