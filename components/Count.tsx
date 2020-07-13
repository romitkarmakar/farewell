import { Typography } from "@material-ui/core";

interface IProps {
  clicked: number;
}

export default ({ clicked }: IProps) => {
  return <Typography>Button is clicked {clicked} times</Typography>;
};
