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

export default function ChatHistory({
  history,
  onSelectChat,
}: ChatHistoryProps) {
  return (
    <div className="overflow-y-auto h-[calc(100vh-120px)]">
      {history.map((item) => (
        <Button
          key={item.id}
          variant={item.isActive ? "secondary" : "ghost"}
          className="w-full justify-start text-left mb-1"
          onClick={() => onSelectChat(item.id)}
        >
          <div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {item.lastMessage}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
