import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AsosContext } from '../Context/AsosContext'
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import '../App.css'

const ProductItem = ({image, name, price, id, count}) => {
    
    const {currency} = useContext(AsosContext);

  return (
    <Link to={`/product/${id}`} className='overflow-hidden hover:border-y p-6 text-grey-700 cursor-pointer grid row-span-2 grid-rows-subgrid '>
        <div className='overflow-hidden relative block grid-rows-subgrid aspect-[87/111]'>
            <img className='transition ease-in-out h-[100%] w-[100%] object-contain' src={image} alt="" />
            <div className='absolute bottom-3 right-3 bg-white rounded-full p-1 flex items-center justify-center'>
                <IconContext.Provider value={{ size: '26px'}}>
                    <MdFavoriteBorder style={{position: "absolute"}}/>
                    <MdFavorite className='icon-fav'/>
                </IconContext.Provider>
            </div>
        </div>
            <p className='text-[15px] tracking-[0.6px] leading-[22px] overflow-hidden h-[46px]'>{name}</p>
            <p className='pt-12 text-[17px] text-[#d01345] tracking-[0.8px] leading-[20px] font-bold'>{currency}{price.toFixed(2)} <span className='text-[13px] font-semibold text-[#666]'>({count})</span></p>
    </Link>
  )
}

export default ProductItem
