import React, {forwardRef} from 'react';
import TextField from "@material-ui/core/TextField";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';
import PropTypes from "prop-types";
import './input.scss';

export const Input = forwardRef((props, ref) => {
    const {tooltip} = props;
    return (
        <div className='inputContainer'>
            <TextField inputRef={ref} variant="standard" margin="normal" fullWidth {...props}/>
            {tooltip && <div className='inputHint'><Tooltip title={tooltip}><HelpOutlineIcon/></Tooltip></div>}
        </div>
    )

})

Input.displayName = 'InputComponent';

Input.propTypes = {
    tooltip: PropTypes.any,
};