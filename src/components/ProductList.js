import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from '../Context';

export default class ProductList extends Component {

  // we can access the products from here.
  render() {

    return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          {/* Map method: Problem Access to the information. (all of the componnets have that information)*/}
          {/* Data : Consumer */}
          
          <div className="row">
            <ProductConsumer>
              {(value)=>{
                return value.products.map(product=>{
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
            <div/>

          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
