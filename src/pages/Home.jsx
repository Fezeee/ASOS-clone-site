import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full relative'>
        <div className='w-full h-[43px] hidden md:flex bg-[#ccff00]'>
            <div className='w-[93%] h-full mx-auto flex items-center justify-between'>
                <Link to='/women' className='border-[2px] border-black text-[13.5px] tracking-wide px-4 py-1 font-semibold flex items-center justify-center cursor-pointer hover:opacity-40 transition-opacity'>WOMEN</Link>
                <p className='font-semibold text-[15px] tracking-widest'>THE UP-TO-30%-OFF EDIT</p>
                <Link to='/men' className='border-[2px] border-black text-[13.5px] tracking-wide px-4 py-1 font-semibold flex items-center justify-center cursor-pointer hover:opacity-40 transition-opacity'>MEN</Link>
            </div>
        </div>
        <div className='w-full flex relative'>
            <div className='w-full lg:w-[93%] xl:w-[90%] mx-auto flex flex-col items-center relative justify-center'>
                <img className='w-[100%] md:h-auto hidden md:flex bg-no-repeat bg-center' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/sept-2024/16/wk-34-generic-homepage-asset/gbl-hompage_uk_1440x640.jpg" alt="" />
                <img className='w-[100%] h-auto flex md:hidden' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/sept-2024/16/wk-34-generic-homepage-asset/gbl-hompage_uk_870x1110.jpg" alt="" />
                <div className='absolute bottom-[60px] w-[90%] md:w-[50%] mx-auto flex flex-wrap items-center justify-center gap-4'> 
                    <Link to='/women' className='bg-white text-black hover:bg-black hover:text-white transition duration-500 ease-in-out text-[17px] tracking-wider w-[180px] h-[50px] font-semibold flex items-center justify-center cursor-pointer'>SHOP WOMENS</Link>
                    <Link to='/men' className='bg-white text-black text-[17px] hover:bg-black hover:text-white transition duration-500 ease-in-out tracking-wider w-[180px] h-[50px] font-semibold flex items-center justify-center cursor-pointer'>SHOP MENS</Link>
                </div>
            </div>
        </div>
        <div className='w-[93%] xl:w-[90%] mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4'>
            <div className='flex-1'><img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/uk/2024_landing_page_propositions_01_870x555.jpg" alt="" /></div>
            <div className='flex-1'><img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/uk/2024_landing_page_propositions_02_870x555.jpg" alt="" /></div>
            <div className='flex-1'><img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/ca/2024_landing_page_propositions_03_ca_870x555.jpg" alt="" /></div>
            <div className='flex-1'><img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/ca/2024_landing_page_propositions_04_870x555.jpg" alt="" /></div>
        </div>
        <div className='w-[100%] md:w-[93%] mx-auto mt-[52px] flex items-center justify-center'>
            <img className='w-[100%] md:w-[50%] h-auto' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/titles/2024_landing_page_ona_title_392x60.png" alt="" />
        </div>
        <div className='w-[93%] mx-auto mt-[50px] flex flex-wrap items-center justify-center gap-4'>
            <div className='w-[45%] md:w-[23%]'><img className='w-[100%] h-auto' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/brand-cat-trays/ww/2024_landing_page_cat_tray_ww_01_870x1110.jpg" alt="" /></div>
            <div className='w-[45%] md:w-[23%]'><img className='w-[100%] h-auto' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/brand-cat-trays/ww/2024_landing_page_cat_tray_ww_06_870x1110.jpg" alt="" /></div>
            <div className='w-[45%] md:w-[23%]'><img className='w-[100%] h-auto' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/brand-cat-trays/ww/2024_landing_page_cat_tray_ww_03_870x1110.jpg" alt="" /></div>
            <div className='w-[45%] md:w-[23%]'><img className='w-[100%] h-auto' src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/brand-cat-trays/ww/2024_landing_page_cat_tray_ww_04_870x1110.jpg" alt="" /></div>
        </div>
        <div className='w-full flex items-center justify-center text-center mt-[100px] mb-[50px]'>
            <Link to='/men' className='border-2 border-black text-black text-[17px] hover:bg-black hover:text-white transition duration-500 ease-in-out tracking-wider w-[250px] h-[65px] font-bold flex items-center justify-center cursor-pointer'>SHOP MEN'S <br/>BRANDS</Link>
        </div>
    </div>
  )
}

export default Home