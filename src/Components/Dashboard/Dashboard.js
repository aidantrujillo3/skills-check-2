import React, {Component} from 'react'
import Product from '../Product/Product'



class Dashboard extends Component {
    render() {
        return (
            
            <div>
                {this.props.inventoryList.map(element => {
                    return (
                        <Product />
                    )
                })}
            </div>
            
            
        )
        
    }
}

export default Dashboard