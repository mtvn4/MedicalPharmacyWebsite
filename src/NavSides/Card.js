

const Card=({cart,Remove,setCartQty,cartQty,cartId,increament,decreament})=>{

   
    return(
        <>

            <div className='cart-card' key={cart.id}>
                <div className='cart-img'>
                    <img src={cart.url} alt="" />
                </div>
                <div className="cart-body">
                    <h6 className='cart-name'>{cart.name}</h6>
                    <p className='cart-price'><span>&#8377;{cart.price}</span></p>
                    <button className='Remove' onClick={()=>Remove(cart)}>Remove</button>
                    <div className="btn-grp">
                        <button className='decrease' onClick={()=>decreament(cart.id)}  >-</button>
                        <span>{cart.qty}</span>
                        <button className='increase' onClick={()=>increament(cart.id)} >+</button>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Card;