import React, {forwardRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './input.scss';

export const PasswordInput = forwardRef((props, ref) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const {showPasswordBtn} = props;
    return (
        <div className='inputContainer'>
            <TextField inputRef={ref} variant="standard" margin="normal" fullWidth {...props} type={passwordShown ? "text" : "password"}/>
            {showPasswordBtn && <div className='inputHint' onClick={togglePasswordVisiblity}><RemoveRedEyeIcon color={passwordShown ? 'primary' : ''}/></div>}

        </div>
    )

})

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
    showPasswordBtn: PropTypes.any,
};