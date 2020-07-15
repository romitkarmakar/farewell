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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  text: {
    textTransform: "capitalize",
    fontWeight: 700
  }
}))

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users: Array<any> = useTypedSelector((state) => state.user.users);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_USERS",
    });
  }, []);

  return (
    <div style={{ margin: "0px 16px " }}>
      <h2 style={{ fontFamily: "'Sora', sans-serif" }}>
        Maybe know who this is is ?
      </h2>
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
            <ListItemText primary={option.name} classes={{
              primary: classes.text
            }} />
          </ListItem>
        )}
      />
    </div>
  );
};
