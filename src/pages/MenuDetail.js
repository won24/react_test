import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getMenuDetail } from "../api/MenuApi";


 
const MenuDetail = ({addMenu, setAddMenu})=>{

    const {id} = useParams();
    const navigate = useNavigate();

    const [menu, setMenu] = useState({
        name : "",
        price: "",
        description: ""
    });

    useEffect(()=>{
        setMenu(getMenuDetail(id))
    },[]);


    const add = ()=>{
        setAddMenu([...addMenu, menu])
    }

    const back = ()=>{
        navigate(`/menu`);
    }
    


    return(

        <>
            <h2>{menu.name}</h2>
            <h4>가격: {menu.price}</h4>
            <p>{menu.description}</p>
            <button onClick={add}>장바구니 추가</button>
            <button onClick={back} >되돌아가기</button>
        </>
 
    )
}


export default MenuDetail;