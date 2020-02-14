import React, {Component} from 'react'



class Product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>Product
                <div>
                    {this.props.product.name}
                    {this.props.product.price}
                    {this.props.product.imgurl}
                </div>
            </div>
            
        )
    }
}

export default Product