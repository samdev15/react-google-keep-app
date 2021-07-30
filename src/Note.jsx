import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Note = (props) =>{

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note-parent">
                <div className="note">
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        <Button  className="deleteBtn" onClick={deleteNote}>
                            <DeleteOutlineOutlinedIcon />
                        </Button>
                </div>
            </div>
        </>
    );
}

export default Note;