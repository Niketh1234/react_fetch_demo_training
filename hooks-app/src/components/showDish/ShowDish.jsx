import React from 'react';

export const ShowDish = (props) => {

    const countHandler = ()=> {
        props.showCount(props.dishes.length);
    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.dishes.map((dish) => (
            <tr key={dish.id}>
              <td>{dish.id}</td>
              <td>{dish.name}</td>
              <td>{dish.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

          <div>
            <button onClick={countHandler}>Click me</button>
          </div>

    </div>
  );
};
