import React, { Component } from 'react'
import { connect } from 'react-redux'

class GlassesItem extends Component {
	onSelectedProduct = () =>{
		this.props.dispatch({
			type: 'SELECT_GLASSES',
			payload:this.props.list
		})
	}
	render() {
		console.log(this.props.list)
		return (
			<div className="card mb-3">
				<img style={{height:50}} src ={this.props.list.url} />
				<div className="card-body">
					<button onClick={this.onSelectedProduct} className="btn btn-success">Thử</button>
				</div>
			</div>
		)
	}
}

export default connect()(GlassesItem)