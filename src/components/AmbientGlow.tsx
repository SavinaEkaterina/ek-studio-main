import React, { useEffect, useState } from 'react';

export const AmbientGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if pointer device supports hover
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 hidden sm:block"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 90, 50, 0.05), transparent 80%)`,
      }}
    />
  );
};
