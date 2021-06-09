import React, { Component } from 'react';
import ListLap from './ListLap';
import ListPhone from './ListPhone';
import './css/product.css'


class Product extends Component {
    render() {
        return (
            <div className="productList">
                <div className="listPhone">
                    <h1 className="text-center mt-5 mb-5">BEST SMARTPHONE</h1>
                    <ListPhone />
                </div>
                <div className="listLapTop mt-5 mb-4">
                    <h1 className="text-center mb-5">BEST LAPTOP</h1>
                    <ListLap />
                </div>
            </div>
        )
    }
}
export default Product