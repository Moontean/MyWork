"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleCcroll = () => {}
  return (
    <div className="hero"> 
     <div className="flex-1 pt-36 padding-x"> 
       <h1 className="hero__title"> 
       Buy and sell cars
       </h1>
       <p className='hero__subtitle'>
        For you and your family
       </p>

       <CustomButton 
       title ="Explore product"
       containerStyles="br-primary-bluetext-white rounded-full mt-10"
       handleClick={handleCcroll}
       />
     </div>
    </div>
  )
}

export default Hero