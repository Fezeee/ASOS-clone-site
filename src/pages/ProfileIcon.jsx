import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';
import { AsosContext } from '../Context/AsosContext';

const ProfileIcon = () => {

    const {profileRef, profileHover, setProfileHover, profileIconRef} = useContext(AsosContext);

    useEffect(()=>{
        document.body.addEventListener("mouseover", (event)=>{
            if(profileRef.current.contains(event.target)){
                setProfileHover(true);
            }
            if(profileIconRef.current.contains(event.target)){
                setProfileHover(true);
            }
        })
        document.body.addEventListener("mouseout", (event)=>{
            if(profileRef.current.contains(event.target)){
                setProfileHover(false);
            }
            if(profileIconRef.current.contains(event.target)){
                setProfileHover(false);
            }
        })
    },[profileRef, profileIconRef, setProfileHover])
    
  return (
    <div ref={profileRef} className={`absolute hidden md:flex flex-col w-[330px] ${profileHover ? 'top-[90px]' : 'top-[-190px]'} duration-500 right-0 lg:right-[3%] bg-white z-10`}>
        <div className='w-full h-[43px] bg-[#ddd] flex flex-row justify-between items-center px-4'>
            <div className='flex items-center gap-2 tracking-wider text-md'>
                <Link to='/signin' className='cursor-pointer hover:text-blue-500 underline text-[#4d4c4c]'><p>Sign In</p></Link>
                <div className='w-[0.9px] h-[14px] bg-[#4d4c4c] '></div>
                <Link to='/signup' className='cursor-pointer hover:text-blue-500 underline text-[#4d4c4c]'><p>Join</p></Link>
            </div>
            <CloseIcon onClick={()=>setProfileHover(false)} className='cursor-pointer hover:text-blue-500' sx={{ color: "#000", fontSize: 33}}/>
        </div>
        <div className='w-full px-5 py-3 flex flex-col items-start tracking-wider'>
            <div className='cursor-pointer text-[#4d4c4c] 
                hover:text-blue-500 flex items-center gap-3 mb-6'>
                <PersonOutlineRoundedIcon sx={{ color: "#000", fontSize: 33}}/>
                <p>My Account</p>
            </div>
            <div className='cursor-pointer text-[#4d4c4c]  hover:text-blue-500 flex items-center gap-3 mb-6'>
                <WorkOutlineRoundedIcon sx={{ color: "#000", fontSize: 33}}/>
                <p>My Orders</p>
            </div>
            <div className='cursor-pointer text-[#4d4c4c]  hover:text-blue-500 flex items-center gap-3 mb-6'>
                <NotListedLocationOutlinedIcon sx={{ color: "#000", fontSize: 33}}/>
                <p>Returns Information</p>
            </div>
            <div className='cursor-pointer text-[#4d4c4c] hover:text-blue-500 flex items-center gap-3 mb-1'>
                <SmsOutlinedIcon sx={{ color: "#000", fontSize: 33}}/>
                <p>Contact Preferences</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileIcon