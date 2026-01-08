import React from 'react';

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HoverButton: React.FC<HoverButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
