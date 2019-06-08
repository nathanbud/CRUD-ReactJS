import React, { Component } from 'react';
import './App.css';

//Components
import ProductItem from './component/ProductItem'

const products = [
  {
    id: 1,
    name: 'Ipad',
    price: 200
  },
  {
    id: 2,
    name: 'Macbook Pro',
    price: 2000
  }
  
]

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: []
    };
    this.onDelete = this.onDelete.bind(this);

  }

 

  // onDelete = this.onDelete.bind(this);

  componentWillMount(){
    this.getProducts();
  }

  getProducts(){
    const products = JSON.parse(localStorage.getItem('products')); 
    this.setState({products});
  }

  onDelete(name){
    console.log(name);
  }

  render(){
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
this.state.products.map(product =>{
  return(
    <ProductItem key = {product.id} {...product} onDelete = {this.onDelete}/>
  );
})
          
        }
          
        
      </div>
      
    );
  }
}

export default App;
