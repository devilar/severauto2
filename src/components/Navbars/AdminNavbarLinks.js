import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.searchWrapper}>
      </div>
    </div>
  );
}
