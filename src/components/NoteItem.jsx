function NoteItem({ note, deleteNote }) {
    return (
      <div className="note-item">
        <h3>{note.title}</h3>
        {note.description && <p>{note.description}</p>}
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    );
  }
  
  export default NoteItem;
  