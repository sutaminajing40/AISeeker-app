import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatFooterProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatFooter = ({ handleSubmit, message, setMessage }: ChatFooterProps) => {
  return (
    <footer className="border-t p-4 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-100 flex-1 text-black"
        />
        <Button type="submit" className="flex-9 bg-gray-700 text-white">
          <Send className="mr-2 h-4 w-4" />
          Send
        </Button>
      </form>
    </footer>
  );
};

export default ChatFooter;
