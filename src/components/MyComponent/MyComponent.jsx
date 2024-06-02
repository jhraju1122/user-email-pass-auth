import React from 'react';

function MyComponent() {
  return (
    <div>
      <svg className="my-svg">
        <path
          d="M10 10 H 90 V 90 H 10 L 10 10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <div tabIndex="0">Focusable element</div>
    </div>
  );
}

export default MyComponent;
