import React from 'react'
import { Link } from 'react-router-dom';

const ProductDetailsItem = ({Details,showBtn}) => {
  return (
    <div>
    <div className='product-details'>
    <div class="card"  >
    <img src={Details.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{Details.category}</h5>
      <p class="card-text">{Details.title}</p>
      <h6 class="card-text">Price: {Details.price}$</h6>
      {
        showBtn&&<Link to="/" href="#" class="btn btn-primary">Go Home</Link>

      }
    </div>
  </div>
    </div>
    </div>
  )
}

export default ProductDetailsItem