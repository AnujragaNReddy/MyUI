
import React from 'react';
import '../../App.css';

function Dashboard({ onLogout }) {
	return (
		<div className="app-container">
			<div className="glass-card">
				<h1>Dashboard</h1>
				<p>Welcome to your dashboard! This page uses the same glassmorphism theme.</p>
				<button onClick={onLogout}>Logout</button>
			</div>
		</div>
	);
}

export default Dashboard;
