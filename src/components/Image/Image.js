import React from 'react';
import PropTypes from "prop-types";

const Img = ({src}) => {

console.log('src', src);

    return (
        <img src={src}/>
    );
};

Img.propTypes = {
src: PropTypes.any,
};

export default Img;