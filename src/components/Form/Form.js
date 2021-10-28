import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop:theme.spacing(1)
    }
}))

const Form = ({children, ...props}) => {
    const styles = useStyles();
    return (
        <form className={styles.root} noValidate {...props}>{children}</form>
    );
};

Form.propTypes = {
    children: PropTypes.any
};


export default Form;