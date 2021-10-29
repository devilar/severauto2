import React from 'react';
import {Button} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";





const useStyles = makeStyles((theme) =>({
    root:{
        margin:theme.spacing(3,0,2),
    }

}))

export const PrimaryButton = ({children, ...props}) =>{
    const styles = useStyles();

    return <Button  className={styles.root} type="submit" variant="contained" {...props}>{children}</Button>
}

PrimaryButton.propTypes = {
    children: PropTypes.any
};