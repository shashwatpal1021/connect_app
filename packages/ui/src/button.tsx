"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: '';
  className?: string;
  appName: string;
  onClick: () => {};
}

export const Button = ({ children, className, appName, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
