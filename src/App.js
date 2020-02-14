import React, {Component} from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventoryList: [
        {
          id: 1,
          name: "Shoes",
          price: 20,
          imgurl: "placeholder-url"
        },

        {
          id: 2,
          name: "Pants",
          price: 50,
          imgurl: "placeholder-url"
        },
        {
          id: 3,
          name: "Shirt",
          price: 30,
          imgurl: "placeholder-url"
        }
      ]


    }
  }
  render() {
    return (
      <div className="temp">
      <Dashboard inventoryList={this.state.inventoryList}/>
      <Form />
      <Header />

      

      </div>
    )
  }
}

export default App


