import React, { Component } from 'react';
import "./css/footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h1 className="mt-4 text-center ">PROMOTION</h1>
                <div className="container bg-light mb-5 pt-5 pb-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_1.png" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_2.png" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_3.jpg" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer