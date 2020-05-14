import React from 'react';
import NoteListItems from './NotesListItems';

const ShowNotes = (props) => {
    const listItems = props.titles.map((title)=>{
        return <NoteListItems title={title} />
    });

    return(
        <div className="showNotes">
            <div>     
                <p>Notes:</p>
                <div className="row">
                    <div className="col-5"></div>
                        <ul className="list-group">
                            {listItems}
                        </ul>
                </div>
            </div>
        </div>

    )
}

export default ShowNotes;
