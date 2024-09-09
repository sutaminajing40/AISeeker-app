"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatMain from "./ChatMain";

interface ChatHistoryItem {
  id: string;
  title: string;
}

const ChatLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatHistory: ChatHistoryItem[] = [{ id: "1", title: "Chat 1" }];
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleChatSelect = (id: string) => {
    setSelectedChat(id);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const selectedChatTitle = selectedChat
    ? chatHistory.find((chat) => chat.id === selectedChat)?.title || ""
    : "";

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        chatHistory={chatHistory}
        selectedChat={selectedChat}
        onChatSelect={handleChatSelect}
      />
      <ChatMain
        onOpenSidebar={toggleSidebar}
        selectedChat={selectedChat}
        chatTitle={selectedChatTitle}
      />
    </div>
  );
};

export default ChatLayout;
