// Central API configuration and endpoint management
import axios from "axios";

// Base URL for your backend API
export const API_BASE_URL = "http://localhost:9000";

// All endpoints in one place
export const API_ENDPOINTS = {
  books: "/books",
  // Add more endpoints as needed
  // movies: "/movies",
  // music: "/music",
  // quotes: "/quotes",
};

// Generic API helper (can be extended for auth, headers, etc.)
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Add more headers if needed
  },
});

// Example: Fetch books
export function fetchBooks() {
  return apiClient.get(API_ENDPOINTS.books);
}

// Add more API functions as needed, e.g. fetchMovies, fetchMusic, etc.
