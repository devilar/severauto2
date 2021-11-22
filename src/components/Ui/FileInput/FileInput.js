import React, {forwardRef} from 'react';

const FileInput =(props, ref) => {
    return (
        <input type="file" {...props}/>
    );
};

export default FileInput;