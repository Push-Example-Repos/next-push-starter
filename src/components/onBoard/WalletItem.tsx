import Image from "next/image";
import React, { FC } from "react";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";

import { setActiveWallet } from "@/redux/slice/modalsSlice";

interface WalletItemProps {
  bg: string;
  src: string;
  name: string;
}

const WalletItem: FC<WalletItemProps> = ({ bg, src, name }) => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();

  const handleClick = () => {
    if (isConnected) return;
    dispatch(setActiveWallet(name));
  };

  return (
    <li
      className={`prevent-select flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 ${
        isConnected && "cursor-default opacity-50 hover:bg-transparent"
      }`}
      onClick={handleClick}
    >
      <div className={`overflow-hidden rounded-lg p-3 ${bg}`}>
        <Image
          src={`/assets/wallets/${src}`}
          alt={name + " Logo"}
          width={32}
          height={32}
        />
      </div>

      <p className="font-medium">{name}</p>
    </li>
  );
};

export default WalletItem;
