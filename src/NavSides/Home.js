import React from 'react'
import '../Styles/HomePage.css'

const Home =({cart,setCart,value})=>{
    const products=[
        {
            id:1,
            name:"Baby Body Lotion",
            url:"./images/babyBodyLotion.webp",
            price:200,
            qty:1
        },
        {
            id:2,
            name:"Baby Daily Moistur Shampoo",
            url:"./images/babydailyMoisturShampoo.webp",
            price:250,
            qty:1
        },
        {
            id:3,
            name:"Baby Diaper Rash Cream",
            url:"./images/babyDiaperRashCream.webp",
            price:290,
            qty:1
        },
        {
            id:4,
            name:"Baby Lotion",
            url:"./images/babyLotion.webp",
            price:180,
            qty:1
        },
        {
            id:5,
            name:"Baby Massage Oil",
            url:"./images/babymassageOil.webp",
            price:290,
            qty:1
        },
        {
            id:6,
            name:"Nestle Cerelac For Baby",
            url:"./images/nestleCerelacForBaby.webp",
            price:300,
            qty:1
        },
        {
            id:7,
            name:"Dolo 500 tablet 15's For Fever",
            url:"./images/Dolo 500 tablet 15's For Fever.webp",
            price:50,
            qty:1
        },
        {
            id:8,
            name:"CoughSyrup",
            url:"./images/coughSyrup.webp",
            price:80,
            qty:1
        },
        {
            id:9,
            name:"NAC plus Tablet",
            url:"./images/NAC plus Tablet.webp",
            price:20,
            qty:1
        },
        {
            id:10,
            name:"Certzine Cold tablet 10's",
            url:"./images/certzine cold tablet 10's.webp",
            price:60,
            qty:1
        },
        {
            id:11,
            name:"Ashvagandha",
            url:"./images/Ashvagandha.webp",
            price:250,
            qty:1
        },
        {
            id:12,
            name:"Dettol Anti Septic Liquid",
            url:"./images/DettolAntiSepticLiquid.webp",
            price:350,
            qty:1
        },
        {
            id:13,
            name:"Diagestive Tonic",
            url:"./images/Diagestive Tonic.webp",
            price:270,
            qty:1
        },
        {
            id:14,
            name:"Himalaya Liv.52 60 Tablets",
            url:"./images/Himalaya Liv.52 60 Tablets.webp",
            price:100,
            qty:1
        },
        {
            id:15,
            name:"HorlicksForMother",
            url:"./images/HorlicksForMother.webp",
            price:380,
            qty:1
        },
        {
            id:16,
            name:"HorlicksForWomen",
            url:"./images/HorlicksForWomen.webp",
            price:370,
            qty:1
        },
        {
            id:17,
            name:"i-pilEmergency for women",
            url:"./images/i-pilEmergency for women.webp",
            price:150,
            qty:1
        },
        {
            id:18,
            name:"Paracip 650 for fever and Pain relief",
            url:"./images/Paracip 650 for fever and Pain relief.webp",
            price:220,
            qty:1
        },
        {
            id:19,
            name:"protinexForWomen",
            url:"./images/protinexForWomen.webp",
            price:120,
            qty:1
        },
        {
            id:21,
            name:"Stay Free Secure Pads For Women",
            url:"./images/stayFreeSecurePadsForWomen.webp",
            price:320,
            qty:1
        },
        {
            id:22,
            name:"ToiletCleaner",
            url:"./images/ToiletCleaner.webp",
            price:295,
            qty:1
        },
        {
            id:23,
            name:"Uprise-D3 softGel capsule",
            url:"./images/uprise-D3 softGel capsule.webp",
            price:20,
            qty:1
        },
        {
            id:24,
            name:"Vicks Action Advanced 500 mg",
            url:"./images/vicks Action Advanced 500 mg.webp",
            price:20,
            qty:1
        },
        {
            id:25,
            name:"vitaminD3 60000 IU",
            url:"./images/vitaminD3 60000 IU.webp",
            price:25,
            qty:1
        },
        {
            id:26,
            name:"whisperSuper for Women",
            url:"./images/whisperSuper for Women.webp",
            price:290,
            qty:1
        },
        {
            id:27,
            name:"ZicovitTablet",
            url:"./images/ZicovitTablet.webp",
            price:30,
            qty:1
        },

      
    ]
    let Products=products.filter(data=>data.name.toLowerCase().includes(value.toLocaleLowerCase())||value===" ")
    
    const addToCart=(data)=>{
        const Exist=cart.find(a=>a.id===data.id)
        if(!Exist){
            setCart([...cart,data])
        }  
    }

    return(
        <>
            <div className="find">
            
            </div>
            
            <section className='product-container'>
            {Products.length===0?<span className='ProductMessage'>Product Not Found</span>:Products.map(data=>{
                return(
                    <div className='product-card' key={data.id}>
                    <div className='product-img'><img src={data.url} alt="" /></div>
                    <div>
                        <h6 className='product-name'>{data.name}</h6>
                        <p className='product-price'><span>&#8377;{data.price}</span></p>
                        <button onClick={()=>addToCart(data)}>Add to cart</button>
                    </div>
                    
                    </div>
                    
                )
            }

            )}
            </section>
        </>
    )
}

export default Home;