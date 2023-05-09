import React, { useEffect } from 'react'
import { useUserContext } from '../Context/useUserContext'

const Cart = () => {
  const {userDetails} = useUserContext();
  useEffect(()=>{
    fetch(`http://localhost:3000/tsir/purchase/cart/${userDetails._id}`)
    .then((res)=>{
      console.log(res);
    })
    // .then((data)=>{
    //   console.log(data)
    // })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Cart
