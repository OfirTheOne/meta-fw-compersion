import { NoteModel } from "@/types/note-model";
import { NoteDto } from "@/types/note-dto";
import { prisma } from "./db";



// upsert a note
export async function upsertNote(note: Pick<NoteDto, 'content' | 'title' | 'id'>) {
  const { title, content } = note;
  return prisma.note.upsert({
    create: {
      title,
      content,
    },
    update: {
      title,
      content,
    },
    where: {
      id: note.id || '',
    },
  });
}

// Get all notes
export async function getAllNotes() {
  return prisma.note.findMany();
}

// Get a single note by ID
export async function getNoteById(id: string) {
  return prisma.note.findUnique({
    where: {
      id,
    },
  });
}

// Update a note
export async function updateNote(id: string, note: NoteModel) {
  const { title, content } = note;
  console.log(id);

  return prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
}

// Delete a note
export async function deleteNote(id: string) {
  return prisma.note.delete({
    where: {
      id,
    },
  });
}



