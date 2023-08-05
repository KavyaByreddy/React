import React, { Component } from 'react'

class Product1 extends Component {

    state = {
        p_Name: 'Iphone 13',
        p_Image: 'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90',
        price: 57999,
        qty: 1
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-9">
                            <table className='table'>
                                <thead>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.p_Name}</td>
                                        <td>
                                            <img src={this.state.p_Image} alt="" />
                                        </td>
                                        <td>{this.state.price}</td>
                                        <td> <button onClick={this.decrHandler}>-</button> {this.state.qty} <button onClick={this.incrHandler}>+</button> </td>
                                        <td> {this.state.qty * this.state.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product1
