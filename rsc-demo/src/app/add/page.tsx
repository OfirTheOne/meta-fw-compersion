"use client"

import { useState } from 'react';
import { addTodoAction } from '../actions';


export default function AddTodoPage() {
    const [text, setText] = useState('');
    

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={addTodoAction} method='POST' className="flex flex-col items-center">
                <label htmlFor="text" className="mb-4">
                    Todo Text:
                </label>
                <input
                    id="title"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="border border-gray-400 text-black rounded-lg px-4 py-2 mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Todo
                </button>
            </form>
        </main>
    );
}