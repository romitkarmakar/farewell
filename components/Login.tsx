import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../lib/reducers";

export default () => {
  const dispatch = useDispatch();
  const users: Array<string> = useTypedSelector((state) => state.user.users);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_USERS",
    });
  }, []);

  return (
    <Autocomplete
      options={users}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          label="Enter your name"
          fullWidth
          variant="outlined"
          {...params}
        />
      )}
      renderOption={(option) => (
        <ListItem
          button
          onClick={() => dispatch({ type: "SET_USER", payload: option })}
        >
          <ListItemAvatar>
            <Avatar>{option[0].toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={option} />
        </ListItem>
      )}
    />
  );
};
