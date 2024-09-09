import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import MessageBubble, { Message } from "./MessageBubble";

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newUserMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputMessage("");

      try {
        const response = await fetch("/api/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputMessage }),
        });

        if (!response.ok) {
          throw new Error("APIリクエストに失敗しました");
        }

        const data = await response.json();
        const newAIMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, newAIMessage]);
      } catch (error) {
        console.error("Error:", error);
        // エラーハンドリングをここに追加できます（例：エラーメッセージの表示）
      }
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
