'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [noPosition, setNoPosition] = useState({ top: '0%', left: '60%' });
  const [showPoem, setShowPoem] = useState(false);

  const moveNoButton = () => {
    const newX = Math.random() * 150 + '%';
    const newY = Math.random() * 150 + '%';
    setNoPosition({ top: newY, left: newX });
  };
  return (
    <div className='flex items-center justify-center h-screen bg-pink-100 text-gray-800 flex-col'>
      {!showPoem ? (
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-6'>
            Pratikshya, will you be my please girlfriend? 🥺
          </h1>
          <div className='relative flex justify-center gap-6'>
            <button
              className='bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-lg transition w-32 transform -translate-x-full'
              onClick={() => setShowPoem(true)}
            >
              Yes 💕
            </button>
            <motion.button
              className='bg-red-400 text-white font-bold py-2 px-6 rounded-lg text-lg absolute w-32 transition-all duration-500'
              style={{ top: noPosition.top, left: noPosition.left }}
              onMouseEnter={moveNoButton}
            >
              No ❌
            </motion.button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold mb-4'>Could I be any more lucky?! 🥰</h1>
          <img
            src='/profile.jpeg'
            alt='Us together'
            className='rounded-lg shadow-lg mb-4 transform -rotate-90 object-contain mx-auto w-96'
          />
          <p className='text-lg italic max-w-md mx-auto text-center'>
            Roses are red, violets are blue, <br />
            From this moment on, it&apos;s just me and you. 💞
          </p>
        </div>
      )}
    </div>
  );
}
