import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";

const UserForm = props => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    hobby: ""
  };
  const [user, setUser] = useState(initialFormState);
  const [error, setError] = useState({ error: "" });
  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError({ error: " " });
    if (user.firstName && user.lastName && user.birthday) {
      setUser(initialFormState);
      props.onSubmit({
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        age: user.age,
        hobby: user.hobby
      });
    } else {
      setError({ error: "Please Fill all required inputs" });
    }
  };

  return (
    <Paper style={{ margin: 30, padding: 30, width: 300 }}>
      <p style={{ color: "red" }}>{error.error}</p>
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
          <Grid xs={1} md={9} item>
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
