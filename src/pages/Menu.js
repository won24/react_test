import { useEffect, useState } from "react"
import MenuItem from "../components/MenuItem"
import { getMenuList } from "../api/MenuApi";
import { useNavigate } from "react-router-dom";





const Menu = ()=>{

    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();
   

    useEffect(()=>{
        setMenuList(getMenuList())
    },[]);


    const order = ()=>{
        navigate(`/order`)
    }

    return(
        <menu>
            {menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
            <br/>
            <button onClick={order}>주문하기</button>
        </menu>
    )
}
export default Menu;