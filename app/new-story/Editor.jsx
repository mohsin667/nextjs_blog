'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'
console.log('loading')
function Editor() {
  const [value, setValue] = useState('')
  console.log('value', value)

  const modules = {
    toolbar: {
        container: [
            [{ 'header': [1,2,3,4,5,6,false] }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'align': [] }],
        ],
    },
    clipboard: {
        matchVisual: false,
    },
}

  return <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
}

export default Editor
