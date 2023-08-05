import React from 'react'

class Product extends React.Component {

    p_Name1 = "Iphone 13 mini"
    p_Price1 = 55000
    p_Color1 = ['Blue', 'Black', 'Red']
    p_Image1='https://img4.gadgetsnow.com/gd/images/products/additional/large/G306182_View_1/mobiles/smartphones/apple-iphone-13-mini-128-gb-blue-4-gb-ram-.jpg'
    p_Name = "Iphone 12 mini"
    p_Price = 45000
    p_Color = ['Blue', 'Black', 'Red']
    p_Image = 'https://img6.gadgetsnow.com/gd/images/products/additional/large/G306196_View_1/mobiles/smartphones/apple-iphone-13-mini-256-gb-red-4-gb-ram-.jpg'
    render() {
        return <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_Image1} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name1}</li>
                                <li className='list-group-item'>{this.p_Price1}</li>
                                <li className='list-group-item'>{this.p_Color1[0]}</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_Image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[2]}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Product