import React from 'react';
import './Paragraphs.css'

const IntroParagraphs = ({description}) => {
    return (
        <p className='paragraphs-app'>{description}</p>
    );
}
 
export{IntroParagraphs};