import Card from './Card'
import '../Styles/Cart.css'
import { useState } from 'react';

const Cart =({cart,setCart})=>{
    let bill=0;

    const [cartQty,setCartQty]=useState(0)
    for(let a of cart){
        bill+=a.price*a.qty;
    }
    let CartTotal=bill+cartQty;
    const deliveryCharge=0;

    const Remove=(cart1)=>{
        setCart([...cart.filter(a=>cart1.id!==a.id)])
    }
    const increament =(id)=>{
        setCart(
            cart.map(item=>(id===item.id?{...item,qty:item.qty+(item.qty<10?1:0)}:item))
        )
        
    }
    const decreament =(id)=>{
        setCart(
            cart.map(item=>(id===item.id?{...item,qty:item.qty-(item.qty>1?1:0)}:item))
        )
    }
    return(
        <>
        <div className="main-cart">
            <div className='cart'>
                {cart.length===0?<span className='message'>Cart is Empty</span>:cart.map((cart)=>
                (
                    <>
                        <Card cart={cart} Remove={Remove} setCartQty={setCartQty} cartQty={cartQty} increament={increament} decreament={decreament} />
                    </>
                    ))}
            </div>
            <div>
            <div className="cart-bill">
                <p>Cart Total : {CartTotal}</p>
                <p>Service Fee :{deliveryCharge}</p>
                <hr />
                <p>Total Pay  : {CartTotal+deliveryCharge}</p>
            </div>
            </div>

        </div>
        </>
    )
}

export default Cart;