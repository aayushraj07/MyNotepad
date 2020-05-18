import React from 'react';
import NoteListItems from './noteslistitem'

const NoteList=(props)=>{
    // const NoteItems = props.dataToShow.map((data)=>{
    //     return <NoteListItems data={data}/>
    // })

    return(
        <div>
            {props.dataToShow.title}
        </div>
    )
}

export default NoteList;