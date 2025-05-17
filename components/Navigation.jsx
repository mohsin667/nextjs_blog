import Link from 'next/link'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiReadCvLogoBold } from "react-icons/pi";

function Navigation() {
  return (
    <nav className="relative">
      <div className='py-4 bg-slate-50 shadow-xl relative'>
        <div className='container flex items-center justify-between'>
            <Link href="/" className='inline-flex items-center gap-1.5 font-medium text-2xl'>Reads<span><PiReadCvLogoBold  className='text-[#ef4444]'/></span></Link>
            <div className='flex gap-6 items-center'>
              <Link  
              href='/new-story'
              
              >
                <HiMiniPencilSquare size={24} />
              </Link>
                <IoSearch size={24} className='cursor-pointer'/>
                <div className='w-[1px] h-[36px] bg-[#dcd6d6]'></div>
                <Link href="/" className="link">Login</Link>
                
            </div>
        </div>
      </div>
      {/* {isVisible && <SearchBar />}  */}
    </nav>
  )
}

export default Navigation
