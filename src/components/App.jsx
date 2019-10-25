import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import Table from "./Table";
import Header from "./Header";
import UserForm from "./UserForm";

const App = () => {
  const UserState = [];
  const [users, setUser] = useState(UserState);

  const addUser = user => {
    setUser([...users, user]);
  };

  return (
    <Fragment>
      <Header />
      <Grid container style={{display: 'flex', justifyContent: 'center'}}>
        <UserForm addUser={addUser} />
        <Table users={users}/>
      </Grid>
    </Fragment>
  );
};

export default App;
