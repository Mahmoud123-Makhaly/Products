import React from 'react'
import "./ProductItem.css";
import { Link } from 'react-router-dom';
const ProductItem = ({item}) => {
  return (
  
    <div className="card" >
    <img src={item.image} className="card-img-top" alt={item.title}/>
    <div className="card-body">
      <h5 className="card-title">{item.category}</h5>
      <p className="card-text">price: {item.price}</p>
      <Link to={`/product/${item.id}`} href="#" className="btn btn-primary">Show Details</Link>
    </div>
  </div>
 
  )
}

export default ProductItem