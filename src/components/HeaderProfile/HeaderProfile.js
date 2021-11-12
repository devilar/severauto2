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
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import FaceIcon from '@mui/icons-material/Face';
//core components
import Button from "components/CustomButtons/Button.js";
import {Link} from 'react-router-dom';

import styles from "assets/jss/material-dashboard-react/dropdownStyle.js";
import {Typography} from "@mui/material";
import loginStore from "../../store/loginStore";
import {observer} from "mobx-react-lite";

const useStyles = makeStyles(styles);

const HeaderProfile = observer(() =>{
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

  const handleLogOut = () => {
      loginStore.isLogged = false;
      setOpen(null);
  }

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
                <Typography ml='5px' color='#ffffff' align='center' component="h6" variant="p" fontSize={14}>{loginStore.isLogged ? loginStore.currentUser.login : 'Гость'}</Typography>
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
                          {loginStore.isLogged ?
                              <>
                              <Link to='/profile'>
                                  <MenuItem
                                      onClick={handleClose}
                                      className={classes.dropdownItem}
                                  >
                                      Профиль
                                  </MenuItem>
                              </Link>
                              <MenuItem
                                  onClick={handleLogOut}
                                  className={classes.dropdownItem}
                              >
                                  Выйти
                              </MenuItem>
                              </>
                          :
                              <>
                              <Link to='/login'>
                              <MenuItem
                              onClick={handleClose}
                              className={classes.dropdownItem}
                              >
                              Войти
                              </MenuItem>
                              </Link>
                              <Link to='/registration'>
                              <MenuItem
                              onClick={handleClose}
                              className={classes.dropdownItem}
                              >
                              Регистрация
                              </MenuItem>
                              </Link>
                              </>

                          }
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>


                </Grow>
            )}
          </Poppers>
        </div>
      </div>
  );
})

export default HeaderProfile