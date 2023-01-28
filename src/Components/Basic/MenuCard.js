import Menu from "./MenuApi";

const MenuCard=({menuData})=>{
    console.log(menuData)

    return(
        <>
        <div className="mydiv">
        {
            menuData.map((curElem)=>{
                const{id,name,category,image,description}=curElem;
                return(
                    <>
        <div className="outer" key={curElem.id}>
         <div className="card">
         <div className="card-body">
       <h3>{id}</h3>
       <h2>{name}</h2>
       <p>{description}</p>
        <h3>read</h3> 
        <div className="img">
        <img src={image}/>
        </div>
       
        <span>order now</span>
         </div>
         </div>
        </div>

       
            </>
            )
            })
        }
       </div>
        </>
    )
}

export default MenuCard;