import React from 'react'

function ProductTwo() {
  let [product,setProduct]=React.useState({
        name: "Iphone 13",
        price: 45000,
        image: "Image Missing",
        qty: 1
    })
let incrHandler = ()=>{
  setProduct({ ...product,  qty:product.qty +1})
}
let decrHandler = ()=>{
  setProduct({...product, qty:product.qty -1})
}
return (
            <>
                <div className="container">
                    <pre>{JSON.stringify(product)}</pre>
                    <div className="row">
                        <div className="col-9">
                            <table className='table'>
                                <thead className='bg-primary text-white'>
                                    <th> Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.image}</td>
                                        <td>{product.price}</td>
                                        <td> <i onClick={decrHandler} className='fa fa-minus-circle'></i> {product.qty} <i onClick={incrHandler} className='fa fa-plus-circle'></i> </td>
                                        <td>{product.qty * product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
  }

export default ProductTwo