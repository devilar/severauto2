import React from 'react';
import './headerProfile.scss';

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import FaceIcon from '@mui/icons-material/Face';
//core components
import Button from "components/CustomButtons/Button.js";
import {Link} from 'react-router-dom';

import styles from "assets/jss/material-dashboard-react/dropdownStyle.js";
import {Typography} from "@mui/material";

const useStyles = makeStyles(styles);

export default function HeaderProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(null);
  const handleToggle = event => {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
      <div>
        <div className={classes.manager}>
            <Button
                color={window.innerWidth > 959 ? "transparent" : "white"}
                simple={!(window.innerWidth > 959)}
                aria-owns={open ? "menu-list-grow" : null}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.buttonLink}
            >
            <FaceIcon style={{fill:"#000000"}}/>
                <Typography ml='5px' color='#ffffff' align='center' component="h6" variant="p" fontSize={14}>Сергей</Typography>
            <Hidden mdUp implementation="css">
              <p onClick={handleClose} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
              open={Boolean(open)}
              anchorEl={open}
              transition
              disablePortal
              className={
                classNames({ [classes.popperClose]: !open }) +
                " " +
                classes.pooperNav
              }
          >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{
                      transformOrigin:
                          placement === "bottom" ? "center top" : "center bottom"
                    }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList role="menu">
                        <MenuItem
                            onClick={handleClose}
                            className={classes.dropdownItem}
                        >
                            <Link to='/profile'>Профиль</Link>
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            className={classes.dropdownItem}
                        >
                          Выйти
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
          </Poppers>
        </div>
      </div>
  );
}