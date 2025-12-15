
import './ChatLayout.css';

function handleBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
}

export default function ChatLayout({ left, right }) {
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
      <header className='chat-header'>
        <button className='chat-back-btn' onClick={handleBack} aria-label='Back'>
          <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='15 18 9 12 15 6'></polyline></svg>
        </button>
        <h1>Chat</h1>
      </header>
      <div className='layout-container' style={{flex: 1, height: 'auto'}}>
        <div className='left-pane'>{left}</div>
        <div className='right-pane'>{right}</div>
      </div>
    </div>
  )
}
