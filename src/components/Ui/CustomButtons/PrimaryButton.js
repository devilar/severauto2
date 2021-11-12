import React from 'react';
import {Button} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";





const useStyles = makeStyles((theme) =>({
    root2:{
        margin:theme.spacing(5,0,2),
        boxShadow: '0 2px 2px 0 rgb(37 37 37 / 14%), 0 3px 1px -2px rgb(37 37 37 / 20%), 0 1px 5px 0 rgb(37 37 37 / 12%)',
backgroundColor: '#252525'
    }

}))

export const PrimaryButton = ({children, ...props}) =>{
    const styles = useStyles();

    return <Button  className={styles.root} type="submit" variant="contained" {...props}>{children}</Button>
}

PrimaryButton.propTypes = {
    children: PropTypes.any
};