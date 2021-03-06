import React, {  useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Subcategory(props) {
  const { _name, _categorys } = props.subCatData;

  const [open, setOpen] = React.useState(false);
  const [names, setname] = useState(_name);
  const [category, setcategory] = useState(_categorys);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    if (names?.lenght <= 2 || names?.lenght >= 25 || category?.lenght <= 2 || category?.lenght >= 30) {
      toast.error('plasase fill data properly!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      //   console.log('=========>', props.subcatId);
      const data = { names, category };
      axios.put(`http://localhost:3000/api/updateSubCategory/${props.subcatId}/details`, data).then((res) => {
        setOpen(false);
        window.location.reload(false);
      }).catch((resspo) => {
        console.log("failed")
      })
    }
  }


  const marginfor = {
    margins: {
      marginTop: '8px',
      marginBottom: '10px'
    }
  }

  return (
    <div>
      <Button variant="outlined" startIcon={<SaveIcon />} size="small" color="primary" onClick={handleClickOpen}>
        update
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          update subcategory
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="standard-required" value={names} onChange={(e) => setname(e.target.value)} variant="outlined" label="subcategory Name" fullWidth style={marginfor.margins} required />
          <TextField id="standard-required" value={category} onChange={(e) => setcategory(e.target.value)} variant="outlined" label="category Name" fullWidth style={marginfor.margins} required />

        </DialogContent>
        <DialogActions>
          <Button type="submit" startIcon={<SaveIcon />} size="small" autoFocus onClick={handleUpdate} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}