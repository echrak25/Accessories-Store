
import React, {  ChangeEvent, useState } from 'react'
import Card from './Card'
import Data2 from '../Data/DataHairAcc'
import "../Styles/ClothingCss.css"
export default function HairAccessories() {
  const [filteredList, setFilteredList] =  useState(Data2);
  const itemList=Data2
  const filterBySearch = (event:ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
      var updatedList = [...itemList];
     updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.brand.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  return (
    <>
    <div className="search-header">
    <div className="search-text">Search:</div>
    <input id="search-box"onChange={filterBySearch} />
</div>
    <div className="card-container">
      
  {filteredList.map((product,index) => {
        return (  
  <div className="card" >
      <Card Id={product.Id} key={index}image={product.image} previous_price={product.previous_price} New_price={product.New_price} name={product.name} brand={product.brand}/>
      </div>
          )
          })}
          </div>
          </>
  );
}
