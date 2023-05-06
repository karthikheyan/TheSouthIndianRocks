import React, { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'

const Types = () => {
  const params = useParams();
  let [types, setTypes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/tsir/category/type/${params.category}`)
    .then((res)=>res.json())
    .then((data)=>{
      setTypes(data);
    });

  }, [])
  return (
    <div>
        <div className='products-grid'>
        {types ? types.map((type)=>{
              return(<Link key={type._id} to={`/productslist/${type.tname}`}>
                  <div className="products-grid-box">
                      <h3>{type.tname}</h3>
                      <img src={type.img} alt="image"/>
                      <p>{type.description}</p>
                  </div>
              </Link>)
        }
        ):<div>No categories to display</div>}
          </div>
    </div>
  )
}

export default Types
