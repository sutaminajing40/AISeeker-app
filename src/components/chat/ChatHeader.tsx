import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { FileUpload } from "@/components/chat/FileUpload";

interface ChatHeaderProps {
  onOpenSidebar: () => void;
  selectedChat: string | null;
  chatTitle: string;
  setFileUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader = ({
  onOpenSidebar,
  selectedChat,
  chatTitle,
  setFileUploaded,
}: ChatHeaderProps) => {
  return (
    <header className="flex flex-col border-b p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
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
        <FileUpload setFileUploaded={setFileUploaded} />
      </div>
    </header>
  );
};

export default ChatHeader;
