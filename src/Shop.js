import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.com/v2/shop/br'
    );

    const items = await data.json();
    console.log(items.data.daily.entries);
    setItems(items.data.daily.entries);
  };

  return (
    <div className="shop">
      {items.map(item => {
        <h3>{item.regularPrice}</h3>
      })}
    </div>
  );
}

export default Shop;
