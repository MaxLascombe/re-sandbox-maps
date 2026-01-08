import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'icon';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50';

  const variantStyles = {
    default: 'bg-white text-black hover:bg-gray-200',
    ghost: 'bg-transparent hover:bg-gray-800',
    outline: 'border border-gray-600 bg-transparent hover:bg-gray-800',
  };

  const sizeStyles = {
    default: 'px-4 py-2 rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-md',
    icon: 'h-10 w-10 rounded-full',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
