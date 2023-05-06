import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Gallery = () => {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tsir/category")
    .then((res)=>res.json())
    .then((data)=>{
      setCategories(data);
      console.log(data);
    });

  }, [])
  return (
    <div>
          <div>
        {categories ? categories.map((category)=>{
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(category.img.data.data))
          );
              return(<Link key={category._id} to={`/types/${category.cname}`}>
                  <div>
                      <img src={`data:image/png;base64,${base64String}`} alt="image"/>
                    </div>
              </Link>)
        }
        ):<div>No categories to display</div>}
          </div>
    </div>
  )
}

export default Gallery
