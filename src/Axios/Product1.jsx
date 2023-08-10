import React from 'react'
import Axios from 'axios'
class Product1 extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={
            product:{}
        }
    }
    getProductHandler = ()=>{
            console.log("Test Case 123")
            //Axios.get().then().catch()
            Axios.get('https://dummyjson.com/products')
                  .then((response)=>{
                    console.log(response.data)
                    this.setState({
                        product:response.data
                    })
                  }).catch((err)=>{})
    }
    render(){
        return <div>
            <h2>Product Component</h2>
            <pre>{JSON.stringify(this.state)}</pre>
            <button onClick={this.getProductHandler}>Get Products</button>
        </div>
    }
}
export default Product1