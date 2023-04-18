import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import ProductDetailsItem from './ProductDetailsItem';
const ProductDetails = () => {
    const[Details , setDetails] = useState([]);
    const[showBtn , setShowBtn] = useState(false)
    const params = useParams();
    const API_URL = `https://fakestoreapi.com/products/${params.id}`
   useEffect(()=>{
    const fetchedData = async()=>{
        const api = await fetch(API_URL);
        const res = await api.json();
        setDetails(res)
    }
    (async()=>await fetchedData())()
   },[])
  return (
  <ProductDetailsItem Details={Details} showBtn={showBtn}/>
  )
}

export default ProductDetails