import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../common/model/RoutePath";

export const MovieNotFound: FC = () => {
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Grid container>
        <Grid item xs={12} mx="25%">
          <Typography variant="h5"> Oh no, your movie was not found :(</Typography>
        </Grid>
        <Grid item xs={12} mx="25%" textAlign="center">
          <Link to={RoutePath.ROOT}>Try searching for another one</Link>
        </Grid>
      </Grid>
    </Box>
  );
};