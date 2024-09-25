import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { FileUpload } from "@/components/chat/FileUpload";

interface ChatHeaderProps {
  selectedChat: string | null;
  chatTitle: string;
  onOpenSidebar: () => void;
  setFileUploaded: (uploaded: boolean) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  selectedChat,
  chatTitle,
  onOpenSidebar,
  setFileUploaded,
}) => {
  return (
    <header
      className="flex flex-col border-b p-4 dark:border-gray-700"
      aria-label="チャットヘッダー"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenSidebar}
            className="mr-2 md:hidden"
            aria-label="サイドバーを開く"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {selectedChat ? chatTitle : "チャットを選択してください"}
          </h1>
        </div>
        <FileUpload setFileUploaded={setFileUploaded} />
      </div>
    </header>
  );
};

export default ChatHeader;
