import React, { useState } from 'react';
import "./Styles.css"
import MenuApi from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(MenuApi.map((currElem) => {
  return currElem.category;
}))]
// console.log(uniqueList);


const Restaurant = () => {
  const [menuData, setMenuData] = useState(MenuApi);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    const updatedList = MenuApi.filter((currElem) => {
      return currElem.category === category;
    })
    setMenuData(updatedList);
  }


  return (
    <>
      <Navbar filterItem={filterItem} uniqueList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;