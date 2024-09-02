import React, { useState } from 'react';
import AddDish2 from '../addDish/AddDish2';

export const ShowDish2 = (props) => {

    const [dish,setDishes] = useState([]);

    const showDishes = (e)=>{
        setDishes([...dish,e])
    }
    
    
  return (
    <div>
        <AddDish2 showDishes = {showDishes}/>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dish.map((dish) => (
            <tr key={dish.id}>
              <td>{dish.id}</td>
              <td>{dish.name}</td>
              <td>{dish.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
        

    </div>
  );
};

export default ShowDish2;
