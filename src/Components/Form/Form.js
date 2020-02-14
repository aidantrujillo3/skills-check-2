import React, {Component} from 'react'



class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
        
    }
            handleName(event) {
                this.setState({name: event.target.value})
            }

            handlePrice(event) {
                this.setState({price: event.target.value})
            }

            handleImage(event) {
                this.setState({imgurl: event.target.value})
            }

            handleCancel(event) {
                this.setState({
                    name: "",
                    price: 0,
                    imgurl: ""
                })
            }

            handleAdd(){
                const {name, price, imgurl} = this.state
            }

    render() {
        return (
            
            <div>
                Form
                <input type="text" name="Product Name" onChange={this.handleName.bind(this)}></input>
                <input type="number" name="Price" onChange={this.handleName.bind(this)}></input>
                <input type="text" name="Image Url" onChange={this.handleImage.bind(this)}></input>

                <button onClick={this.handleCancel.bind(this)}>Cancel</button>
                <button onClick={this.handleAdd.bind(this)}>Add To Inventory</button>
                
            
                
                </div>

            

        )
    }
}

export default Form