import React from 'react';
// import axios from 'axios';

export default class App extends React.Component {
  render() {
  	const { products } = this.props;
    return (
      <div>
        <h1>¡Universal App!</h1>
        <ul>
          {products && products.map(product => (
            <li key={product.id || product._id}>
            	<img src={product.image} width="200" />
            	{product.product} ${product.price}
          	</li>
          ))}
        </ul>
        <input onKeyDown={this.handleAddProduct} />
      </div>
    );
  }
}