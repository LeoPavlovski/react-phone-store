import React, { Component } from 'react'
import { storeProducts,detailProduct } from './data';

// ContextAPI : Comes from straight from react

const ProductContext = React.createContext();
//Provider -> Provide the information for the application
//Consumer -> Use the information (consumer)


 class ProductProvider extends Component {
state={
    products:[],
    detailProduct:detailProduct,
    //Because we need to get the items in the cart.
    cart:[],
    modalProduct:detailProduct,
    modalOpen:false,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
}
componentDidMount(){    
    this.setProducts();
}

// Getting the values. ( fresh set of values instead of copying them)

setProducts = ()=>{
    let tempProducts = [];
    //Coping the valeues, and not referencing them
    storeProducts.forEach(item=>{
        const singleItem ={...item};
        tempProducts = [...tempProducts, singleItem]
    })
    this.setState(()=>{
        return {products:tempProducts}
    })
}
getDetails =()=>{
    console.log("Hello from Details")
}
//To get the actuall index of the item.
addToCart = id =>{
    //get all of the items
    //get the index
    //get the particular product with the correct index.
    //change the incart value,price and total (count) also.
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product =tempProducts[index];
    product.inCart=true;
    product.count=1;
    const price = product.price;
    product.total=price;
    this.setState(()=>{
        return {products:tempProducts ,cart:[...this.state.cart,product]};
    },()=>{ 
        this.addTotals();
    })
}

openModal=id=>{
    const product = this.getItem(id);
    this.setState(()=>{
        return{modalProduct:product, modalOpen:true}
    })
}

closeModal =()=>{
    this.setState(()=>{
        return {modalOpen:false}
    })
}

getItem =(id)=>{
    const product =this.state.products.find(item=>item.id===id);
    return product;
}
handleDetail = (id)=>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {detailProduct:product}
    })
}
//Incrementing the item
//Removing the item 
//Decrementing
 increment = (id)=>{
    //Basically we need to increment the item.
    //Total is going to get bigger , and the number of the item's (count) will get bigger too.
    //But first we need to get the index of the correct element
    
    let tempCart = [...this.state.cart];
   const SelectItem = tempCart.find(item=>item.id===id);
   const index =tempCart.indexOf(SelectItem);
   const product = tempCart[index];
   product.count = product.count+1;
   product.total =product.count*product.price;
   
   this.setState(()=>{
    return {
        cart:[...tempCart]
    }
   },()=>{
    //Counteed exactly when they are changed. Really important.
    this.addTotals();
   })
   
 }
 decrement = (id)=>{
    let tempCart = [...this.state.cart];
    const selectItem = tempCart.find(item=>item.id===id);
    const index = tempCart.indexOf(selectItem);
    const product = tempCart[index];
    product.count =product.count-1;
    if(product.count===0){
       this.removeItem(id);
    }
    else{
        product.total=product.count*product.price;
    

        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{
            this.addTotals();
        })    
    }
    
 }  
 removeItem =(id)=>{
    let tempProducts = [...this.state.products];
    let tempCart =[...this.state.cart]
    
   tempCart=tempCart.filter(item=>item.id!==id);
   const index =tempProducts.indexOf(this.getItem(id));
   let removedProduct =tempProducts[index];
   removedProduct.inCart=false;
   removedProduct.count=0;
   removedProduct.total=0;

   this.setState(()=>{
    return {
        cart:[...tempCart],
        products:[...tempProducts]
    }
   },()=>{
    this.addTotals();
   })
 }
 clearCart = ()=>{
   this.setState(()=>{
    return {cart:[]};
   },()=>{
    this.setProducts();
    this.addTotals();
   })
 }
 addTotals=()=>{
    //Adding the totals
    let subTotal =0;
    this.state.cart.map(item=>(subTotal+=item.total));
    let tempTax =subTotal*0.1;
    const tax =parseFloat(tempTax.toFixed(2));
    let total = subTotal+tax;
    this.setState(()=>{
        return {
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total
        }
    })
 }

render() {
    // Value can be an object
    return(
<ProductContext.Provider value={{
   ...this.state,
   handleDetail:this.handleDetail,
   addToCart:this.addToCart,
   openModal:this.openModal,
   closeModal:this.closeModal,
   increment:this.increment,
   decrement:this.decrement,
   removeItem:this.removeItem,
   clearCart:this.clearCart
}}>
        {/* Return the children */}
        {this.props.children}
    </ProductContext.Provider> 
    )
    }
}

const ProductConsumer = ProductContext.Consumer;
export{ProductProvider,ProductConsumer};