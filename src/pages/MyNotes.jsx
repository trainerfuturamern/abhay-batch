import React, { useState } from 'react'
import "./MyNotes.css";
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";


const MyNotes = () => {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleChange = (e) => {
        setNewNote(e.target.value);
    }

    const handleNotesAdd = () => {
        setNotes((prev) => {
            const updatedNotes = [...prev];
            updatedNotes.push(newNote);
            setNewNote('');
            return updatedNotes;
        })
    }

    const handleNoteDelete = (i) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(i, 1);
        setNotes(updatedNotes);
    }

    const handleEditCancel = ()=>{
        setEditText('');
        setEditingIndex(null);
    }

    const handleEditing = (i) => {
        console.log("inside handleEditing----------->");
        
        setEditingIndex(i);
        setEditText(notes[i]);
    }

    const handleEditSave = (i) => {
        
        setNotes((prev) => {
            const updatedNotes = [...prev];
            updatedNotes[i] = editText;
            return updatedNotes;
        });

        setEditingIndex(null);
        setEditText('');
        
    }


    return (
        <div className='notes-wrapper'>
            <div className='notes-container'>
                <InputGroup className="mb-3 ">
                    <Form.Control
                        placeholder="Enter new note"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(event) => handleChange(event)}
                        className='notes-field'
                        size='lg'
                        value={newNote}
                    />
                    <Button onClick={handleNotesAdd} variant="info" className='notes-field' id="button-addon2">
                        Add Notes
                    </Button>
                </InputGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Notes</th>
                            <th className='edit-column'>
                                Edit
                            </th>
                            <th className='edit-column'>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                { editingIndex === i ? (
                                    <Form.Control  type="text" value={editText} onChange={(event) => setEditText(event.target.value)} />
                                ) : 

                                note

                                }
                                </td>
                                <td>
                                    {editingIndex === i ? (
                                    
                                            <div className='d-flex gap-1'>
                                                <Button onClick={()=> handleEditSave(i)} variant='success' size='sm'>
                                                <FaRegSave/>
                                            </Button>
                                            <Button variant='secondary' size='sm' onClick={handleEditCancel}>
                                                <TiCancel/>
                                            </Button>
                                            </div>
                                        
                                    ) : (
                                        <Button variant='success' className='p-2 d-flex align-middle'>
                                        <FaEdit onClick={() => handleEditing(i)} size={16} />
                                        </Button>
                                    )}
                                    
                                </td>
                                <td>
                                    <Button onClick={() => handleNoteDelete(i)} variant='danger' className='p-2 d-flex align-middle'>
                                        <MdDelete size={16} />
                                    </Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyNotes;