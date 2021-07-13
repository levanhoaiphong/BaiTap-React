import React, { Component } from 'react'
import Model from '../Model'
import GlassesList from '../GlassesList'
export default class Home extends Component {
	render() {
		return (
			<div>
				<Model/>
				<GlassesList/>
			</div>
		)
	}
}
