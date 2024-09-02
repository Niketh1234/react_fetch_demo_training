import React, { useState } from 'react'

import { ShowDish } from '../showDish/ShowDish';

const AddDish = (props) => {

    const [id,setId] = useState('0');
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0);
    const [dishes,setDishes] = useState([])
    const dish ={
        id:id,
        name:name,
        price:price
    }


    const addHandler = () =>{
        setDishes([...dishes,dish])
        setId('0')
        setName('')
        setPrice('0')
    }
    const showCount = (e)=>{
        alert(e)
    }

  return (
    <div>
        <div className='form-container'>

        <div className="form-group bg-primary">
            Id <input type="text" value={id} onChange={(e)=>{
                setId(e.target.value);
            }} />
        </div>
        <div className="form-group ">
            Name <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value);
            }} />
        </div>
        <div className="form-group ">
            Price <input type="text" value={price} onChange={(e)=>{
                setPrice(e.target.value);
            }} />
        </div>
        <div className="form-group ">
            <button className='btn btn-success' onClick={addHandler}>Add</button>
        </div>
        </div>
        <div>
            <ShowDish dishes = {dishes} showCount = {showCount}/>
        </div>
    </div>
  )
}

export default AddDish