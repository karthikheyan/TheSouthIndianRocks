import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tsir/category")
    .then((res)=>res.json())
    .then((data)=>{
      {data && data.map((d)=>{
        const base64String = btoa(String.fromCharCode(...new Uint8Array(d.img.data.data)));
        d.img = base64String;
      })}
        setCategories(data);
    });

  }, [])

    return (
    <div className='products'>
      <h2>Our Products</h2>
      <p>The products produced by the South Indian Rocks including these</p>
      <div className='products-grid'>
        {categories ? categories.map((category)=>{
              return(<Link key={category._id} to={`/types/${category.cname}`}>
                  <div className="products-grid-box">
                      <h3>{category.cname}</h3>
                      <img src={`data:image/png;base64,${category.img}`} alt="image"/>
                      <p>{category.description}</p>
                  </div>
              </Link>)
        }
        ):<div>No categories to display</div>}
          </div>
    </div>
  )
}

export default Products
