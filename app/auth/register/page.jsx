'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerUser } from '@/app/actions/register'

function Register() {  
  const handleClick = async (formData) => {
    const user = await registerUser(formData);
    console.log("user", user);
  }
  return (
    <form action={handleClick}>
      <Card className="w-[700px] mx-auto">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register and start creating your own posts!</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" placeholder="Enter your email">Password</Label>
                <Input
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="*****"/>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type='submit'>Create Account</Button>
        </CardFooter>
      </Card>
    </form>
  )
}


export default Register