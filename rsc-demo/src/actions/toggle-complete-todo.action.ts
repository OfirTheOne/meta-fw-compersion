"use server";
import { toggleCompleted } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function toggleCompleteTodoAction(formData: FormData) {
    const id = formData.get('id') as string;
    await toggleCompleted(id)
    revalidatePath(`/${id}`);
    redirect(`/`);
}