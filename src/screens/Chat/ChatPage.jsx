
import ChatLayout from './ChatLayout';
import ChatWindow from './ChatWindow';
import UserWindow from './UserWindow';

export default function ChatPage() {
  return (
    <ChatLayout left={<ChatWindow />} right={<UserWindow />} />
  );
}
