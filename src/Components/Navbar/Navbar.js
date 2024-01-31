import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux"; 
import herbIcon from '../../media/icon-herb.png';
import shoppingBagIcon from '../../media/shop-bag.png';
import menuIcon from '../../media/menu.png'
import searcIcon from '../../media/icon-search 2.png'
import { getTotalQuantity } from "../../redux/cartSlice"; 

const Navbar = () => {
    const [stickyClass, setStickyClass] = useState('');
    const totalQuantity = useSelector(getTotalQuantity); 
    const [menuOpen, setMenuOpen] = useState(false); 
    const navRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    return (
        <div>
            <div className="shipping">
                <p className="shipping">Free Standard Shipping On Orders Over $50 </p>
            </div>

            <div className="promo-pots">
                <Link to='/#pots' className="home-pots"> Coming Soon <img src={ searcIcon } width='22px' alt="Search Icon" /></Link>   
            </div>
            
            <nav ref={navRef} className={`navbar ${stickyClass} ${menuOpen ? "active" : ""}`}> 

                <Link className="title" to='./' style={{textDecoration: 'none'}}>
                    Your<img src={ herbIcon } alt="Herb Icon"  width='35px' height='35px'/>Plant
                </Link> 
                
                <div className="menu-mobile">
                    <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}> 
                        <img src={ menuIcon }  alt="Menu Icon" width='30px' height='30px' />
                    </button>
                </div>  

                <ul className={menuOpen ? "open" : ""}>
                    <li>
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
                        <div className="cart-container">
                            <Link to='/cart'>
                                <img className="shopping-bag" src={ shoppingBagIcon } alt="Shopping Bag Icon" width='30px'/> 
                                {totalQuantity > 0 && <span className="cart-quantity" >{totalQuantity} </span>}
                            </Link> 
                        </div>
                    </li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;





