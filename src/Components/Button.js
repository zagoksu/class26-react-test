import React from 'react';

export default function Button({ handleEvent }) {
  return (
    <div>
      <button onClick={handleEvent}>
        Get Users!
      </button>
    </div>
  );
}

