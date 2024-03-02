import React, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PlayerList from "./list";
import Form from "./form/index";
import { Button } from "@mui/material";
import Title from "../../components/Title";
import { connect } from "react-redux";
import Layout from "../../hoc/Layout";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { getPlayers } from "../../redux/actions/player";

export function Home(props) {
  const _formValues = {
    firstName: "",
    lastName: "",
    contact: "",
    gameSession: "",
  };
  const [page, setPage] = useState("List");
  const [formValues, setFormValues] = useState(_formValues);

  const handlePage = (page, data = null) => {
    setPage(page);

    if (page === "List") {
      getList();
    }
    if (data) {
      return setFormValues(data);
    }
    return setFormValues(_formValues);
  };

  const getList = (filter) => {
    props.dispatch(getPlayers(filter));
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (props.player.error) {
      NotificationManager.error(props.player.error);
    }
  }, [props.player.error]);

  useEffect(() => {
    if (props.player.success) {
      NotificationManager.success(props.player.success);
      handlePage("List");
    }
  }, [props.player.success]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Title>
                Players {page}
                <Button
                  style={{ float: "right" }}
                  onClick={() => {
                    page === "List" ? handlePage("Add") : handlePage("List");
                  }}
                >
                  {page === "List" ? "Add" : "List"}
                </Button>
              </Title>
              {page === "List" ? (
                <PlayerList
                  handlePage={handlePage}
                  getList={getList}
                  {...props}
                />
              ) : (
                <Form page={page} formValues={formValues} {...props} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default connect((state) => ({
  player: state.player,
}))(Layout(Home, "Home"));
