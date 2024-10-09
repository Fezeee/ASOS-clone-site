import React from 'react'

const ProductCardHome = ({items}) => {
  
  return (
    <div className='w-[43%] shadow-lg md:w-auto flex flex-col items-center justify-center leading-[24px] tracking-[0.2px] lg:tracking-[0.8px] py-[3%]'>
        <img className='flex flex-1 h-[350px] items-center justify-center p-[11%]' src={items.image} alt="" />
        <h2 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold py-[3px] mt-[16px]'>{items.subTitle}</h2>
        <p className='pt-[8px] text-[15px] xl:text-[18px] font-small'>{items.subText}</p>
    </div>
  )
}

export default ProductCardHome
