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
  const users: Array<any> = useTypedSelector((state) => state.user.users);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_USERS",
    });
  }, []);

  return (
    <Autocomplete
      options={users}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          label="Select your name"
          fullWidth
          variant="outlined"
          {...params}
        />
      )}
      renderOption={(option) => (
        <ListItem
          onClick={() => dispatch({ type: "SET_USER", payload: option })}
        >
          <ListItemAvatar>
            <Avatar src={option.dp} />
          </ListItemAvatar>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
    />
  );
};
