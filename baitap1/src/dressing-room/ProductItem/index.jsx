import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItem extends Component {
	onSelectedProduct=()=>{
		this.props.dispatch({			
			type: 'SELECT_PRODUCT',
			payload:{
				img:this.props.products.imgSrc_png,
				type: this.props.products.type,
			}
		})
	}
	render() {
		const {imgSrc_jpg,name} = this.props.products
		return (
			<div className="card mb-3">
				<img src ={imgSrc_jpg} />
				<div className="card-body">
					<p className="lead">{name}</p>
					<button onClick={this.onSelectedProduct} className="btn btn-success">Thử</button>
				</div>
			</div>
		)
	}
}
export default connect() (ProductItem)
