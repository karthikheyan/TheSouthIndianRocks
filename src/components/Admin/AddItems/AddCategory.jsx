import React, { useState } from 'react'
import './AddCategory.css'

const AddCategory = () => {
  const [cname, setCname] = useState("");
  const [description, setDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("cname", cname);
    formData.append("description", description);
    formData.append("categoryImage", categoryImage);

    console.log(formData.get('cname'))
    fetch("http://localhost:3000/tsir/category", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleFileChange(event) {
    setCategoryImage(event.target.files[0]);
  }
  return (
    <div>
      <form className='addcategory-form' onSubmit={handleFormSubmit}>
        <label htmlFor="">Category name</label>
        <input
        type="text" 
        vlaue={description}
        onChange={(e)=>setCname(e.target.value)}
        required
        />

        <label htmlFor="">Description</label>
        <textarea 
        type="text"
        onChange={(e)=>setDescription(e.target.value)}
        required
        />

        <label htmlFor="">Add Image file for thumbnail</label>
        <input 
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        />
         <input type="submit"/>
      </form>
    </div>
  )
}

export default AddCategory
