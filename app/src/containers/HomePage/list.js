import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deletePlayers } from "../../redux/actions/player";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
export default function List(props) {
  const [rows, setRow] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(false);

  let searchDelay;
  const handleSearch = (value) => {
    clearTimeout(searchDelay);
    // Delay search
    searchDelay = setTimeout(function () {
      let search = value || "";
      props.getList({search});
    }, process.env.REACT_APP_FILTER_TIME_OUT);
  };
  const handleToggle = (value) => {
    setOpen(value);
    if (value === false) {
      setDeleteId(false);
    }
  };

  useEffect(() => {
    if (props.player.players) {
      setRow(props.player.players);
    }
  }, [props.player.players]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => handleToggle(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => handleToggle(false)}>
            No
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={() => {
              props.dispatch(deletePlayers(deleteId));
              handleToggle(false);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        placeholder="Search By Session"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Session</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">{row.gameSession}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={(e) => {
                      props.handlePage("View", row);
                    }}
                  >
                    <VisibilityIcon />
                  </Button>
                  <Button
                    onClick={(e) => {
                      props.handlePage("Edit", row);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      handleToggle(true);
                      setDeleteId(row._id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
