import React, {forwardRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PropTypes from "prop-types";
import './input.scss';



const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));



export const Input = forwardRef((props, ref) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const {tooltip, showPasswordBtn} = props;
    return (
        <div className='inputContainer'>
            <TextField inputRef={ref} variant="standard" margin="normal" fullWidth {...props}/>
            {tooltip && <div className='inputHint'>

                <BootstrapTooltip title={tooltip}>
                    <HelpOutlineIcon/>
                </BootstrapTooltip>



            </div>}
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