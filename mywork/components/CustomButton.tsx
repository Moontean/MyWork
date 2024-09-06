"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`bg-black text-white py-2 px-4 rounded flex items-center justify-center ${containerStyles}`} 
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>
      {title}
    </span>
    {rightIcon && (
      <div className="relative w-6 h-6 ml-2 flex items-center">
        <Image
          src={rightIcon}
          alt="arrow_right"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  

  );
};

export default CustomButton;
