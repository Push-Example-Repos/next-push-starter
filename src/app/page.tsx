"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { useEthersSigner } from "@/wagmi/EthersSigner";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "@/redux/slice/pushSlice";
import { useRouter } from "next/navigation";
import ConnectSignBtn from "@/components/onBoard/ConnectSignBtn";
import Image from "next/image";
import Link from "next/link";
import WalletList from "@/components/onBoard/WalletList";
import SelectedWallet from "@/components/onBoard/SelectedWallet";
// import usePush from "@/hooks/usePush";

export default function Home() {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const signer = useEthersSigner();
  const dispatch = useDispatch();
  const router = useRouter();
  // const { streamChat } = usePush();
  // const stream = useSelector((state) => state.push.stream);

  return (
    // <div className="h-screen w-screen flex items-center justify-center bg-black">
    //   <div className="w-[400px] border-[1px] border-white/30 rounded-3xl flex flex-col items-center p-5 pb-7">
    //     <ChatBubbleBottomCenterTextIcon className="h-20 w-20 mb-2" />
    //     <h1 className="font-bold text-5xl">Quick3</h1>
    //     <h3>Messenger</h3>

    //     {!isConnected && (
    //       <>
    //         <Button
    //           className="w-full mt-10 rounded-2xl"
    //           size="lg"
    //           onClick={() => {
    //             connect({
    //               connector: connectors[0],
    //             });
    //           }}
    //           placeholder={"Metamask"}
    //         >
    //           Metamask
    //         </Button>

    //         <Button
    //           className="w-full mt-5 rounded-2xl"
    //           size="lg"
    //           onClick={() => {
    //             connect({
    //               connector: connectors[1],
    //             });
    //           }}
    //           placeholder={"Coinbase"}
    //         >
    //           Coinbase
    //         </Button>
    //       </>
    //     )}

    //     {/* <ConnectSignBtn name="wallet" /> */}

    //     {/* {isConnected && (
    //       <>
    //         <Button
    //           className="w-full mt-10 rounded-2xl flex items-center justify-center"
    //           size="lg"
    //           onClick={async () => {
    //             const user = await PushAPI.initialize(signer, {
    //               env: CONSTANTS.ENV.PROD,
    //             });
    //             if (user) {
    //               if (!user.readMode) {
    //                 dispatch(setUser(user));
    //                 streamChat(user);
    //                 router.push("/dashboard");
    //               }
    //             }
    //           }}
    //         >
    //           Initiate Push{" "}
    //           <ChatBubbleBottomCenterTextIcon className="h-5 w-5 ml-1" />
    //         </Button>
    //         <Button
    //           className="w-full mt-5 rounded-2xl flex items-center justify-center"
    //           size="lg"
    //           onClick={() => {
    //             if (stream) stream.disconnect();
    //             disconnect();
    //           }}
    //         >
    //           Disconnect{" "}
    //           <ArrowLeftStartOnRectangleIcon className="h-5 w-5 ml-1 -mt-0.5" />
    //         </Button>
    //       </>
    //     )} */}
    //   </div>
    // </div>
    <main className="h-screen flex items-center bg-gradient-linear">
      <section className="flex bg-white/80 shadow-md w-full max-w-3xl mx-auto rounded-lg">
        <section className="w-2/5 border-r border-gray-700 font-grotesque flex flex-col justify-between">
          <DialogHeader placeholder="" className="flex items-center gap-2 p-6">
            <Image src="/logo.svg" alt="Push Logo" width={28} height={28} />

            <p className="text-xl font-medium">Connect</p>
          </DialogHeader>

          <DialogBody placeholder="" className="my-5 px-5 py-2 font-grotesque ">
            <WalletList />
          </DialogBody>

          <DialogFooter
            placeholder=""
            className="justify-start border-t border-gray-700 font-normal text-pink-600 p-4"
          >
            Available Wallets (2)
          </DialogFooter>
        </section>

        <section className="flex w-3/5 flex-col justify-between font-grotesque">
          <DialogHeader placeholder="" className="flex items-center p-6">
            <h3 className="ml-6 w-full text-center text-xl font-bold">
              Sign In
            </h3>

            <IconButton placeholder="" size="sm" variant="text">
              <XMarkIcon className="h-6 w-6" />
            </IconButton>
          </DialogHeader>

          <DialogBody
            placeholder=""
            className="border-white p-4 font-grotesque"
          >
            <SelectedWallet />
          </DialogBody>

          <DialogFooter placeholder="" className="justify-center">
            <p className="w-4/5 text-center text-sm font-normal text-gray-500">
              By connecting, you agree to the{" "}
              <Link
                href="https://push.org/tos"
                target="_blank"
                rel="noreferrer"
                className="underline text-pink-600"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="https://push.org/privacy"
                target="_blank"
                rel="noreferrer"
                className="underline text-pink-600"
              >
                {" "}
                Privacy Policy
              </Link>
            </p>
          </DialogFooter>
        </section>
      </section>
    </main>
  );
}
