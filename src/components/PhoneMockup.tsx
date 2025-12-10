import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  notchClassName?: string;
  screenClassName?: string;
  size?: 'small' | 'medium'; // Added size prop for flexibility
}

const PhoneMockup = ({ children, className, notchClassName, screenClassName, size = 'medium' }: PhoneMockupProps) => {
  const mockupClasses = cn(
    "relative bg-white rounded-[3rem] shadow-xl flex items-center justify-center",
    size === 'medium' ? "w-64 h-[400px] p-2" : "w-full h-[300px] p-1.5",
    className
  );

  const notchClasses = cn(
    "absolute bg-gray-800 rounded-b-xl",
    size === 'medium' ? "top-2 left-1/2 -translate-x-1/2 w-24 h-6" : "top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-b-lg",
    notchClassName
  );

  const screenClasses = cn(
    "w-full h-full bg-gray-100 overflow-hidden flex flex-col",
    size === 'medium' ? "rounded-[2.5rem]" : "rounded-[1.75rem]",
    screenClassName
  );

  return (
    <div className={mockupClasses}>
      <div className={notchClasses}></div> {/* Notch */}
      <div className={screenClasses}>
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;