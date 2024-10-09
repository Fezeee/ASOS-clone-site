import React from 'react'
import { footerList } from '../Data/items'

const Footer = () => {
  return (
    <div>
        <hr className='mb-9'/>
        <div className='w-full bg-[#eee] py-7 px-[4.5rem] flex flex-row items-start justify-between text-[#666]  gap-5'>
            {
                footerList.map((item)=>(
                    <div className='w-[23%]' key={item.id}>
                        <p className='font-semibold my-3 text-sm tracking-[2px]'>{item.title}</p>
                        <ul className='w-full flex flex-col'>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_1}</li>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_2}</li>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_3}</li>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_4}</li>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_5}</li>
                            <li className='mb-1 cursor-pointer hover:text-blue-500'>{item.subList.id_6}</li>
                            
                        </ul>
                    </div>
                ))
            }
            
        </div>
        <div className='w-full h-[40px] bg-[#ddd]'>
            <div className='w-[93%] h-full mx-auto flex items-center justify-between text-[#666] text-sm'>
                <p>&copy; 2024 ASOS</p>
                <div className='flex items-center gap-2'>
                    <p className='pr-2 border-r border-r-gray-400 cursor-pointer hover:text-blue-500'>Privacy & Cookies</p>
                    <p className='pr-2 border-r border-r-gray-400 cursor-pointer hover:text-blue-500'>Ts&Cs</p>
                    <p className='cursor-pointer hover:text-blue-500'>Accessibility</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
