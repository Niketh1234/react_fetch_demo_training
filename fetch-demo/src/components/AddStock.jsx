import React, { useState } from 'react';
import StockRepo from '../repository/stockRepo';
// import axios from 'axios';


const AddStock = () => {

  let s = new StockRepo();

  const [id, setId] = useState('0');
  const [company, setCompany] = useState('');
  const [initialPrice, setInitialPrice] = useState('0');
  const [faceValue, setFaceValue] = useState('0');

  const stock = {
    id: id,
    company: company,
    initialPrice: initialPrice,
    faceValue: faceValue,
  };

  const addHandler = () => {
    s.addStock(stock);
    setId('')
    setCompany('')
    setInitialPrice('')
    setFaceValue('')
  };

  return (
    <div className='container'>
      id: <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> <br />
      company: <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} /> <br />
      initialPrice: <input type="text" value={initialPrice} onChange={(e) => setInitialPrice(e.target.value)} /> <br />
      faceValue: <input type="text" value={faceValue} onChange={(e) => setFaceValue(e.target.value)} /> <br />
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default AddStock;
