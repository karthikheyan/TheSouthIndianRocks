import React from 'react'

const AddProducts = () => {
  return (
    <div>
      <form className='addcategory-form' action="">
        <label htmlFor="">Product name</label>
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

export default AddProducts
