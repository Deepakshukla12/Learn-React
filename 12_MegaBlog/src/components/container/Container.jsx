import React from 'react';

// Simple container component with max width and padding
function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  );
}

export default Container;
