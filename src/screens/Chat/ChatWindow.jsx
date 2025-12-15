
import React, { useEffect, useRef, useState } from 'react';

const selectedUser = {
  name: 'John Doe',
  status: 'online',
  avatar: 'https://api.dicebear.com/8.x/identicon/svg?seed=John%20Doe',
};

const messagesData = [
  { id: 1, from: 'them', text: 'Hey! How are you?', time: '10:01 AM' },
  { id: 2, from: 'me', text: 
    "I'm good! What about you?", time: '10:02 AM' },
  { id: 3, from: 'them', text: 'Great, thanks!', time: '10:03 AM' },
];

function MessageBubble({ message }) {
  const isMe = message.from === 'me';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMe ? 'flex-end' : 'flex-start',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          background: isMe ? '#4a8ef0' : '#f1f1f1',
          color: isMe ? '#fff' : '#222',
          borderRadius: 12,
          padding: '10px 16px',
          maxWidth: '70%',
          fontSize: 16,
          wordBreak: 'break-word',
          boxShadow: isMe ? '0 2px 8px rgba(74,142,240,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        {message.text}
      </div>
      <span style={{ fontSize: 12, color: '#888', marginTop: 4, marginRight: isMe ? 2 : 0, marginLeft: isMe ? 0 : 2 }}>{message.time}</span>
    </div>
  );
}

export default function ChatWindow() {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, from: 'me', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.10)', // main theme glassmorphism
        borderRight: '1.5px solid rgba(255,255,255,0.18)',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        borderTopLeftRadius: 28,
        borderBottomLeftRadius: 28,
        boxShadow: 'none',
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          padding: 16,
          borderBottom: '1px solid #eee',
          gap: 16,
        }}
      >
        <img
          src={selectedUser.avatar}
          alt={selectedUser.name}
          style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', background: '#eee' }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 17, color: '#222' }}>{selectedUser.name}</div>
          <div style={{ fontSize: 13, color: selectedUser.status === 'online' ? '#4caf50' : '#888' }}>{selectedUser.status === 'online' ? 'Online' : 'Offline'}</div>
        </div>
      </div>
      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 20,
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div
        style={{
          height: 70,
          background: '#fafafa',
          borderTop: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 12,
        }}
      >
        {/* Optional icons can go here */}
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          style={{
            flex: 1,
            border: '1px solid #e0e0e0',
            borderRadius: 10,
            padding: '12px',
            fontSize: 16,
            outline: 'none',
            background: 'rgba(255,255,255,0.10)', // main theme glassmorphism
            color: '#222',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#4a8ef0',
            color: '#fff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(74,142,240,0.10)',
            transition: 'background 0.2s',
          }}
          aria-label="Send"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
