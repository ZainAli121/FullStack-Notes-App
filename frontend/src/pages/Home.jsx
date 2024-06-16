import React, { useState, useEffect } from "react";
import api from "../api";

export default function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes();
    }, [notes])

    const getNotes = () => {
        api.get("notes/").
            then((response) => response.data)
            .then((data) => { setNotes(data) })
            .catch((error) => alert(error))
    };

    const deleteNote = (id) => {
        api.delete(`notes/${id}/delete/`)
            .then((response => {
                if (response.status === 204) alert("Note Deleted")
                else alert("Error Deleting Note")
            }))
            .catch((error) => alert(error))
        getNotes();
    }
    console.log(notes)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 ">
            {notes.map((note) => (
                <div key={note.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden my-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-800">{note.title}</div>
                        <p className="text-gray-700 text-base">
                            {note.content}
                        </p>
                    </div>
                    <div className="px-6 py-4 flex justify-between">
                        {/* <button
            onClick={onEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button> */}
                        <button
                            onClick={() => deleteNote(note.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}