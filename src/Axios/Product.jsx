import React from 'react'
import Axios from 'axios'
class Product extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }
    getProductHandler = ()=>{
            console.log("Test Case 123")
            //Axios.get().then().catch()
            Axios.get('https://dummyjson.com/products')
                  .then((response)=>{
                    console.log(response.data)
                    this.setState({
                        products:response.data.products
                    })
                  }).catch((err)=>{})
    }
    render(){
        return <div>
            <h2>Product Component</h2>
            <pre>{JSON.stringify(this.state.products)}</pre>
            <button onClick={this.getProductHandler}>Get Products</button>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <table className='table'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Image</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.products.length >0? <>
                                {
                                    this.state.products.map((product,index)=>{
                                        return <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td><img  src={product.images[0]} width={'200'} height={'150'} /></td>
                                        </tr>
                                    })
                                }
                                </>:<p>No Data</p> 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Product