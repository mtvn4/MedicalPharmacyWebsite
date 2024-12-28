import { FaPhone,FaWhatsapp,FaEnvelope} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../Styles/Contact.css'

const Contact=()=>{
    const dec={
        padding:"20px",
        backgroundColor:"rgb(59, 59, 245)",
        color:"white",
        borderRadius:"10px",
        fontWeight:"bold",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h2 style={{padding:"10px",backgroundColor:"rgb(59, 59, 245)",color:"white",display:"inline-block",margin:"10px",borderRadius:"10px"}}>Contact us</h2>
                <div className="contact" >
                
                    <div style={dec}><FaPhone /><span>+919080782432</span></div>
                    <div style={dec}><FaEnvelope/><span>mkvijayakumar1999@gmail.com</span></div>
                    <div style={dec}><FaWhatsapp /><span>+919080782432</span></div>
                    <div style={dec}><FaLocationDot/><span>5/93 main road coimbator TamilNadu-637204</span></div>
                </div>
            </div>
        </>
    )
}

export default Contact;