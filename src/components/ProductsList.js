import React from 'react'
import Product from './Product'


function ProductsList() {

//   const products = ['Laptop', 'Redmi 10', 'BackPack']

//   const productsList = products.map(products => <h2>{products}</h2>)

  const products = [

      {
        productId: 11101,
        productsPrice: 1000,
        productName: 'Pavillion',
        companyName: 'HP'
      },
      {
        productId: 11102,
        productsPrice: 2000,
        productName: 'Note 10',
        companyName: 'Ziomi'
      },
      {
        productId: 11103,
        productsPrice: 3000,
        productName: 'BackPack23',
        companyName: 'Fastrack'
      }

  ]

  const productsList = products.map(product => <Product product={product} >{product}</Product> )

  return (<div>{productsList}</div>)
}

export default ProductsList 

