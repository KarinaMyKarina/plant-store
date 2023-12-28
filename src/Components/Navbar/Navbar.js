import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import herbIcon from '../../media/icon-herb.png';
import shoppingBagIcon from '../../media/shop-bag.png';
import menuIcon from '../../media/menu.png'
import footerMapIcon from '../../media/location.png';
import footerPhoneIcon from '../../media/phone.png';
import footerClockIcon from '../../media/clock.png';
import footerInstagramIcon from '../../media/instagram.png';
import footerFacebookIcon from '../../media/facebook.png';
import footerWhatsappIcon from '../../media/whatsapp.png'
import { useEffect, useState } from "react";
import Home from "../HomePageComponents/Home";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import Products from "../ProductsPageComponents/Cart/Products";
import searcIcon from '../../media/icon-search 2.png'



const Navbar = () => {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
    };

    const [menuOpen, setMenuOpen] = useState(); 
    
    
    return (
        <Router>
        <div className="shipping">
            <p className="shipping">Free Standart Shipping On Orders Over $50 </p>
        </div>

        <div className="promo-pots">
            <Link to='/#pots' className="home-pots"> Coming Soon <img src={ searcIcon } width='22px' alt="Search Icon" /></Link>   
        </div>
        
        <nav className={`navbar ${stickyClass} ${menuOpen ? "active" : ""}`}>
        
        <Link className="title" to='./' style={{textDecoration: 'none'}}>
            Your<img src={ herbIcon } alt="Herb Icon"  width='35px' height='35px'/>Plant
        </Link> 
        
        <div className="menu-mobile">
            <button className="menu-btn" onClick={()=> 
            setMenuOpen(!menuOpen)}> 
                <img src={ menuIcon }  alt="Menu Icon" width='30px'height='30px' />
        </button>
    </div>  

    <ul className={menuOpen ? "open" : ""}>
        <li >
            <Link to='/' className="link">Home</Link>
        </li>
        <li>
            <Link to='/products' className="link">Products</Link> 
        </li>  
        <li>
            <Link to='/#services' className='link'> Services</Link>
        </li>
        <li>
            <Link to='/contact' className="link">Contact Us</Link>
        </li>
        <li>
            <Link to='/cart'><img className="shopping-bag"src={ shoppingBagIcon } alt="Shopping Bag Icon" width='30px' /></Link> 
        </li> 
    </ul>
    </nav>

        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} /> 
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={ <Cart/>} />
            
        </Routes>

    <div className="footer-container">
        <div className="footer-main">

        <div className="footer-link">
            <p className="footer-logo">Your<img src={herbIcon} alt="Icon" width='27px'/>Plant</p>
            <p className="footer-text">You will receive a full-service customer experience, <br />
            starting with picking out the perfect plants for your space, <br />
            and finishing with complimentary repotting and plant care education.</p>
        </div>

        <div className='footer-links'>
            <Link to="/" className='footer-link footer'> Home </Link>
            <Link to="/products" className='footer-link footer'> Products </Link>
            <Link to="#services" className='footer-link footer' > Services </Link>
            <Link to="/contact" className='footer-link footer'> Contact </Link>
        </div>  

        <div className="footer-link">
            <p className="footer-icons"><img src={ footerMapIcon } alt="Map Icon" width='23px'/> <span className="footer-info"> 91 SW. Rock Creek Dr.Wilmington, CA 90744</span></p>
            <p className="footer-icons"><img src={ footerPhoneIcon } alt="Phone Icon" width='23px'/> <span className="footer-info">636 947 4035</span></p>
            <p className="footer-icons"><img src={ footerClockIcon } alt="Clock Icon" width='23px'/> <span className="footer-info">Monday-Friday 10am-6pm, Saturday & Sunday 11am-4pm</span></p>
        </div> 

        <div className="footer-link media footer-link-mobile">
            <img src={ footerInstagramIcon } className="footer-icon" alt="Instagram Icon" width='38px'/>
            <img src={ footerFacebookIcon } className="footer-icon"  alt="Facebook Icon" width='38px'/>
            <img src={ footerWhatsappIcon } className="footer-icon"  alt="Whatsapp Icon" width='38px'/>
        </div> 

    </div>
        <div className="end">
            <p className="end">All images were taken from open sources for educational purposes</p>
        </div>
    </div>
    </Router>
    
    );
    }


export default Navbar;