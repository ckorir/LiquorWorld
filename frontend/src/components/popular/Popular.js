import React, { useEffect, useState } from 'react'
import '../../css/Popular.css'
// import data_product from '../Assets/data'
import Item from '../item/Item'

export default function Popular() {

  const [popular,setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popular")
    .then((res) => res.json())
    .then((data) => {
        setPopular(data);
    });
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='popular-item'>
        {popular.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
