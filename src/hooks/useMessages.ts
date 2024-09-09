import { useState } from "react";
import { Message } from "../components/chat/MessageBubble";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const displayMessage = (content: string, sender: "user" | "ai") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (sender === "user") {
      clearInput();
    }
  };

  const clearInput = () => {
    setInputMessage("");
  };

  return {
    messages,
    inputMessage,
    displayMessage,
    setInputMessage,
  };
};
