import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from "@material-ui/core";

class ChairListReserved extends Component {
	render() {

		return (
			<Grid container spacing={2}>
					<Grid  item  md={3}>
						<Typography color="primary"></Typography>
					</Grid>
			</Grid>
		)
	}
}
export default ChairListReserved
