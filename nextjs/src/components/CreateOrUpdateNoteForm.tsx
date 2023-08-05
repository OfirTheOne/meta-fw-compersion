'use client'
import { upsertNoteAction } from "@/actions/upsert-note.action";
import React, { useState } from "react";
import Link from "@/components/Link";

interface CreateOrNoteProps {
  CreateOrUpdate: "Create";
}

interface UpdateOrNoteProps {
  CreateOrUpdate: "Update";
  content: string;
  title: string;
  id: string;
}

type CreateOrUpdateNoteProps = CreateOrNoteProps | UpdateOrNoteProps;

export default function CreateOrUpdateNoteForm(
    props: CreateOrUpdateNoteProps
  ): JSX.Element {
    const [title, setTitle] = useState(
      props.CreateOrUpdate === "Update" ? props.title : ""
    );
    const [content, setContent] = useState(
      props.CreateOrUpdate === "Update" ? props.content : ""
    );
  
    return (
      <div className="container mx-auto py-8">
        <Link
        href="/"
        type="submit"
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>

      </Link>
        <h1 className="text-2xl font-semibold mb-4">{props.CreateOrUpdate === "Create" ? "Create" : "Update"} a Note</h1>
        <form method="POST" action={upsertNoteAction}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-800 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-800 font-medium mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          {props.CreateOrUpdate === "Update" && (
            <input type="hidden" name="id" value={props.id} />
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
              {props.CreateOrUpdate === "Create" ? "Create" : "Update"}
            </button>
          </div>
        </form>
      </div>
    );
  }