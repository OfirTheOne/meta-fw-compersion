import { Todo } from "@/components/Todo";
import { getTodo } from "@/db";

export default async function TodoPage({ params: { id } }: { params: { id: string } }) {
    const todo = await getTodo(id);
    if (!todo) return (
        <div>Todo not found</div>
    );
    return <Todo {...todo} />;
}