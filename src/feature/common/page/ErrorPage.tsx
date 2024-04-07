import { useRouteError } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Grid container mt="25%" mx="25%">
      <Grid item xs={12}>
        <Typography variant="h5">Oh no! :(</Typography>
      </Grid>
      <Grid item xs={12}>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </Grid>
    </Grid>
  );
};