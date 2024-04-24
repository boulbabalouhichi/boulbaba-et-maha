import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addcontact } from '../../JS/ContactSlice';

const Addcontact = () => {
    const dispatch = useDispatch();
    const user=useSelector((store)=>store.user?.user)
    console.log(user)
    const [newcontact, setnewcontact] = useState({
        fullname:"",
        phone:"",
        address:"",
        avatar:"",
        iduser:user?._id,
    })

  return (
    <div className='box-add'>
        <input  type='text' placeholder="full Name" onChange={(e)=>setnewcontact({...newcontact,fullname:e.target.value})}/><br/>
        <input  type='text' placeholder="Adresse" onChange={(e)=>setnewcontact({...newcontact,address:e.target.value})}/><br/>
        <input  type='text' placeholder="phone number" onChange={(e)=>setnewcontact({...newcontact,phone:e.target.value})}/><br/>
        <input  type='text' placeholder="avatar" onChange={(e)=>setnewcontact({...newcontact,avatar:e.target.value})}/><br/>
        <button onClick={()=>dispatch(addcontact(newcontact))}>Add Contact</button>
      
    </div>
  )
}

export default Addcontact
