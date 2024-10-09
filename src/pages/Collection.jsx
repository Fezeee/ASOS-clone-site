import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxStarFilled } from "react-icons/rx";
import { AsosContext } from '../Context/AsosContext';
import ProductItem from '../Utilities/ProductItem';

const Collection = () => {

  const [hideSubfilter1, setHideSubfilter1] = useState(false);
  const [hideSubfilter2, setHideSubfilter2] = useState(false);
  const [hideSubfilter3, setHideSubfilter3] = useState(false);
  const sortRef1 = useRef(null);
  const sortRef2 = useRef(null);
  const sortRef3 = useRef(null);
  const {allProducts, search, setSearch} = useContext(AsosContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortFilter, setSortFilter] = useState('Recommended');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [seeRemoveFilter, setSeeRemoveFilter] = useState(false);


  

  const filter = () => {
    
    let products = [...allProducts];

    if(search || category || max){
      setSeeRemoveFilter(true);
    }
    else{
      setSeeRemoveFilter(false);
    }

    if(search){
      products = products.filter(
        item => item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase()) || 
        item.category.toLowerCase().includes(search.toLowerCase())
      )}
    if(category){
      products = products.filter(
        item => item.category.toLowerCase() === category.toLowerCase()
      )}
    if(max){
      products = products.filter(
        item => item.rating.rate >= min && item.rating.rate < max
      )}

    sortProducts(products);
  }

  const sortProducts = (products) =>{
    
    let sortedProducts = [...products];

    switch (sortFilter) {
      case 'Price Low to High':
        sortedProducts.sort((a,b)=>(a.price - b.price));
        break;
      case 'Price High to Low':
        sortedProducts.sort((a,b)=>(b.price - a.price));
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  };

  const resetFilters = () => {
    setFilterProducts(allProducts);
    setSearch('');
    setCategory('');
    setMin('');
    setMax('');
  };

    useEffect(()=>{
        filter();
    },[allProducts, search, category, sortFilter, max])

  const handleMouseDown = (event) =>{
      if(sortRef1.current && !sortRef1.current.contains(event.target)){
        setHideSubfilter1(false);
      }
      if(sortRef2.current && !sortRef2.current.contains(event.target)){
        setHideSubfilter2(false);
      }
      if(sortRef3.current && !sortRef3.current.contains(event.target)){
        setHideSubfilter3(false);
      }
  }

    useEffect(()=>{
      document.addEventListener('mousedown', handleMouseDown );
      return ()=>{
      document.removeEventListener('mousedown', handleMouseDown);
      }
    },[])

  return (
      <div className='w-full relative'>
        <div className='w-full h-[43px] hidden md:flex bg-[#9cf0e0]'>
            <div className='w-[93%] h-full mx-auto flex items-center justify-between'>
                <Link to='/women' className='border-[2px] border-black text-[13.5px] tracking-wide px-4 py-1 font-semibold flex items-center justify-center cursor-pointer hover:opacity-40 transition-opacity'>WOMEN</Link>
                <p className='font-semibold text-[15px] tracking-widest'>THE UP-TO-30%-OFF EDIT</p>
                <Link to='/men' className='border-[2px] border-black text-[13.5px] tracking-wide px-4 py-1 font-semibold flex items-center justify-center cursor-pointer hover:opacity-40 transition-opacity'>MEN</Link>
            </div>
        </div>
        <hr className='w-full my-9'/>
        <hr/>
        <div className='w-full relative bg-[#eee] mb-16'>
          <div className='w-[90%] mx-auto flex items-center justify-center gap-10 py-5 text-[#666] text-[16.5px] tracking-[0.3px] leading-[1.12]'>
            <p className='absolute top-[104px] text-[16px]'>{filterProducts.length} styles found</p>
            {seeRemoveFilter && <p onClick={resetFilters} className='absolute top-[104px] right-[19%] text-[13px] md:text-[15.5px] text-[#a6a6a6] hover:text-[#666] underline cursor-pointer'>remove All Filters</p>}
            <div onClick={()=>setHideSubfilter1(!hideSubfilter1)} className= {`relative h-[32px] md:h-[42px] flex gap-10 md:gap-24 items-center justify-between border-y ${hideSubfilter1 ? 'border-y-blue-500 text-blue-500' : 'border-y-gray-300'} active:border active:border-blue-500 px-[6px] py-[3px] cursor-pointer hover:text-blue-500`}>
                <p className='text-[15px] md:text-[17px]'>Sort</p>
                <div className='flex justify-center items-center'><RiArrowDropDownLine/></div>
                {hideSubfilter1 && <div ref={sortRef1} className='absolute top-[40px] left-0 w-[356px] py-[10px] p-[10px] bg-[#eee] shadow-ox z-50'>
                  <p onClick={()=>{setSortFilter('Recommended'); setHideSubfilter1(false);}} className={`${sortFilter === 'Recommended' ? 'bg-blue-500 text-[#fff] font-bold' : 'bg-[#fff] text-[#666]'} mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>Recommended</p>
                  <p onClick={()=>{setSortFilter('Price Low to High'); setHideSubfilter1(false);}} className={`${sortFilter === 'Price Low to High' ? 'bg-blue-500 text-[#fff] font-bold' : 'bg-[#fff] text-[#666]'} mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>Price Low to High</p>
                  <p onClick={()=>{setSortFilter('Price High to Low'); setHideSubfilter1(false);}} className={`${sortFilter === 'Price High to Low' ? 'bg-blue-500 text-[#fff] font-bold' : 'bg-[#fff] text-[#666]'} rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>Price High to Low</p>
                </div>
                }
            </div>
            <div onClick={()=>setHideSubfilter2(!hideSubfilter2)} className={`relative h-[32px] md:h-[42px] flex gap-10 md:gap-24 items-center justify-between border-y ${hideSubfilter2 ? 'border-blue-500 text-blue-500' : 'border-y-gray-300'} active:border active:border-blue-500 px-[6px] py-[3px] cursor-pointer hover:text-blue-500`}>
                <p className='text-[15px] md:text-[17px]'>Category</p>
                <div className='flex justify-center items-center'><RiArrowDropDownLine/></div>
                  {hideSubfilter2 && 
                  <div ref={sortRef2} className='absolute top-[40px] left-0 w-[356px] p-[10px] bg-[#eee] shadow-ox z-50'>
                    {["Men's clothing", "Women's clothing", "Electronics", "Jewelery"].map((item)=>(
                      <p key={item} onClick={()=>{setCategory(item.toLowerCase()); setHideSubfilter2(false);}} className={`${category === item.toLowerCase() ? 'bg-blue-500 text-[#fff] font-bold' : 'bg-[#fff] text-[#666]'} rounded-[5px] mb-2 cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>{item}</p>
                    ))}
                  </div>
                  }
            </div>
            <div onClick={()=>setHideSubfilter3(!hideSubfilter3)} className={`relative h-[32px] md:h-[42px] flex gap-10 md:gap-24 items-center justify-between border-y ${hideSubfilter3 ? 'border-blue-500 text-blue-500' : 'border-y-gray-300'} active:border active:border-blue-500 px-[6px] py-[3px] cursor-pointer hover:text-blue-500`}>
                <p className='text-[15px] md:text-[17px]'>Rating</p>
                <div className='flex justify-center items-center'><RiArrowDropDownLine/></div>
                {hideSubfilter3 && <div ref={sortRef3} className='absolute top-[40px] left-0 w-[356px] p-[10px] bg-[#eee] shadow-ox z-50'>
                  <p onClick={()=>{setMin(0); setMax(1);}} className={`${min === 0 && 'bg-blue-500 text-[#fff] font-bold'} bg-[#fff] text-[#666] flex items-center mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>0 - 1.0 <RxStarFilled size={14} className='inline-flex ml-1' /></p>
                  <p onClick={()=>{setMin(1); setMax(2);}} className={`${min === 1 && 'bg-blue-500 text-[#fff] font-bold'} bg-[#fff] text-[#666] flex items-center mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>1.0 <RxStarFilled size={14} className='inline-flex ml-1' />- 2.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /></p>
                  <p onClick={()=>{setMin(2); setMax(3);}} className={`${min === 2 && 'bg-blue-500 text-[#fff] font-bold'} bg-[#fff] text-[#666] flex items-center mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>2.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /> - 3.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /></p>
                  <p onClick={()=>{setMin(3); setMax(4);}} className={`${min === 3 && 'bg-blue-500 text-[#fff] font-bold'} bg-[#fff] text-[#666] flex items-center mb-2 rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>3.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' />- 4.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /></p>
                  <p onClick={()=>{setMin(4); setMax(5);}} className={`${min === 4 && 'bg-blue-500 text-[#fff] font-bold'} bg-[#fff] text-[#666] flex items-center rounded-[5px] cursor-pointer text-[16px] tracking-[1.12] p-[14px] hover:shadow-lg`}>4.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' />- 5.0 <RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /><RxStarFilled size={14} className='inline-flex ml-1' /></p>
                </div>
                }
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto mb-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem] gap-y-6'>
          {filterProducts.map(((product)=>(
            <ProductItem image={product.image} name={product.title} price={product.price} key={product.id} id={product.id} count={product.rating.count}/>
          )))}
        </div>
      </div>
        
  )
}

export default Collection