'use server'

import { revalidatePath } from "next/cache";
// import { redirect } from 'next/navigation'
import { deleteNote } from "@/db/notes.service";


export async function deleteNoteAction(id: string) {
    if (id) {
      await deleteNote(String(id));
      revalidatePath('/[id]');
      revalidatePath('/');
    }
  }