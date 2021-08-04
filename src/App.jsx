import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Coin from './Components/Coin';
import './App.css';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false&price_change_percentage=0%2C01h';

function getFilteredCoins(coins, search) {
  return coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
}

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getCoinsData = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  useEffect(() => {
    const intervalID = setInterval(getCoinsData, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = getFilteredCoins(coins, search);

  return (
    <div>
      <form>
        <input
          className="inputField"
          type="text"
          onChange={handleChange}
          placeholder="Search coin"
        />
      </form>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
