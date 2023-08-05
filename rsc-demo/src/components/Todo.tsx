"use client"

import { toggleCompleteTodoAction } from "@/actions/toggle-complete-todo.action";

interface TodoProps { 
    id: string;
    title: string;
    completed: boolean;
}

export function Todo({ id, title, completed}: TodoProps) {
 
    return (
        <div className="flex-row items-center justify-between border-b border-gray-400">
                <div className={completed ? 'line-through' : ''}>{title}</div>
                <form action={toggleCompleteTodoAction} method="POST">
                    <input type="hidden" hidden name="id" value={id} />
                    <button 
                        type="submit" id="complected" 
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"> 
                        { completed ? 'Complete' : 'Reset' } 
                    </button>
                </form>
        </div>
    );
}