import React from 'react';

/**
 * Logout Component
 * 
 * This component renders the logout UI.
 */
const LogoutComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-brand-100 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-brand-600 animate-spin" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Logging out...</h1>
          <p className="text-gray-600 text-center">
            Please wait while we securely log you out of your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;
