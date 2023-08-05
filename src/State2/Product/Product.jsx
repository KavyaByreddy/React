import React, { Component, Fragment } from 'react'

class Product extends Component {
    state = {
        product: {
            name: "Iphone 13",
            price: 45000,
            image: "Image Missing",
            qty: 1
        },
        msg: "Hello"
    }
    incrHandler = () => {
        this.setState({
            product: {

                qty: this.state.product.qty + 1
            }
        })
    }
    decrHandler = () => {
        this.setState({

        })
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-9">
                            <table className='table'>
                                <thead className='bg-primary text-white'>
                                    <th> Name</th>
                                    <th>Iamge</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product.name}</td>
                                        <td>{this.state.product.image}</td>
                                        <td>{this.state.product.price}</td>
                                        <td> <i onClick={this.decrHandler} className='fa fa-minus-circle'></i> {this.state.product.qty} <i onClick={this.incrHandler} className='fa fa-plus-circle'></i> </td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product