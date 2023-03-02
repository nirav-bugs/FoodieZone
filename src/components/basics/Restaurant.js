import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuapi.js"
import Menucard from './Menucard'
import Navbar from '../Navbar'
const uniquelist=[...new Set(Menu.map((curElem)=>{
  return curElem.category
})),
"All", 
]

const Restaurant = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [menulist,setmenulist]=useState(uniquelist)
  const filterItem = (category) => {
    if (category==="All"){
      setMenuData(Menu)
      return
    }
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedlist);
  }
 
return <>
 
 <Navbar  filterItem={filterItem} menulist={menulist} />
  <Menucard MenuData={MenuData} />
</>;
  
}

export default Restaurant