import { NavLink } from "react-router-dom";
import '../Styles/NavBar.css'
import { FaCartArrowDown,FaUser ,FaPhoneAlt} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const NavBar =({value,setValue,cart})=>{

    const Navlink={
        textDecoration:"none",
        color:"white"
    }
    const change=(e)=>{
        setValue(e.target.value)
    }
    
    return(
        <>

        <nav className="Navbar">

        <div className="menu">
            <MdMenu/>
            <ul className="menu-nav">
                <li>
                    <IoMdHome/>
                    <div className="nav"><NavLink style={Navlink} to="/">Home</NavLink></div>
                </li>
                <li>
                    <FaUser/>
                    <div className="nav"><NavLink style={Navlink} to="/about">About</NavLink></div>
                </li>
                <li>
                    <FaPhoneAlt/>
                    <div className="nav"><NavLink style={Navlink} to="/contact">Contact</NavLink></div>
                </li>
            </ul>
            </div>


        <div className="search">
        <input className="searchBox" type="text" value={value} onChange={change}/>
        <IoSearchSharp style={{position:"absolute",right:"5px",top:"8px"}}/>
        </div>

        
            <ul className="nav-menu">
                <li>
                    <div className="nav"><NavLink style={Navlink} to="/">Home</NavLink></div>
                </li>
                <li>
                    <div className="nav"><NavLink style={Navlink} to="/about">About</NavLink></div>
                </li>
                <li>
                    <div className="nav"><NavLink style={Navlink} to="/contact">Contact</NavLink></div>
                </li>
            </ul>
            <div className="cart-icon">
                    <NavLink to={'/cart'} style={{position:"relative"}}><FaCartArrowDown style={{color:"white"}}/><span className="cart-qty" style={{position:"absolute",textAlign:"center",top:"-5px",right:"-5px",width:"20px",height:"20px",borderRadius:"50%",fontSize:"0.6rem",backgroundColor:"blue",color:"white"}}>{cart.length}</span></NavLink>
                </div>
        </nav>
        </>
    )
}

export default NavBar;