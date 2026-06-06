import React, { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'grid' | 'dots';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  variant = 'gradient',
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        {variant === 'gradient' && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-glow" />
          </>
        )}

        {variant === 'grid' && (
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(0deg, transparent 24%, rgba(124,58,237,.1) 25%, rgba(124,58,237,.1) 26%, transparent 27%, transparent 74%, rgba(124,58,237,.1) 75%, rgba(124,58,237,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(124,58,237,.1) 25%, rgba(124,58,237,.1) 26%, transparent 27%, transparent 74%, rgba(124,58,237,.1) 75%, rgba(124,58,237,.1) 76%, transparent 77%, transparent)',
              backgroundSize: '100px 100px',
              animation: 'slide 20s linear infinite',
            }}
          />
        )}

        {variant === 'dots' && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
