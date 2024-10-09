import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProfileIcon from './ProfileIcon';
import { AsosContext } from '../Context/AsosContext';



const NavBar = () => {

    const {profileIconRef,
         menActive, womenActive, setMenActive, 
         setWomenActive, profileHover, search, setSearch} = useContext(AsosContext);

    const [searchFocus, setSearchFocus] = useState(false);
    const searchRef = useRef();
    const location = useLocation();

    useEffect(()=>{
        document.body.addEventListener('click', (e)=>{
            if(!searchRef.current.contains(e.target)){
                setSearchFocus(false);
            }
        })

        
    },[searchRef, searchFocus]);

    useEffect(()=>{
        if(location.pathname.includes("/men")){
            setMenActive(true);
            setWomenActive(false);
        }
        else if(location.pathname.includes("/women")){
            setWomenActive(true);
            setMenActive(false);
        }
        else{
            setMenActive(false);
            setWomenActive(false);
        }
    },[location, setMenActive, setWomenActive])

  return (
    <>
    <div className='w-full relative z-20'>
        <div className='w-full h-[30px] hidden md:flex bg-[#f8f8f8] text-[#666] flex-row-reverse items-center px-10'>
            <div className=' h-full flex items-center justify-center border-x-[1px] border-x-[#ddd] cursor-pointer'>
                <img className='w-[18px] h-[18px] border rounded-full mx-2 p-[0.5px] hover:border-blue-500' src="https://assets.asosservices.com/storesa/images/flags/ng.png" alt="" />
            </div>
            <p className='h-full flex items-center justify-center text-sm border-l-[1px] border-x-[#ddd] px-3 cursor-pointer hover:text-blue-500'>Help & FAQs</p>
            <p className='h-full flex items-center justify-center border-l-[1px] border-x-[#ddd] px-3 cursor-pointer hover:text-blue-500'>Marketplace</p>
        </div>
        <div className='w-full h-[50px] md:h-[60px] bg-[#2d2d2d]'>
            <div className='max-w-full h-full mx-1 xxs:mx-5 md:ml-5 md:mr-12 flex items-center justify-between md:justify-normal'>
                <div className='flex h-full items-center'>
                    <div className='lg:hidden flex items-center justify-center'>
                        <MenuIcon fontSize='large' className='invert cursor-pointer'/>
                    </div>
                    <Link to='/' className='w-[90px] md:w-[130px] h-full cursor-pointer flex flex-shrink-0 items-center justify-center'>
                        <img className='w-auto h-[18px] md:h-[23px]  invert' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDBabTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjAzM0wxMS41NjQgMEM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZaIi8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NFptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDBabS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwIDAtMS4xMDItMS4wNzZaTS4xOTQgOS41NDhhNS43MzMgNS43MzMgMCAwIDAgMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAgMCAyLjEyNCAyLjkxM2MxLjEzNCAxLjE2IDIuNDAyIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N3YuMDAxaC4wOTljMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY4LS44NzEgMS4zNjUtLjU3OCAyLjYzMy0xLjQ2IDMuNzY2LTIuNjJhMTIuMDc4IDEyLjA3OCAwIDAgMCAyLjIwNy0zLjA3NWMuMzM3IDEuODcyIDEuMzcgMy42MTIgMi44NTggNC43NTMgMi4xNSAxLjY0NyA1LjAwOCAxLjk4IDcuNjgzIDEuNzY1IDIuMDc4LS4xNjggMy4yNi0uNDMgNC43NDYtMS4zMTggMy42Mi0yLjE2MyA0LjIyLTcuOTc1LjY2Ni0xMC42MS0yLjQ5NS0xLjgzMi01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjE5LTEuNzA1LTEuMTg2LS43MDItLjk0Ny0uNTkyLTIuNDI3LjI0Mi0zLjI1NCAxLjAxNS0xLjAwNiAzLjQ5Mi0xLjQwOCA1LjI4Mi0uMjUyIDEuMDYuNjg1IDEuODAxIDEuOTE0IDEuNzk4IDMuMTk4bDUuMTMuMDAzYy0uMDg1LTIuMjU4LTEuMjA4LTQuNDUyLTIuOTczLTUuODA1QzUyLjA0LjIgNDkuMTgyLS4xMzMgNDYuNTA4LjA4MiA0NC44Ni4yMTUgNDMuMTkuNTQ3IDQxLjc2MiAxLjRjLTEuNzc4IDEuMDYyLTIuODE1IDIuOTgtMy4wMSA0Ljk3LS42MjUtMS4xODgtMS40NzMtMi4yOC0yLjUzMy0zLjI2QzMzLjg5OC45ODcgMzEuMzM0LjAxNSAyOC41MSAwaC0uMDY2Yy0yLjgyMi4wMTYtNS4zODYuOTg4LTcuNzA3IDMuMTEtMS4xNDYgMS4wNi0yLjA0NCAyLjI0OS0yLjY4MSAzLjU1LS4zMjctMS44OTMtMS4zNjUtMy42NTYtMi44NjgtNC44MDhDMTMuMDQuMjA1IDEwLjE4MS0uMTI4IDcuNTA2LjA4NyA1Ljg1OC4yMiA0LjE5LjU1IDIuNzYgMS40MDUgMS41NTIgMi4xMjcuNjg2IDMuMjQ0LjE5NCA0LjUxIi8+PC9zeW1ib2w+PHVzZSBocmVmPSIjYSIgd2lkdGg9IjIzIi8+PHVzZSBocmVmPSIjYiIgeD0iMjIuOCIgd2lkdGg9IjU3Ii8+PC9zdmc+" alt="" />
                    </Link>
                    <Link to='/women' className={`h-full w-[120px] hidden lg:flex cursor-pointer hover:bg-[#525050] ${womenActive ? 'bg-[#525050]' : 'border-r-[1px] border-r-[#dddddd57] lg:border-l-[1px] border-l-[#dddddd57] '} duration-75  flex-shrink-0 items-center justify-center`}>
                    <p className='text-white text-sm font-semibold tracking-[2px]'>WOMEN</p>
                    </Link>
                    <Link to='/men' className={`h-full w-[110px] hidden lg:flex cursor-pointer hover:bg-[#525050] ${menActive ? 'bg-[#525050]' : 'border-r-[1px] border-r-[#dddddd57]'} duration-75 flex-shrink-0 items-center justify-center`}>
                    <p className='text-white text-sm font-semibold tracking-[2px]'>MEN</p>
                    </Link>
                </div>
                <div className='flex md:flex-1 h-full'>
                    <div className='hidden z-10 flex-1 md:flex h-full relative mx-7 items-center justify-center grow-1'>
                        <input ref={searchRef} value={search} onChange={(e)=>setSearch(e.target.value)} onClick={()=>setSearchFocus(true)} className='w-full h-9 rounded-full px-5 text-md z-10' type="text" placeholder="Search for items and brands" />
                        <SearchOutlinedIcon color={searchFocus ? `` : `action`} className='absolute top-[50%] translate-y-[-44%] right-3 cursor-pointer w-auto h-auto z-10 '/>
                    </div>
                    {searchFocus && 
                        <div className='fixed w-[100%] h-[100%] top-0 left-0 bg-black opacity-55 z-9'></div>
                    }
                    <div className='flex items-center gap-1 xs:gap-4'>
                        <div className='cursor-pointer h-full items-center px-2 flex md:hidden'>
                            <SearchOutlinedIcon fontSize="medium" className='invert'/>
                        </div>
                        <Link ref={profileIconRef} className='cursor-pointer h-full relative items-center px-2 hidden xxs:flex border border-[#2d2d2d] hover:border-gray-200 rounded-sm '>
                            <PersonOutlineRoundedIcon fontSize="medium" className='invert' />
                            <div className={`absolute hidden md:flex -bottom-[22px] left-[50%] translate-x-[-50%] ${profileHover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                                <ArrowDropUpIcon sx={{ color: "#ddd", fontSize:50}} />
                             </div>
                        </Link>
                        
                        <div className='cursor-pointer h-full flex items-center px-2 '>
                            <FavoriteBorderOutlinedIcon fontSize="medium" className='invert' />
                        </div>
                        <div className='cursor-pointer h-full flex items-center px-2 '>
                            <WorkOutlineRoundedIcon fontSize="medium" className='invert' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProfileIcon/>
    </>
  )
}

export default NavBar