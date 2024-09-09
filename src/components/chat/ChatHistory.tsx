import { Button } from "@/components/ui/button";

interface ChatHistoryItem {
  id: string;
  title: string;
  lastMessage: string;
  isActive: boolean;
}

interface ChatHistoryProps {
  history: ChatHistoryItem[];
  onSelectChat: (id: string) => void;
}

const ChatHistory = ({ history, onSelectChat }: ChatHistoryProps) => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      {history.map((item) => (
        <Button
          key={item.id}
          variant={item.isActive ? "secondary" : "ghost"}
          className="mb-1 w-full justify-start text-left"
          onClick={() => onSelectChat(item.id)}
        >
          <div>
            <div className="font-semibold">{item.title}</div>
            <div className="truncate text-sm text-gray-500 dark:text-gray-400">
              {item.lastMessage}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ChatHistory;
