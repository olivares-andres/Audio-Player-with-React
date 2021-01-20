import React from 'react';
import PropType from 'prop-types';

const Songs = ({name, index, playSong}) => {   
    
    return (    
            
            <li  className="fontType" onClick={()=>playSong(index)}>{name}</li>    
    )}

    Songs.propTypes = {   
        /* img: PropType.string */     
        name: PropType.string,
        index: PropType.number,
        playSong: PropType.func
    }

    
    export default Songs;

        
       