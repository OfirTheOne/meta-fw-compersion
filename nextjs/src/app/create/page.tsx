'use client'
import React from "react";
import CreateOrUpdateNoteForm from "@/components/CreateOrUpdateNoteForm";

export default function Page(): JSX.Element {
    return <CreateOrUpdateNoteForm CreateOrUpdate={'Create'}/>;
  }