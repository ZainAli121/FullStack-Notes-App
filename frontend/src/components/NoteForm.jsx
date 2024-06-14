import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function NoteForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const createNote = (e) => {
        e.preventDefault();
        api.post("notes/", { title, content })
            .then((response) => {
                if (response.status === 201) alert("Note Created");
                else alert("Error Creating Note");
            }).catch((error) => alert(error));
        navigate("/");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Note</h1>
                <form onSubmit={createNote}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Title"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
                        <textarea
                            name="content"
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter Content"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        />
                    </div>
                    <div className="text-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
