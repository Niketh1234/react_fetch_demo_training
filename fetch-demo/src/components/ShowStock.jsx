import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowStock = () => {
  
  const [stocks,setStocks] = useState([]);
    
  useEffect(()=>{
    axios.get("http://localhost:3000/stocks").then((response) => {
      setStocks(response.data);
    });

  })

  
  return (
    <div>

     
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Initial Price</th>
            <th>Face Value</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.company}</td>
              <td>{stock.initialPrice}</td>
              <td>{stock.faceValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStock;
