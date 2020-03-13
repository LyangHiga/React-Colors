import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PalettePopup from './PalettePopup';
import styles from './styles/PaletteFormNavStyles';
import useToggleState from './hooks/useToggleState';

function PaletteFormNav(props) {
  const [formShowing, toggleForm] = useToggleState(false);
  const { classes, open, palettes, handleSubmit, handleDrawerOpen } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={toggleForm}>
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PalettePopup
          palettes={palettes}
          handleSubmit={handleSubmit}
          className={classes.button}
          hideForm={toggleForm}
        />
      )}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
