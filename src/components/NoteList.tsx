import type { Note } from '../types/note';
import NoteItem from './NoteItem';

type NoteListProps = {
  notes: Note[];
  onDelete: (id: number) => void;
};

export default function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
