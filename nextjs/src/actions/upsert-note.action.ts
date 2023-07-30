'use server'

import { upsertNote } from "@/db/notes.service"
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

 
export async function upsertNoteAction(note: FormData) {
    const isCreate = !note.has('id');
    const upsertNotePayload = {
        id: isCreate ? String(note.get('id')) : undefined,
        title: String(note.get('title')),
        content: String(note.get('content')),
    }
    const result = await upsertNote(upsertNotePayload)
    revalidatePath('/notes/[id]');
    const id = result.id;
    if(id === undefined) {
        throw new Error('Note not created');
    }
    redirect(`/notes/${id}`);

}