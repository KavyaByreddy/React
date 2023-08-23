import React, { Component } from 'react'

 class ProductOne extends Component {
   state = {
        name: "Iphone 13",
        price: 45000,
        image: "Image Missing",
        qty: 1
    }
    incrHandler = () => {
        this.setState({qty:this.state.qty+1})
    }
    decrHandler = () => {
        this.setState({qty:this.state.qty-1})
    }
    render() {
        return (
            <>
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
                                        <td>{this.state.name}</td>
                                        <td>{this.state.image}</td>
                                        <td>{this.state.price}</td>
                                        <td> <i onClick={this.decrHandler} className='fa fa-minus-circle'></i> {this.state.qty} <i onClick={this.incrHandler} className='fa fa-plus-circle'></i> </td>
                                        <td>{this.state.qty * this.state.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductOne