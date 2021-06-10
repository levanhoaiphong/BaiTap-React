import React, { Component } from 'react';
import ListLap from './ListLap';
import ListPhone from './ListPhone';
import './css/product.css'


class Product extends Component {
    render() {
        return (
            <div className="listProduct">
                <div className="listPhone">
                    <h1 className="text-center mt-5 mb-5">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListPhone />
                        </div>
                    </div>
                </div>
                <div className="listLapTop mt-5 mb-4">
                    <h1 className="text-center mb-5">BEST LAPTOP</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListLap />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListLap />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListLap />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ListLap />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Product