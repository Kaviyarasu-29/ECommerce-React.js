import React from 'react'

const Cart = () => {
  return (
    <div>
      <h1>crad page</h1>
    </div>
  )
}

export default Cart










// import React, { useEffect, useState } from 'react'
// import './Cart.css';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const Card = ({ cart, setCart }) => {
//   const [total, setTotal] = useState(0)
//   useEffect(() => {

//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//       total += cart[i].price
//     }
//     setTotal(total)
//     // setTotal(cart.reduce(acc,curr /*accumulator,currentValue*/ ))
//   }, [cart]);


//   const removeCart = ( id ) => {
//     const updatedCart = cart.filter(product => product.id !== id);
//     setCart(updatedCart);
//     // setCart(cart.filter((c) => c.id !== id))
//   }


//   return (
//     <div className='poetsen-one-regular'>
//       <h1 className="cartHeading">List Of Cart Products</h1>

//       <div className="cartProduct">
//         {cart.map((product) => (
//           <div className="selectedProduct" key={product.id} >
//             <div className="productImg ">
//               <img src={product.productImage} alt="" />
//             </div>
//             <div className="cartProduct-details">
//               <h2 className="productName cartProduct-details-text">Product Name : {product.productName}</h2>
//               <h3 className="productPrice cartProduct-details-text">Price : ${product.price}</h3>
//               <Button onClick={() => removeCart(product.id)}  className="removeCart cartProduct-details-text"><span>Remove</span></Button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h2 className="totalPrice">Total Amount : ${total}</h2>
//     </div>
//   )
// }

// export default Card


