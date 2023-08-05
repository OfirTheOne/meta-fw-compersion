import React from "react";
import CreateOrUpdateNoteForm from "@/components/CreateOrUpdateNoteForm";
import { getNoteById } from "@/db/notes-remote.service";

export default async function Page({ params }: { params: { id: string } }) {
    const note = await getNoteById(params.id);
    if (!note) {
      return <div>Note not found</div>
    }
    
    return <CreateOrUpdateNoteForm 
      CreateOrUpdate={'Update'}
      content={note.content}
      title={note.title}
      id={note.id}
    />;
  }