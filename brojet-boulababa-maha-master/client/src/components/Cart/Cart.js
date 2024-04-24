import React from 'react'
import  './Cart.css'
import { useDispatch } from 'react-redux';
import { deletecontact } from '../../JS/ContactSlice';

function Cart({el}) {
  const dispatch = useDispatch();
  return (
    <div className='cart'>
       <img src={el.avatar} alt='photo'/> 
       
       <p> { el.address}</p>
       <p> { el.fullname}</p>
       <p> { el.phone}</p>
        <button onClick={()=>dispatch(deletecontact(el._id))}>delete</button> 
    </div>
  )
}

export default Cart
