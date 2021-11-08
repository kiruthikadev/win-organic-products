
import { Link } from "react-scroll";
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
     <h1> WIN<span> ORGANIC products</span></h1>
             </div>
             <div className="header__right">
            <Link to="about" smooth={true} duration={500}>
                 <h4>
                     About us
                 </h4>
             </Link>    
             <Link to="All Products" smooth={true} duration={500}>
             <h4>
                 All Products
             </h4>
         </Link>
         <Link to="spices" smooth={true} duration={500}>
         <h4>
             Spices 
         </h4>
     </Link>
     <Link to="fragrance spices" smooth={true} duration={500}>
     <h4>
         Fragurance spices
     </h4>
 </Link>
 
 <h4 className="header__rightButton">
    CONTACT US
 </h4>
 
 
 </div>
 </div>

    );
};

export default Header
