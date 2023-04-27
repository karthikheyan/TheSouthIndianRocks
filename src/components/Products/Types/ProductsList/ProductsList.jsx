import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

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
    <div>
        <div className='products-grid'>
          {productList ? productList.map((product)=>{
              const base64String = btoa(
              String.fromCharCode(...new Uint8Array(product.img.data.data))
              );
                return(<Link key={product._id} to="">
                    <div className="products-grid-box">
                        <h3>{product.pname}</h3>
                        <img src={`data:image/png;base64,${base64String}`} alt="image"/>
                        <p>{product.description}</p>
                    </div>
                </Link>)
          }
          ):<div>No Products to display</div>}
        </div>
    </div>
  )
}

export default ProductsList
