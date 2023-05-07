import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import './ProductsList.css'
const ProductsList = () => {
  const params = useParams();
  let [productList, setProductList] = useState([]);
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    fetch(`http://localhost:3000/tsir/category/product/${params.type}`)
    .then((res)=>res.json())
    .then((data)=>{
      setProductList(data);
      setIsPending(false)
      setError(null)
    }).catch(err=> {
      setError(err.message)
      setIsPending(false)
    });

  }, [])
  return (
    <div className='products-list'>
      <h2>The products in {params.type} type</h2>
        <div className='products-list-grid'>
          {error && <p>{error}</p>}
          {!isPending ? !error ? (
            <>
              {productList ? productList.map((product)=>{
                return(
                <Link key={product._id} to="/purchase">
                    <div className="products-list-grid-box">
                        <h3>{product.pname}</h3>
                        <img src={product.img} alt="image"/>
                        <p>{product.description}</p>
                        <h4>PRICE: {product.price}/piece</h4>
                        <p>Ratings: {product.rating}</p>
                        <button>Order now</button>
                    </div>
                </Link>)
          }
          ):<div>No Products to display</div>}
            </>
          ): <></>: <p>Loading.......</p>}
        </div>
    </div>
  )
}

export default ProductsList
