type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const MessageBubble = ({ message }: { message: Message }) => {
  return (
    <div
      className={`rounded-lg p-2 ${
        message.sender === "user" ? "ml-auto bg-blue-100" : "bg-gray-100"
      } max-w-[80%]`}
    >
      {message.text}
    </div>
  );
};

export default MessageBubble;
