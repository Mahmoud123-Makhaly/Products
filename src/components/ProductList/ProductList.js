import React, { useEffect, useState } from 'react'
import "./ProductList.css"
import ProductItem from '../ProductItem/ProductItem';
const ProductList = () => {
    const[Products , setProducts] = useState([]);
    const[Categories , setCategories] = useState([]);
    const getAllProducts =async ()=>{
     await fetch(`https://fakestoreapi.com/products`).then((res)=>res.json()).then((data)=>setProducts(data))
 }
 //Get All Categories
 const GetAllCategories = ()=>{
  fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  .then(json=>setCategories(json))
 }
  useEffect(()=>{
    getAllProducts();
    GetAllCategories();
  },[])
  //Getproducts in a specific category
  const getProductIncategory = (catName)=>{
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))

  }
  const showAllProduct = ()=>{
    getAllProducts();
  }
  return (
    <div className='product-list py-5'>
    <div className='container'>
    <div className='categories-btns'>
    <button onClick={showAllProduct} className='btn btn-info'>All</button>
    {
      Categories.length?(
        Categories.map((item , index)=>{
return(
  <button key={index} onClick={()=>getProductIncategory(item)} className='btn btn-info'>{item}</button>
)
        })
      ):null
    }
    </div>
    <div className='row'>
   {
 Products.length?(
Products.map((item)=>{
return(
    <div className='col-lg-3 col-md-4 col-sm-6' key={item.id}>
    <ProductItem item={item}/>
    </div>
)
})
 ):<h3>Loading Data ....</h3>
 
   }
   

    </div>
    </div>
    </div>
  )
}

export default ProductList