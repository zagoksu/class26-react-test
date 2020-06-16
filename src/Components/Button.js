import React from 'react';

export default function Button({ handleEvent }) {
  return (
      <button onClick={handleEvent}>
        Get Users!
      </button>
  );
}

