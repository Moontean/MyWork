"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${containerStyles}`} 
      onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
