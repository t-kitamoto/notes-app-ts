import type { Note } from '../types/note';

type NoteItemProps = {
  note: Note;
  onDelete: (id: number) => void;
};

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  const borderColor =
    note.priority === 'High'
      ? 'border-red-500'
      : note.priority === 'Medium'
      ? 'border-yellow-400'
      : 'border-green-500';

  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-md border-l-8 ${borderColor}`}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category: </strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority: </strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>

      <button
        onClick={() => onDelete(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        🗑 Delete
      </button>
    </div>
  );
}
