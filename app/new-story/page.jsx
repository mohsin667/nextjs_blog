import prisma from '@/lib/prisma';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Editor from './Editor';

export default function PostsPage() {
  return (
    <div className='max-w-[700px] mx-auto px-4'>
      <div className="grid w-full items-center gap-1.5 mb-8">
        <Label className='text-2xl'>Title</Label>
        <Input className='h-[55px] leading-[3]' type="email" />
      </div>
      <div className="grid w-full items-center gap-1.5 mb-8">
        <Label className='text-2xl'>Banner</Label>
        <Input className='h-[55px] leading-[3]' id="picture" type="file" />
      </div>
      <div className="grid w-full items-center gap-1.5 mb-8">
        <Editor />
      </div>
      <div className="grid w-full items-center gap-1.5 mb-8">
        <Button className='h-[55px] cursor-pointer'>Create Post</Button>
      </div>
    </div>
    
  );
}

