import ChatHeader from "./ChatHeader";
import SendMessageContainer from "./message/SendMessageContainer";

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-l-xl justify-between overflow-hidden border border-gray-300">
      <ChatHeader />

      <SendMessageContainer />
    </div>
  );
};

export default ChatBox;
