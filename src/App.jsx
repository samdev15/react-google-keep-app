import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

const App = () =>{

    const [noteItem, setNoteItem] = useState([]);

    const addNote = (note) =>{
        setNoteItem((oldData)=>{
            return [
                ...oldData,
                note
            ]     
        });
    }

    const onDelete = (id) =>{
        setNoteItem((olddata)=>
            olddata.filter((currentData, i)=>{
                return i !== id;
            })
        );
    };
    
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {noteItem.map((value, index)=>{
                    return <Note key={index} id={index} title={value.title} content={value.content} deleteItem = {onDelete}/>
                })}
            <Footer />
        </>
    );
}

export default App;