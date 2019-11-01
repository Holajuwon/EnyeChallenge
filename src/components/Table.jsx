import React from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid
} from "@material-ui/core";

const Table = props => {
  const user = useSelector(state => state.users);
  let allUsers = user.flat();
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
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.hobby}</TableCell>
                <TableCell>
                  {item.userId === undefined
                    ? item.userId
                    : item.userId.slice(1, 15)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Grid>
    </Paper>
  );
};

export default Table;
