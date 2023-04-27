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
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(type.img.data.data))
          );
              return(<Link key={type._id} to={`/productslist/${type.pname}`}>
                  <div className="products-grid-box">
                      <h3>{type.pname}</h3>
                      <img src={`data:image/png;base64,${base64String}`} alt="image"/>
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
