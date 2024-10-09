import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AsosContext } from '../Context/AsosContext'
import { headings } from '../Data/items'
import ProductCardHome from '../Utilities/ProductCardHome'

const Men = () => {

    const {allProducts} = useContext(AsosContext);
    const homeProducts = allProducts.slice(0,4);
    const [productInclude, setProductInclude] = useState([]);
    


    useEffect(()=>{

      if(homeProducts.length > 0){

        const combinedProducts = homeProducts.map((product, index)=>(
          {...product, ...headings[index]}
        ));

        setProductInclude(combinedProducts);

        // const user_T = [];

        // for(let i=0; i < Math.min(homeProducts.length, headings.length) ; i++){
      
        //   const user= {...homeProducts[i], ...headings[i]};
          
        //   user_T.push(user);
        // }
        // setProductInclude(user_T);
      }

      
    },[]);


  return (
    <div>
      <div className='w-full h-[43px] hidden lg:flex bg-[#525050]'>
            <div className='w-[91%] h-full mx-auto flex items-center text-[16px] justify-start text-white'>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>New in</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Clothing</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Trending</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Shoes</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Accessories</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Brands</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Sportwears</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Topman</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Marketplace</Link>
              <Link to='/collection' className='h-full px-[0.55rem] py-1 font-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#525050]'>Sale</Link>
            </div>
        </div>
        <div className='w-full py-5 bg-gradient-to-r from-[#CCFF00] to-[#FF385C] px-5'>
            <div className='h-full mx-auto flex text-center text-wrap flex-col items-center justify-center gap-2 md:gap-4'>
              <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2023/feb/2023-spinner/web_spinner_gbl_215x40.gif" alt="" />
              <p className='text-[20px] xs:text-[22px] md:text-[26px] tracking-[1px] font-extrabold italic leading-[26px]'>UP TO</p>
              <p className='text-[40px] xs:text-[42px] md:text-[48px] tracking-[1px] font-extrabold italic leading-[48px]'>30% OFF SELECTED STYLES!</p>
              <p className='text-[22px] xs:text-[24px] md:text-[28px] tracking-[1.2px] font-bold leading-[26px] xs:leading-[36px]'>Mystery discount revealed @ checkout</p>
              <p className='text-[18px] xs:text-[20px] md:text-[24px] tracking-[1.2px] font-bold xs:leading-[30px] mb-3'>Use code: <span className='bg-black text-white py-[0.1em] px-[0.37em]'>RANDOM</span></p> 
              <p className='text-[9px] xs:text-[10px] md:text-[12px] tracking-[0.8px] font-normal leading-[16px] xs:leading-[16px]'>See website banner for Ts&Cs. Selected marked products excluded from promo.</p>
          </div>
        </div>
        <div className='w-[91%] mx-auto my-6'>
          <iframe className='w-full h-auto aspect-[20.5/9]' allowFullScreen src="https://www.asos-video.com/video/upload/f_auto,q_auto:best/MW_HOMEPAGE_2880x1260_efual5.mp4" frameBorder="0"></iframe>
        </div>
        <div className='w-[88%] md:w-[94%] lg:w-[91%] flex-wrap md:flex-nowrap my-[50px] mx-auto flex items-center justify-between gap-[3%] xl:gap-[4%] gap-y-6 text-center'>
          {productInclude.map((product, index)=>(
            <ProductCardHome key={index} items={product} />
            
          ))}
        </div>
    </div>
  )
}

export default Men
