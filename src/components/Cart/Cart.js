import React, { Component } from 'react'
import Title from '../Title'
import { ProductConsumer } from '../../Context'
import styled from 'styled-components'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (     
     <section>
      <ProductConsumer>
        {value=>{
          const {cart}  = value;
        if(cart.length>0){
          return(
            <React.Fragment>
            <Title name="your" title="cart">
            </Title>
            <CartColumns/>
            {/* Product List */}
            <CartList value={value}/>
            <CartTotals value={value}/>

          </React.Fragment>   
          )
         
          } 
          else{
            return (
              <EmptyCart/>
            )
          }
        }}
        
      </ProductConsumer>
      
     </section>
    )
    
  }
}

