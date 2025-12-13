

import React, { useState } from 'react';
import './Authentications.css';

const APP_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'; // Replace with your logo if needed

const AuthCard = ({ onAuthSuccess }) => {
	const [isSignup, setIsSignup] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		if (isSignup && form.password !== form.confirmPassword) {
			setError('Passwords do not match');
			return;
		}
		// Simulate authentication
		if (onAuthSuccess) onAuthSuccess();
	};

	// Info content for both views
	const infoContent = (
		<div className="auth-info">
			<img src={APP_LOGO} alt="App Logo" className="auth-logo" />
			<h3>Welcome to My React App</h3>
			<p>
				{isSignup
					? 'Create your account to unlock all features and join our awesome community!'
					: 'Sign in to access your dashboard, chat, and more. Experience the modern glassmorphism UI!'}
			</p>
		</div>
	);

	// Auth form card
	const formCard = (
		<div className="auth-card">
			<h2>{isSignup ? 'Create Account' : 'Sign In'}</h2>
			<form onSubmit={handleSubmit}>
				{isSignup && (
					<div className="input-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
					</div>
				)}
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
				</div>
				{isSignup && (
					<div className="input-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
					</div>
				)}
				{error && <div className="error-msg">{error}</div>}
				<button className="auth-btn" type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
			</form>
			<div className="toggle-link">
				{isSignup ? 'Already have an account?' : "Don't have an account?"}
				<span onClick={() => setIsSignup(!isSignup)}>
					{isSignup ? ' Sign In' : ' Sign Up'}
				</span>
			</div>
		</div>
	);

	return (
		<div className="auth-bg">
			<div className={`auth-split-container ${isSignup ? 'signup' : 'signin'}`}> 
				{/* For Signin: info left, card right. For Signup: card left, info right */}
				{isSignup ? (
					<>
						{formCard}
						{infoContent}
					</>
				) : (
					<>
						{infoContent}
						{formCard}
					</>
				)}
			</div>
		</div>
	);
};

export default AuthCard;
