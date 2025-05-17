import React from 'react'
import Image from 'next/image'
import { htmlContent } from './constants'
import Comments from '@/components/Comments'

export default async function PostDetail({params}) {
    const { slug } = params
    console.log(slug)

    return (
        <div className="max-w-[700px] mx-auto px-4 leading-[2] text-lg">
          <h1 className='text-[#242424] text-xxl pb-8'>1. The “Component as Function, Not Dumpster” Pattern</h1>
          <Image className='w-full shadow-xl' src="https://images.unsplash.com/photo-1743385779388-21635a160564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post" width={500} height={500} />
          <div className='blog-post'>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
          <Comments />
        </div>
    )
}

