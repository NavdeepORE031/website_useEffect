import React from 'react'
import { useState, useEffect } from 'react';


const Products = () => {

    const [count, setCount] = useState(0);  
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setData(data.products);
        }
        getData();
        document.title = `active items: ${count}`
      }, [count]);

  return (
    <div className= "product-grid"
      >{data.map((item, index) => (<>
          <div className='product-card' key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        </>))}  
      </div>
  )
}

export default Products;