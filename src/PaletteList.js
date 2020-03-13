import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import useToggleState from './hooks/useToggleState';

function PaletteList(props) {
  const [openDeleteDialog, toggleDialog] = useToggleState(false);
  const [deletingId, setDeletingId] = useState();

  const openDialog = id => {
    toggleDialog();
    setDeletingId(id);
  };

  const closeDialog = () => toggleDialog();

  const handleDelete = () => {
    props.deletePalette(deletingId);
    closeDialog();
  };

  const goToPalette = id => props.history.push(`/palette/${id}`);

  const { palettes, classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create Palette </Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(p => (
            <CSSTransition key={p.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...p}
                goToPalette={goToPalette}
                openDialog={openDialog}
                key={p.id}
                id={p.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
        <ListItem button onClick={handleDelete}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delete" />
        </ListItem>
        <ListItem button onClick={closeDialog}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cancel" />
        </ListItem>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
