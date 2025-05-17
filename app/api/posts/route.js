import prisma from '@/lib/prisma';

export async function GET() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true, comments: true },
    });

    return Response.json(posts);
}

export async function POST(request) {
    const body = await request.json();

    const newPost = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: true,
            authorId: body.authorId,
        },
    });

    return Response.json(newPost);
}


