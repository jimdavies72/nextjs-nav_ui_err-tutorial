import React from 'react'

const ProductDetails = ({ 
  params, 
}: { 
  params: { productid: string }
}) => {
  return (
    <div>
      <h1>Product Details {params.productid}</h1>
    </div>
  )
}

export default ProductDetails
