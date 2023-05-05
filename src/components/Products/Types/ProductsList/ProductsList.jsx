import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import './ProductsList.css'
const ProductsList = () => {
  const params = useParams();
  let [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/tsir/category/product/${params.type}`)
    .then((res)=>res.json())
    .then((data)=>{
      setProductList(data);
    });

  }, [])
  return (
    <div className='products-list'>
        <div className='products-list-grid'>
          {productList ? productList.map((product)=>{
              const base64String = btoa(
              String.fromCharCode(...new Uint8Array(product.img.data.data))
              );
                return(<Link key={product._id} to="/purchase">
                    <div className="products-list-grid-box">
                        <h3>{product.pname}</h3>
                        <img src={`data:image/png;base64,${base64String}`} alt="image"/>
                        <p>{product.description}</p>
                        <h4>PRICE: {product.price}/piece</h4>
                        <p>Ratings: {product.rating}</p>
                        <Link to="/purchase">Order now</Link>
                    </div>
                </Link>)
          }
          ):<div>No Products to display</div>}
        </div>
    </div>
  )
}

export default ProductsList
