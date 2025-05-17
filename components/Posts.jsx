import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdOutlineAccessTime } from 'react-icons/md'
import { VscAccount } from "react-icons/vsc";

export default async function Posts() {
  return (
    <div className='flex gap-6 flex-wrap'>
        <div className='rounded-xl w-[calc(50%-12px)] text-center'>
            <Image className='rounded-md shadow-xl' src="https://img.freepik.com/free-vector/new-york-city_24908-55429.jpg" alt="post" width={500} height={500} />
            <p className='text-sm font-medium uppercase pb-3 pt-6'>Desingn</p>
            <h2 className='text-xl mb-3'>Designers in Residence delves into the well-being of Black British communities.</h2>
            <Link href={`/posts/Reactjs-8-best-practices-folder-structure`}>
                <div className='flex justify-center text-sm gap-3'>
                    <div className='flex items-center gap-1'>
                        <VscAccount /> <p>John Doe</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdOutlineAccessTime /> <p>2021-09-01T00:00:00Z</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className='rounded-xl w-[calc(50%-12px)] text-center'>
            <Image className='rounded-md shadow-xl' src="https://img.freepik.com/free-vector/skyline-design-new-york_23-2147774551.jpg" alt="post" width={500} height={500} />
            <p className='text-sm font-medium uppercase pb-3 pt-6'>Desingn</p>
            <h2 className='text-xl mb-3'>Designers in Residence delves into the well-being of Black British communities.</h2>
            <div className='flex justify-center text-sm gap-3'>
                <div className='flex items-center gap-1'>
                    <VscAccount /> <p>John Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineAccessTime /> <p>2021-09-01T00:00:00Z</p>
                </div>
            </div>
        </div>
        <div className='rounded-xl w-[calc(50%-12px)] text-center'>
            <Image className='rounded-md shadow-xl' src="https://img.freepik.com/free-vector/online-office-isometric-icon_1284-16996.jpg" alt="post" width={500} height={500} />
            <p className='text-sm font-medium uppercase pb-3 pt-6'>Desingn</p>
            <h2 className='text-xl mb-3'>Designers in Residence delves into the well-being of Black British communities.</h2>
            <div className='flex justify-center text-sm gap-3'>
                <div className='flex items-center gap-1'>
                    <VscAccount /> <p>John Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineAccessTime /> <p>2021-09-01T00:00:00Z</p>
                </div>
            </div>
        </div>
        <div className='rounded-xl w-[calc(50%-12px)] text-center'>
            <Image className='rounded-md shadow-xl' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg" alt="post" width={500} height={500} />
            <p className='text-sm font-medium uppercase pb-3 pt-6'>Desingn</p>
            <h2 className='text-xl mb-3'>Designers in Residence delves into the well-being of Black British communities.</h2>
            <div className='flex justify-center text-sm gap-3'>
                <div className='flex items-center gap-1'>
                    <VscAccount /> <p>John Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineAccessTime /> <p>2021-09-01T00:00:00Z</p>
                </div>
            </div>
        </div>
        <div className='rounded-xl w-[calc(50%-12px)] text-center'>
            <Image className='rounded-md shadow-xl' src="https://img.freepik.com/free-vector/new-york-city_24908-55429.jpg" alt="post" width={500} height={500} />
            <p className='text-sm font-medium uppercase pb-3 pt-6'>Desingn</p>
            <h2 className='text-xl mb-3'>Designers in Residence delves into the well-being of Black British communities.</h2>
            <div className='flex justify-center text-sm gap-3'>
                <div className='flex items-center gap-1'>
                    <VscAccount /> <p>John Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineAccessTime /> <p>2021-09-01T00:00:00Z</p>
                </div>
            </div>
        </div>
    </div>
  );
}
