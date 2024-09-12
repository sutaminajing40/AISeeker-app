import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ToastNotification } from "@/components/ui/Toast";
import { UploadButton } from "@/components/chat/FileUploadButton";

interface ChatHeaderProps {
  onOpenSidebar: () => void;
  selectedChat: string | null;
  chatTitle: string;
}

export function ChatHeader({
  onOpenSidebar,
  selectedChat,
  chatTitle,
}: ChatHeaderProps) {
  const {
    isLoading,
    uploadStatus,
    fileName,
    isToastVisible,
    isToastLeaving,
    fileInputRef,
    handleFileUpload,
    triggerFileUpload,
  } = useFileUpload();

  return (
    <>
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
          <div>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <UploadButton isLoading={isLoading} onClick={triggerFileUpload} />
          </div>
        </div>
      </header>

      {isToastVisible && (
        <ToastNotification
          uploadStatus={uploadStatus}
          fileName={fileName}
          isLeaving={isToastLeaving}
        />
      )}
    </>
  );
}
export default ChatHeader;
