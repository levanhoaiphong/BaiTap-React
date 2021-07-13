import React, { Component } from 'react'

export default class GlassesItem extends Component {
	render() {
		console.log(this.props.list)
		return (
			<div className="card mb-3">
				<img style={{height:50}} src ={this.props.list.url} />
				<div className="card-body">
					<button className="btn btn-success">Thử</button>
				</div>
			</div>
		)
	}
}
