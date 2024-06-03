import React from 'react'


const ProductCallbackPractice =  React.memo(({ name, addToCart }) => {
  
  console.log(`${name} product component is re-rendered`);
  return (
    <div className='product' >
        <h1>{name}</h1>
        <button onClick={addToCart} >Add to cart</button>
    </div>
  )
})

export default ProductCallbackPractice