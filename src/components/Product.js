import React from 'react'

function Product({product}) {
  return (
    <div>
        <h2>
        This is Prduct ID:- {product.productId} <br/> Price:- {product.productsPrice} <br/> Name of the Product:- {product.productName} <br/> Comapany:- {product.companyName}
        </h2>
    </div>
  )
}

export default Product 


