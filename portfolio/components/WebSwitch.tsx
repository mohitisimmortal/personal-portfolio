'use client';
import React, { useState } from 'react';

const WebSwitch = ({ onToggle }: { onToggle: any }) => {
  const [isWeb3, setIsWeb3] = useState(false);

  const handleToggle = () => {
    setIsWeb3(!isWeb3);
    onToggle(!isWeb3);  // This will notify the parent component
  };

  return (
    <>
    <div
      onClick={handleToggle}
      className={` mt-3 md:mt-4 relative inline-flex h-6 w-12 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none rounded-full bg-pr ${isWeb3 ? 'bg-gray-800' : 'bg-gray-300'}`}
    >
      <span
        className={`absolute left-0 inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ease-in-out duration-200 ${isWeb3 ? 'translate-x-6' : 'translate-x-0'}`}
        >
      </span>
    </div>
    <span className='text-white'>
    {isWeb3 ? 'Web3' : 'Web2'}
    </span>
          </>
  );
};

export default WebSwitch;
