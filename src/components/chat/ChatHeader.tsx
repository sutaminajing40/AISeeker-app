import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Upload } from "lucide-react";
import { useFileUpload } from "@/hooks/useFileUpload";

interface ChatHeaderProps {
  onOpenSidebar: () => void;
  selectedChat: string | null;
  chatTitle: string;
}

const ChatHeader = ({
  onOpenSidebar,
  selectedChat,
  chatTitle,
}: ChatHeaderProps) => {
  const { fileInputRef, handleFileUpload, triggerFileUpload } = useFileUpload();

  return (
    <header className="flex items-center justify-between border-b p-4 dark:border-gray-700">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSidebar}
          className="mr-2 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">サイドバーを開く</span>
        </Button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {selectedChat ? chatTitle : "チャットを選択してください"}
        </h1>
      </div>
      <div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Button variant="outline" size="sm" onClick={triggerFileUpload}>
          <Upload className="mr-2 h-4 w-4" />
          PDFをアップロード
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
