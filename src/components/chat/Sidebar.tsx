import { X, PlusCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHistoryItem {
  id: string;
  title: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chatHistory: ChatHistoryItem[];
  selectedChat: string | null;
  onChatSelect: (id: string) => void;
}

const Sidebar = ({
  isOpen,
  onClose,
  chatHistory,
  selectedChat,
  onChatSelect,
}: SidebarProps) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between border-b p-4 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Chat History
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <div className="p-4">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      <nav className="space-y-2 p-4">
        {chatHistory.map((chat) => (
          <Button
            key={chat.id}
            variant={selectedChat === chat.id ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onChatSelect(chat.id)}
          >
            {chat.title}
          </Button>
        ))}
      </nav>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform rounded-full border border-gray-200 bg-white shadow-md md:flex dark:border-gray-700 dark:bg-gray-800"
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
