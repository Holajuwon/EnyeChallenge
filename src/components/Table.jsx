import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid
} from "@material-ui/core";

const Table = props => {
  return (
    <Paper style={{ padding: 30, margin: 30, width: 500 }}>
      <Grid item>
        <TableHead style={{ display: "center" }}>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Hobby</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.hobby}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Grid>
    </Paper>
  );
};


const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Table);
