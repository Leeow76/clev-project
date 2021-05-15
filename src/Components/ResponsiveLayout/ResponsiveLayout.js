import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import withWidth from "@material-ui/core/withWidth";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
  },
  tabletOrientationGrid: {
    "@media (orientation: portrait)": {
      flexDirection: `column`,
    },
  },
}));

const ResponsiveLayout = (props) => {
  const classes = useStyles();

  // Grid items DRY
  const n = 6;
  const gridItems = [...Array(n)].map((e, i) => (
    <Grid key={i} item>
      <Paper className={classes.paper}>Content</Paper>
    </Grid>
  ));

  return (
    <Container className={classes.container}>
      <Grid
        container
        className={props.width === "sm" ? classes.tabletOrientationGrid : null}
      >
        {gridItems}
      </Grid>
    </Container>
  );
};

export default withWidth()(ResponsiveLayout);
