import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote }) {
  return notes.map((note) => (
    <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
  ));
}

export default NoteList;
