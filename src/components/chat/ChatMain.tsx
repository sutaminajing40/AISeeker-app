import { useState } from "react";
import { Menu, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMainProps {
  onOpenSidebar: () => void;
  selectedChat: string | null;
  chatTitle: string;
}

export default function ChatMain({
  onOpenSidebar,
  selectedChat,
  chatTitle,
}: ChatMainProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b p-4 dark:border-gray-700">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSidebar}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open sidebar</span>
        </Button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {selectedChat ? chatTitle : "Select a chat"}
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages would be rendered here */}
      </div>

      <footer className="border-t p-4 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>
        </form>
      </footer>
    </main>
  );
}
