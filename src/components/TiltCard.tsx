import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
  onClick?: () => void;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  id
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
