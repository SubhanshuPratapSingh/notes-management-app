import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  if (loading) return <Loader />;

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <NoteList notes={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
}

export default App;
