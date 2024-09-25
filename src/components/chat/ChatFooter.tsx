import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  PLACEHOLDER_WITH_PDFS,
  PLACEHOLDER_WITHOUT_PDFS,
  SEND_BUTTON_TEXT,
} from "@/services/utils/constants";

interface ChatFooterProps {
  message: string;
  hasPDFs: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setMessage: (message: string) => void;
}

const ChatFooter = ({
  message,
  hasPDFs,
  handleSubmit,
  setMessage,
}: ChatFooterProps) => {
  const placeholderText = hasPDFs
    ? PLACEHOLDER_WITH_PDFS
    : PLACEHOLDER_WITHOUT_PDFS;

  return (
    <footer className="border-t p-4 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          placeholder={placeholderText}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow text-black"
          disabled={!hasPDFs}
        />
        <Button
          type="submit"
          className="bg-gray-700 text-white"
          disabled={!hasPDFs}
        >
          <Send className="mr-2 h-4 w-4" />
          {SEND_BUTTON_TEXT}
        </Button>
      </form>
    </footer>
  );
};

export default ChatFooter;
