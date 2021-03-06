import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import ChairItem from "../ChairItem";

class ChairList extends Component {
	render() {
		console.log(this.props.listChair);
		return (
			<Grid container spacing={2}>
				{this.props.listChair.map((item) => (
					<Grid  item  md={2}>
						<ChairItem  chairs={item} />
					</Grid>
				))}
			</Grid>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		listChair: state.chairReducer.listChair,
	};
};
export default connect(mapStateToProps)(ChairList);
