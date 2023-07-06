import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetalis = () => {
    const [product, setProduct] = useState({})
    const {detalID}= useParams()
    console.log(detalID);
    useEffect(() => {
        fetch(`http://localhost:3000/products/${detalID}`)
        .then((res) => res.json())
        .then((product) => {
            console.log(product);
            setProduct(product);
        })
    },[]) 

  return(
    <div>
         {product &&
    (
        <div className='my-product m-4'>
            <div className='product-img'>
            <img  src={product.image} />
            </div>
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-desc'>{product.description}</p>
            <span className=' my-3'><sapan className='fw-bold fs-5' >Category:</sapan> {product.category}</span>
            <div className='fw-bold fs-5'>Price: {product.price}$</div>
            
            <div>
            <Link to='/' className='btn btn-secondary my-3'>All Products</Link>
            </div>
            
        </div>
    )
    
    }
    </div>
  )
}

export default ProductDetalis