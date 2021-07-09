import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Button } from "@material-ui/core";

class ChairListReserved extends Component {
	renderHTML =()=>{
		return this.props.listChair.map((chairs,index)=>{
			return <Container key={index}>
				<Typography variant="h6">Ghế: {chairs.TenGhe} <Button onClick ={()=>this.props.deleteChair(index)} size="large"  color="secondary">[Hủy]</Button ></Typography>
				
			</Container>
			
		})
	}
	render() {
		return (
			<Container>
				<Typography variant="h3" color="primary">Danh Sach Ghe Da Dat (0)</Typography>
				{this.renderHTML()}
			</Container>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		listChair: state.chairReducer.listChairReserved
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		deleteChair: (index) =>{
			const action = {
				type: "DELETE_CHAIRS",
				index,
			};
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ChairListReserved)
