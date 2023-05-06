import React from 'react'
import './AddCategory.css'

const AddCategory = () => {
  return (
    <div>
      <form className='addcategory-form' action="">
        <label htmlFor="">Category name</label>
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

export default AddCategory
