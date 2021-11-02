import React, {forwardRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';
import PropTypes from "prop-types";
import './input.scss';

export const Input = forwardRef((props, ref) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const {tooltip, showPasswordBtn} = props;
    return (
        <div className='inputContainer'>
            <TextField inputRef={ref} variant="standard" margin="normal" fullWidth {...props}/>
            {tooltip && <div className='inputHint'><Tooltip title={tooltip}><HelpOutlineIcon/></Tooltip></div>}
            {showPasswordBtn && <div className='inputHint' onClick={togglePasswordVisiblity}>test</div>}

        </div>
    )

})

Input.displayName = 'InputComponent';

Input.propTypes = {
    tooltip: PropTypes.any,
    showPasswordBtn: PropTypes.any,
    type: PropTypes.any,
};