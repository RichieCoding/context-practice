import React from "react";
import {useSelector, useDispatch} from 'react-redux';

const Header = () => {
  const counter = useSelector(state => state.counter)
  return (
    <header>
      <h2>Shoppie</h2>
      <h3>Cart: {counter}</h3>
    </header>
  );
};

export default Header;