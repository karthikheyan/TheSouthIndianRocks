import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

const Admin = () => {
  return(
    <div>
      <h3>Admin module</h3>
      <div className='admin-links'>
        <Link to='/admin/addcategory'>Add Category</Link>
        <Link to='/admin/addtype'>Add Type</Link>
        <Link to='/admin/addproduct'>Add Product</Link>
      </div>
    </div>
  )
}

export default Admin
