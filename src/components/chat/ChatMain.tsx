import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";

interface ChatMainProps {
  chatTitle: string;
  selectedChat: string | null;
  onOpenSidebar: () => void;
}

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
}

const ChatMain = ({
  chatTitle,
  selectedChat,
  onOpenSidebar,
}: ChatMainProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
      // ここでAIの応答を処理します
    }
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
            <div
              className={`inline-block rounded p-2 ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              {message.content}
            </div>
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
