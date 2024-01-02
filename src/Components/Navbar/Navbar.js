import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import herbIcon from '../../media/icon-herb.png';
import shoppingBagIcon from '../../media/shop-bag.png';
import menuIcon from '../../media/menu.png'
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
        <div>
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
    </div>
    );
    }


export default Navbar;