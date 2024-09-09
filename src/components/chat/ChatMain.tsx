import { useMessages } from "../../hooks/useMessages";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import MessageBubble from "./MessageBubble";
import { postChat } from "../../fetches/chat/postChat";

interface ChatMainProps {
  chatTitle: string;
  selectedChat: string | null;
  onOpenSidebar: () => void;
}

const ChatMain = ({
  chatTitle,
  selectedChat,
  onOpenSidebar,
}: ChatMainProps) => {
  const { messages, inputMessage, displayMessage, setInputMessage } =
    useMessages();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ユーザーのメッセージをUIに表示
    displayMessage(inputMessage, "user");

    const response = await postChat(inputMessage);
    displayMessage(response, "ai");
  };

  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <ChatHeader
        onOpenSidebar={onOpenSidebar}
        selectedChat={selectedChat}
        chatTitle={chatTitle}
      />

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}
          >
            <MessageBubble message={message} />
          </div>
        ))}
      </div>

      <ChatFooter
        message={inputMessage}
        setMessage={setInputMessage}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default ChatMain;
