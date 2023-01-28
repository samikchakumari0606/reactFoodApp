
import React,{useState} from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Button from "./Button";


const uniqueList=[...new Set(Menu.map((curElem)=>{
    return curElem.category
})
),
"All",
]
console.log(uniqueList);


const Resturant=()=>{
    const[menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList)
    console.log(menuData);

    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
    const updatedList=Menu.filter((curElem)=>{
       return curElem.category===category
    })
   setMenuData(updatedList);
    }

    return(
        <> 
       <Button  filterItem={filterItem} menuList={menuList}/>

       <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant;