import axios from "axios";

export default class StockRepo {
  addStock = (s) => {
    axios.post("http://localhost:3000/stocks", s);
  };

  getStocks = () => {
    axios.get("http://localhost:3000/stocks").then((response) => {
      return response.data;
    });
  };
}
