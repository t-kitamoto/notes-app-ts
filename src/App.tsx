import { useCallback, useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

import NoteForm from './components/NoteForm';
import type { Note } from './types/note';
import NoteList from './components/NoteList';

export default function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const deleteNote = useCallback((id: number) => {
    confirmAlert({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this note?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setNotes((prev) => prev.filter((note) => note.id !== id));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📒 Note App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
