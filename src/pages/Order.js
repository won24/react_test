

const Order=({addMenu})=>{


    return(
        <>
            <h2>주문 확인</h2>
            {(addMenu.length !== 0)? (addMenu.map(list => <li>{list.name} - \{list.price}</li>)) : (<h4>담긴 상품이 없습니다.</h4>)}
        </>
    )
}

export default Order;