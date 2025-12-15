

import React, { useState } from 'react';

const users = [
  { id: 1, name: 'John Doe', status: 'online', unread: 2 },
  { id: 2, name: 'Sarah Kim', status: 'offline', unread: 0 },
  { id: 3, name: 'Alex Turner', status: 'online', unread: 5 },
  { id: 4, name: 'Maria Lopez', status: 'away', unread: 1 },
  { id: 5, name: 'Chris Evans', status: 'busy', unread: 0 },
];

const statusColors = {
  online: '#4caf50',
  offline: '#bdbdbd',
  busy: '#f44336',
  away: '#ffb300',
};

function UserListItem({ user, selected, onClick }) {
  return (
    <div
      className={`user-list-item${selected ? ' selected' : ''}`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 8,
        cursor: 'pointer',
        background: selected ? '#f0f0f0' : 'transparent',
        transition: 'background 0.2s',
        position: 'relative',
        minHeight: 60,
      }}
      tabIndex={0}
    >
      <div style={{ position: 'relative', width: 40, height: 40 }}>
        <img
          src={`https://api.dicebear.com/8.x/identicon/svg?seed=${encodeURIComponent(user.name)}`}
          alt={user.name}
          style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', background: '#eee' }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: statusColors[user.status] || '#bdbdbd',
            border: '2px solid #fff',
            boxShadow: '0 0 0 1px #ddd',
          }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 16, color: '#222', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
        <div style={{ fontSize: 13, color: '#888', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ textTransform: 'capitalize' }}>{user.status}</span>
        </div>
      </div>
      {user.unread > 0 && (
        <span style={{
          background: '#ff5252',
          color: '#fff',
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 700,
          padding: '2px 8px',
          marginLeft: 8,
          minWidth: 22,
          textAlign: 'center',
        }}>{user.unread}</span>
      )}
    </div>
  );
}

export default function UserWindow() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'rgba(255,255,255,0.10)',
        borderLeft: '1.5px solid rgba(255,255,255,0.18)',
        padding: 16,
        boxSizing: 'border-box',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        boxShadow: 'none',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, letterSpacing: 0.5 }}>Users</div>
      <div style={{ height: 1, background: '#e0e0e0', marginBottom: 12 }} />
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: '8px 12px',
          borderRadius: 8,
          border: '1px solid #e0e0e0',
          marginBottom: 14,
          fontSize: 15,
          outline: 'none',
          background: 'rgba(255,255,255,0.10)', // main theme glassmorphism
          color: '#222',
        }}
      />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {filtered.map(user => (
          <UserListItem
            key={user.id}
            user={user}
            selected={selected === user.id}
            onClick={() => setSelected(user.id)}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{ color: '#aaa', textAlign: 'center', marginTop: 32 }}>No users found</div>
        )}
      </div>
    </div>
  );
}
