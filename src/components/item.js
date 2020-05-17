import React from 'react';

const Item = (props)=>{

    return(
        <div className="row">
            <h1>{props.dataToShow}</h1>
        </div>
    )
}

export default Item;
