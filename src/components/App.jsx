import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user";
import { Grid } from "@material-ui/core";
import Table from "./Table";
import Header from "./Header";
import UserForm from "./UserForm";

const App = props => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Header />
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <UserForm
          onSubmit={user => {
            dispatch(addUser(user));
          }}
        />
        <Table />
      </Grid>
    </Fragment>
  );
};

export default App;
