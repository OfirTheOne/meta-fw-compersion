import { NoteModel } from "@/types/note-model";
import { NoteDto } from "@/types/note-dto";
// import { prisma } from "./db";

declare global {
    var __todos__: NoteModel[];
}

let todos: NoteModel[];

if (global.__todos__ === undefined) {
    global.__todos__ = [
        {
            id: '1',
            title: 'First todo',
            content: 'This is the first todo',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            title: 'Second todo',
            content: 'This is the second todo',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            title: 'Third todo',
            content: 'This is the third todo',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
}

todos = global.__todos__;



// upsert a note
export async function upsertNote(note: Pick<NoteDto, 'content' | 'title' | 'id'>) {
    const { title, content } = note;
    if (note.id) {
        const index = todos.findIndex((todo) => todo.id === note.id);
        if (index !== -1) {
            todos[index] = {
                ...todos[index],
                title,
                content,
            };
            return todos[index];
        }
        throw new Error('Note not found');
    } else {
        const newTodo: NoteModel = {
            id: (todos.length + 1).toString(),
            title,
            content,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        todos.push(newTodo);
        return newTodo;
    }
}

// Get all notes
export async function getAllNotes() {
    await delay(500);
    return todos;
}

// Get a single note by ID
export async function getNoteById(id: string) {
    return todos.find((todo) => todo.id === id);
}

// Update a note
export async function updateNote(id: string, note: NoteModel) {
    const { title, content } = note;
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todos[index] = {
            ...todos[index],
            title,
            content,
        };
    }
    return todos;
}

// Delete a note
export async function deleteNote(id: string) {
    await delay(500);
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
    }
    return todos;
}





const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));