import React from 'react';
import PropTypes from "prop-types";

const Img = ({src}) => {
    return (
        <img src={src}/>
    );
};

Img.propTypes = {
src: PropTypes.any,
};

export default Img;