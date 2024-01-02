import { HashLink as Link } from "react-router-hash-link";
import herbIcon from '../../media/icon-herb.png';
import footerMapIcon from '../../media/location.png';
import footerPhoneIcon from '../../media/phone.png';
import footerClockIcon from '../../media/clock.png';
import footerInstagramIcon from '../../media/instagram.png';
import footerFacebookIcon from '../../media/facebook.png';
import footerWhatsappIcon from '../../media/whatsapp.png'



const Footer = () => {
    return (
        
        <div className="footer-container">
        <div className='footer-main'>

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
    
    )
}

export default Footer;