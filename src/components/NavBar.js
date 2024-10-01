import { NavLink } from'react-router-dom';

const Navbar = () => {


    return(
        <div>
            <ul>
                <li><NavLink to={"/main"}>홈</NavLink></li>
                <li><NavLink to={"/menu"}>메뉴</NavLink></li>
                <li><NavLink to={"/order"}>주문 확인</NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;