import PropTypes from 'prop-types';
import React from 'react';
import './Coin.css';

const Coin = ({
  name, price, symbol, image,
}) => (
  <div className="cryptoCoin">
    <img src={image} alt={`${name}`} className="CoinLogo" />
    <div coinName="coinNameWrap">
      <h1 className="coinName">{name}</h1>
      <p className="coinSymbol">{symbol}</p>
    </div>
    <p className="coinPrice">
      $
      {price}
    </p>
  </div>
);

Coin.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  symbol: PropTypes.string,
};

Coin.defaultProps = {
  image: '',
  name: '',
  price: '',
  symbol: '',
};
export default Coin;
