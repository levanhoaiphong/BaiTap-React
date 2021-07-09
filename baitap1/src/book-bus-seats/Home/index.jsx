import React, { Component } from "react";
import ChairList from "../ChairList";
import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import ChairListReserved from "../ChairListReserved";
import style from './style';

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <Container maxWidth="lg">
        <Typography variant="h2" align="center">
          Đặt Vé Xe Bus
        </Typography>
       <div className={classes.root}>
          <Grid conatiner>
          <Grid item xs={12} md={5}>
            <Typography color="textSecondary" className={classes.bgBackGroud} variant="h5" align="center" gutterBottom>
              Tài xế
          </Typography>
            <ChairList />
          </Grid>
          <Grid item xs={12} md={7}>
            <ChairListReserved />
          </Grid>
        </Grid>
       </div>
      </Container>
    );
  }
}
export default (withStyles(style)(Home));
