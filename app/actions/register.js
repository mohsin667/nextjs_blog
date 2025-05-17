'use server'; // I am using this because I am importing bcrypt which is Node.js core module
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'
export async function registerUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    console.log("user", user);
    // revalidatePath("/auth/register");
}