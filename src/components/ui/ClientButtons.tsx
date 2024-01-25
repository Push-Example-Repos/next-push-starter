"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import usePush from "@/hooks/usePush";

import DefaultButton from "./DefaultButton";

const ConnectWalletBtn: FC = () => {
  const activeWallet = useSelector((state: any) => state.modals.activeWallet);

  const dispatch = useDispatch();
  const { connect, connectors } = useConnect();

  const handleClick = () => {
    connect({
      connector: connectors[activeWallet === "MetaMask" ? 0 : 1],
    });
  };

  return (
    <DefaultButton
      color="gray"
      variant={"filled"}
      onClick={handleClick}
      label="Connect Wallet"
      style="bg-gradient-push w-full text-sm sm:text-sm md:text-base font-medium text-white"
    />
  );
};

const SignWalletBtn: FC = () => {
  const { initializePush } = usePush();
  const router = useRouter();

  const handleClick = async () => {
    try {
      await initializePush();
      router.push("/chat");
    } catch (err) {
      console.log(err);
      toast.error("Error initializing Push Protocol");
    }
  };

  return (
    <DefaultButton
      variant="filled"
      color="gray"
      label="Initialize Push"
      style="bg-gradient-push w-3/4 text-sm sm:text-sm md:text-base font-medium text-white"
      onClick={handleClick}
    />
  );
};

export { ConnectWalletBtn, SignWalletBtn, DefaultButton };
