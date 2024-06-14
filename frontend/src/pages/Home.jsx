import React, {useState, useEffect} from "react";
import api from "../api";

export default function Home(){
    const [notes, setNotes] = useState([])
    const [content , setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get("notes/").
        then((response) => response.data)
        .then((data) => {setNotes(data); console.log(data)})

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
    
    const createNote = (e) => {
        e.preventDefault();
        api.post("notes/", {title, content})
        .then((response) => {
           if(response.status === 201) alert("Note Created")
              else alert("Error Creating Note") 
        }).catch((error) => alert(error))
        
        getNotes();
    }
     
    return (
        <div>Home</div>
    )
}