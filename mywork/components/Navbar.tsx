import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
 
    <header className="w-full absolute z-10">
     <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
      <Link href="/" className="flex justify-center items-center">
      <Image
          src="/logo.svg"
          alt="Car Hub Logo"
          width={190}
          height={21}
          className="object-contain"
      />
      </Link> 
      

      <CustomButton
      title="Sign In"
      btnType="button"
      containerStyles="text-white bg-gray-800 hover:bg-gray-900 rounded-full  min-w-[130px] font-bold"
/>
     </nav>
    </header>
   
  )
}

export default Navbar