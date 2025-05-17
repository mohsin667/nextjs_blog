"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineAccessTime } from "react-icons/md";
import SideHeading from './SideHeading';
import Image from 'next/image';

const Trending = () => {
    const [trending] = useState([
        {
            "category": 'Design',
            "title": "Designers in Residence delves into the well-being of Black British communities.",
            "url": "https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536943.jpg",
            "timestamp": "2021-09-01T00:00:00Z",
        },
        {
            "category": 'data science',
            "title": "Metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
            "url": "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
            "timestamp": "2021-09-01T00:00:00Z",
        },
        {
            "category": 'Relationships',
            "title": "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "url": "https://img.freepik.com/free-vector/hand-drawn-couple-connecting-puzzle-pieces_23-2148075498.jpg",
            "timestamp": "2021-09-01T00:00:00Z",
        },
    ])
    return (
        <div>
            <SideHeading heading="Trending" />
            {trending.map((trend) => (
                <Link href="/" key={trend.title} className="flex gap-4 pb-6">
                    <div className="flex gap-4 items-center">
                        <div className="shrink-0">
                            <Image
                                className="rounded-full object-cover w-[80px] h-[80px]"
                                src={trend.url}
                                alt={trend.title}
                                width={80} height={80}
                            />
                        </div>
                        <div className="grow">
                            <p className='text-sm font-medium uppercase pb-3'>{trend.category}</p>
                            <div>
                                <h2 className='text-[16px] font-medium pb-2'>{trend.title}</h2>
                                <div className='flex gap-2 text-gray-400'>
                                    <MdOutlineAccessTime />
                                    <p className='text-xs'>{trend.timestamp}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Trending
