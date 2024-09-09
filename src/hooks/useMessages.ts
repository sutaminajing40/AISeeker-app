import { useState } from "react";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
}

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const displayMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const clearInput = () => {
    setInputMessage("");
  };

  return {
    messages,
    inputMessage,
    setInputMessage,
    displayMessage,
    clearInput,
  };
};
