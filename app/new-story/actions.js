'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createPost({ title, content, imageUrl, authorId }) {
    await prisma.post.create({
        data: {
            title,
            content,
            imageUrl,
            authorId,
            published: true,
        },
    });

    revalidatePath('/posts');
}
