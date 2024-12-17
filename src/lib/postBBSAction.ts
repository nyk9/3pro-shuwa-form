
"use server";
import  prisma  from './prismaClient';
import { formSchema } from "./formSchema";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from "zod";

export const postBBS = async ({username, title, content}: z.infer<typeof formSchema>) => {
    await prisma.post.create({
      data: {
        username,
        title,
        content,
      },
    });

    revalidatePath("/");
    redirect("/");
}