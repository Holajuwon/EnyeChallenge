import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
import {} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const UserForm = props => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    hobby: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.birthday) {
      setUser(initialFormState);
      return props.addUser(user);
    }
  };

  return (
    <Paper style={{ margin: 30, padding: 30, width: 300 }}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid>
            <TextField
              label="First Name"
              placeholder="John"
              style={{}}
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInput}
              variant="filled"
              required
            ></TextField>
          </Grid>
          <br />
          <Grid>
            <TextField
              label="Last Name"
              placeholder="Doe"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInput}
              variant="filled"
              required
            ></TextField>
          </Grid>
          <br />
          <Grid>
            <TextField
              type="date"
              label="Date Of Birth"
              InputLabelProps={{ shrink: true }}
              name="birthday"
              value={user.birthday}
              onChange={handleInput}
              variant="filled"
              required
            ></TextField>
          </Grid>
          <br />
          <Grid>
            <TextField
              label="Age"
              type="number"
              placeholder="20"
              name="age"
              value={user.age}
              onChange={handleInput}
              variant="filled"
            ></TextField>
          </Grid>
          <br />
          <Grid>
            <TextField
              label="Hobby"
              placeholder="Music"
              type="text"
              name="hobby"
              value={user.hobby}
              onChange={handleInput}
              variant="filled"
            ></TextField>
          </Grid>
          <br />
          <Grid xs={0} md={9}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              style={{ marginLeft: 200 }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
