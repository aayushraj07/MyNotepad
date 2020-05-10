import React from 'react';

function InsertArea (){
    return(
        <div>
            <div className="row">
            <div className="col-9"> 
            </div>
            <div className="btn-toolbar col-3">
                <div className="btn-group">
                    <button className="btn btn-sm"><strong>B</strong></button>
                    <button className="btn btn-sm"><strong>I</strong></button>
                    <button className="btn btn-sm"><strong>U</strong></button>
                </div>
            </div>
            </div>
            <textarea placeholder="Your notes are safe here!" cols="100" rows="10"></textarea>
            <br></br>
            <div className="row">
                <div className="col-9"></div>
                <div>
                <button className="btn btn-success">+Add</button>
                </div>
            </div>
        </div>
    )
}

export default InsertArea;
