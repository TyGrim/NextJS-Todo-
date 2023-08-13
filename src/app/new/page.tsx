// New page on event todo

import { prisma } from "../db";
import { redirect } from "next/navigation"
import Link from "next/link";

async function createTodo( data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof  title !== "string" || title.length === 0){
        throw new Error("Please provide requested information")
    }

    await prisma.todo.create({ data: { title, complete: false}})
    redirect("/pricing")
    
}

export default function New() {
    return (
        <>
            <header className="flex justify-between items-center">
                <h1 className="text-2xl">Vote on our next itinerary</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
                <input type="text" name="title" className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:border-slate-100 outline-none" />
                <div className="flex gap-1 justify-end">
                    <Link href=".." className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
                        Cancel
                    </Link>
                    <button type="submit" className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" >
                        Create
                    </button>
                </div>
            </form>

        </>
    )
}