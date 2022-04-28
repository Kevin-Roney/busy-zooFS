import React from 'react';

export default function Animal({ animal }) {
  return (
    <>
      {animal === 'rat' && <span>🐀</span>}
      {animal === 'raccoon' && <span>🦝</span>}
      {animal === 'skunk' && <span>🦨</span>}
      {animal === 'bat' && <span>🦇</span>}
    </>
  );
}

