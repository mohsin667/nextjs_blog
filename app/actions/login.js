'use server'

import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function loginUser(form) {
    const { email, password } = form

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return { error: "User not found" }
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return { error: "Invalid password" }
        }

        // 🔐 At this point, user is authenticated
        // Here you could create a session/cookie (not implemented in this minimal example)
        return { success: true, user }
    } catch (err) {
        console.error(err)
        return { error: "Something went wrong. Please try again." }
    }
}
