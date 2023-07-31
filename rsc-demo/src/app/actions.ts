'use server'
import { addTodo } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export const addTodoAction = async (formData: FormData) => {
    const title = formData.get('title') as string;
    if (title) {
        await addTodo(title);
    }
    revalidatePath('/');
    redirect(`/`);
};