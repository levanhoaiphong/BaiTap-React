import React, { Component } from 'react'

class ProductItem extends Component {
	render() {
		const {imgSrc_jpg,name} = this.props.products
		return (
			<div className="card mb-3">
				<img src ={imgSrc_jpg} />
				<div className="card-body">
					<p className="lead">{name}</p>
					<button className="btn btn-success">Thử</button>
				</div>
			</div>
		)
	}
}
export default ProductItem
