import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Comments() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Leave a Comment</h2>
        <p className="text-gray-500 dark:text-gray-400">Share your thoughts about this blog post.</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" placeholder="Enter your comment" className="min-h-[100px]" />
        </div>
        <Button>Submit</Button>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Comments</h3>
        <div className="text-sm flex items-start gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2">
              <div className="font-semibold">@iamwillpursell</div>
              <div className="text-gray-500 text-xs dark:text-gray-400">5 months ago</div>
            </div>
            <div>
              I really love the ecosystem Vercel is creating. The way each component can be added and modified with ease
              really makes these tools attractive.
            </div>
          </div>
        </div>
        <div className="text-sm flex items-start gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2">
              <div className="font-semibold">@HackSoft</div>
              <div className="text-gray-500 text-xs dark:text-gray-400">2 months ago</div>
            </div>
            <div>
              We are more than excited to leverage all the new stuff, building better products for our clients ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}