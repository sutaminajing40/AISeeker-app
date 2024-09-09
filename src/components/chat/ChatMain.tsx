import { useMessages } from "../../hooks/useMessages";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import MessageBubble, { Message } from "./MessageBubble";
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
  const {
    messages,
    inputMessage,
    setInputMessage,
    displayMessage,
    clearInput,
  } = useMessages();

  const addMessage = (content: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
    };
    displayMessage(newMessage);
    if (sender === "user") {
      clearInput();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addMessage(inputMessage, "user");

    const response = await postChat(inputMessage);

    const data = await response.json();
    addMessage(data, "bot");
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
