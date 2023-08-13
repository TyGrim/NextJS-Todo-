//Pricing page w/ Itinerary voting page Todo 
import Link from "next/link"
import { prisma } from "../db"
import { TodoItem } from "../components/TodoItem"

function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
    "use server"

    await prisma.todo.update({ where: { id }, data: { complete }})

}

export default async function Pricing(){

const todos = await getTodos()

return (
    <>
        <header className="flex justify-between items-center">
            <h1 className="text-2xl">Vote on our next itinerary</h1>
                <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 fucus-within:bg-slate-700 outline-none" href="/new">
                    Vote up
                </Link>
        </header>
        <ul className="pl-4">
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}>
                </TodoItem>
            ))}
        </ul>
    </>
    )
}