import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false);

    const inputEvent = (event) => {

        const {name, value} = event.target;

        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const addEvent = () => {
        props.passNote(note);

        setNote({
            title: "",
            content: ""
        });
    }

    const openNote = () =>{
        setExpand(true);
    }

    const closeNote = () =>{
        setExpand(false);
    }

    return (
        <>
            <div className="main_div" onDoubleClick={closeNote}>
                <div className="center_div">
                    <form className="frmNote">
                    <br />
                    {expand?      
                        <div className="mb-3">
                            <input type="text" name="title" value={note.title} className="form-control" autoComplete="false" placeholder="Title" onChange={inputEvent}/>
                        </div>
                    : null}
                        <div className="mb-3">
                            <textarea name="content" value={note.content} className="form-control" rows="" placeholder="Take a note..." onChange={inputEvent} onClick={openNote}></textarea>
                        </div>
                    {expand?
                        <Button className="newBtn" onClick={addEvent}>
                            <AddIcon/>
                        </Button>
                        :null}
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateNote;