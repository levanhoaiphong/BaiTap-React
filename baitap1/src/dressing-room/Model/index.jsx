import React, { Component } from 'react';
import './model.css'

export default class Model extends Component {
	render() {
		return (
			<div class="contain" style={{ background: "url(./assets/img/background/background_998.jpg)", }}>
				<div class="body" style={{ background: "url(./assets/img/allbody/bodynew.png)", }}></div>
				<div class="model" style={{ background: "url(./assets/img/model/1000new.png)", }}></div>
				<div class="bikinitop" style={{ background: "url(./assets/img/allbody/bikini_branew.png)", }}></div>
				<div class="bikinibottom" style={{ background: "url(./assets/img/allbody/bikini_pantsnew.png)", }}></div>
				<div class="feetleft" style={{ background: "url(./assets/img/allbody/feet_high_leftnew.png)", }}></div>
				<div class="feetright" style={{ background: "url(./assets/img/allbody/feet_high_rightnew.png)", }}></div>
			</div>
		);
	}
}
