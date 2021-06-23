import React, { Component } from 'react'
import Model from '../Model'
import ProductList from '../ProductList'

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="text-center">Bai Tap Gio Hang</h1>
				<Model/>
				<ProductList/>
			</div>
		)
	}
}
