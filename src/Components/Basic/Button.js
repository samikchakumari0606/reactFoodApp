

function Button({filterItem,menuList}){
    return(
        <>
         <nav>
            <div className="nav">
                {
                    menuList.map((item)=>{
                        return(
                            <button onClick={()=>filterItem(item) }>{item}</button>
                        )
                    })
                }
         
         
            {/* <button  onClick={()=> setMenuData(Menu) }>All</button> */}
            </div>
        </nav>
        </>
    )
}

export default Button;