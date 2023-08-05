
import Link from "@/components/Link";
import { NoteModel } from "@/types/note-model";
import { CloseButton } from "./CloseButton";

interface NoteProps {
  note: NoteModel;
}

export function Note({ note }: NoteProps) {
  const { id, title, content, createdAt } = note;

  return (
    <div className="border relative p-2 radius-5">
      <Link href={`/${id}`} >
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{createdAt?.toISOString()}</p>
      </Link>
      <CloseButton id={note.id} />
    </div>
  );
}