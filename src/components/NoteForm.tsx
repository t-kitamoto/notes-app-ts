import { useState, type ChangeEvent } from 'react';

import type { Note } from '../types/note';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

type NoteFormProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const initialValue = {
  title: '',
  priority: 'Medium',
  category: 'Work',
  description: '',
};

export default function NoteForm({ notes, setNotes }: NoteFormProps) {
  const [formData, setFormData] = useState(initialValue);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote: Note = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);
    setFormData(initialValue);
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-cyan-800 py-2 rounded-lg cursor-pointer hover:bg-cyan-200 hover:border-cyan-300 transition mb-4"
      >
        {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '📂 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡 Ideas' },
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-cyan-500 text-white py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none rounded-lg cursor-pointer hover:bg-cyan-600 shadow-sm">
            Add Note
          </button>
        </form>
      )}
    </>
  );
}
