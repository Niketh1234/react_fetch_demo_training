import React, { useState } from 'react'


const AddDish2 = (props) => {

    const [id,setId] = useState('0');
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0);

    const dish ={
        id:id,
        name:name,
        price:price
    }


    const addHandler = () =>{
        props.showDishes(dish);
        setId('0')
        setName('')
        setPrice('0')
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
            
        </div>
    </div>
  )
}

export default AddDish2