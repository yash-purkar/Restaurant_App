import React, { useState } from 'react';
import "./Styles.css"
import MenuApi from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const Restaurant = () => {
  const [menuData, setMenuData] = useState(MenuApi);
  const filterItem = (category) => {
    const updatedList = MenuApi.filter((currElem, indx) => {
      return currElem.category === category;
    })
    setMenuData(updatedList);
  }


  return (
    <>
      <Navbar filterItem={filterItem} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;