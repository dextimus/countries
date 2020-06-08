import React from 'react';

const scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '520px', border: '3px solid black'}}>
            {props.children}
        </div>
    );
}

export default scroll;