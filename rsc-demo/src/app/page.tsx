import { getTodos } from '@/db'
import Link from 'next/link'

export default async function Home() {

  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Link href="/add" className="text-white text-xl">
            Add Todo
        </Link>
    </main>
  )
}
