import React, { useState } from 'react'
import { useEffect } from 'react';
const AddType = () => {
    const [categories, setCategories] = useState([]);
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
      <form className='addcategory-form' action="">
      <label htmlFor="">Select category</label>
      <select>
      {categories && categories.map((category)=>{
        return(
            <option>{category.cname}</option>
        )
      })}

      </select>
        <label htmlFor="">Type name</label>
        <input
        type="text" 
        required
        />

        <label htmlFor="">Description</label>
        <textarea 
        type="text"
        required
        />

        <label htmlFor="">Add Image file for thumbnail</label>
        <input type="file" />
         <input 
         type="submit"
         />
      </form>
    </div>
  )
}

export default AddType
