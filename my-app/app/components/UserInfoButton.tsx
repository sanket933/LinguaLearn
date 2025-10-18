"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UserInfoButton() {
  const [open, setOpen] = useState(false);
  const { loggedIn, email, logout } = useAuth();

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="User Info"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-xs">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">User Info</h2>
            {loggedIn ? (
              <>
                <p className="mb-2 text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">Email:</span> {email}
                </p>
                <button
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-colors mt-4"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <p className="mb-4 text-gray-700 dark:text-gray-200">You are not logged in.</p>
            )}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors mt-2"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
