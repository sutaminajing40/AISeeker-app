import { useMessages } from "../../hooks/useMessages";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import MessageBubble from "./MessageBubble";
import { getAiResponse } from "../../fetches/chat/getAiResponse";
import { fetchRegisteredPDFs } from "../../fetches/pdf/GetPdf";
import { useEffect, useState } from "react";

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
  const { messages, inputMessage, addMessage, setInputMessage } = useMessages();
  const [hasPDFs, setHasPDFs] = useState<boolean>(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  useEffect(() => {
    fetchRegisteredPDFs()
      .then((pdfs) => {
        setHasPDFs(pdfs.length > 0);
      })
      .catch((error) => {
        console.error("PDFの取得に失敗しました:", error);
        setHasPDFs(false);
      });
  }, [fileUploaded]);

  // displayMessageを呼び出すので、ChatFooterではなくChatMainで定義する
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ユーザーのメッセージをUIに表示
    addMessage(inputMessage, "user");

    const result = await getAiResponse(inputMessage);
    const response = result.message;
    addMessage(response, "ai");
  };

  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <ChatHeader
        onOpenSidebar={onOpenSidebar}
        selectedChat={selectedChat}
        chatTitle={chatTitle}
        setFileUploaded={setFileUploaded}
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
        hasPDFs={hasPDFs}
      />
    </main>
  );
};

export default ChatMain;
