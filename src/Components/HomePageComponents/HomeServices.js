import truckIcon from '../../media/icon-truck.png'
import dollarIcon from '../../media/icon-dollar2.png'
import watchIcon from '../../media/icon-watch.png'
import careIcon from '../../media/icon-care.png'
import returnIcon from '../../media/icon-return.png'
import contactIcon from '../../media/icon-contact.png'
import herbIcon from '../../media/icon-herb.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const HomeServices = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <section className='services' id='services'>
            
            <div  className='App-head'>
                <h2>Our Services <img src={ herbIcon } alt="Herb Icon" width='35px'/> </h2> 
            </div> 
            
    <div className="service-info">

<div data-aos="zoom-in"  className="container">
        <div className="service-card">
            <img className='icon-service' src={ watchIcon } alt="Watch Icon" width='40px' />
                <h3>Quick Order</h3>
                <p>The order is ready to ship within 24 hours.</p>
            </div>
</div>

<div data-aos="zoom-in" className="container">
        <div className="service-card">
            <img className='icon-service' src={ truckIcon } alt="Truck Icon" width='40px' />
                <h3>Home Delivery</h3>
                <p>We have easy ways to deliver your items right to you.</p>
        </div>
</div>

<div data-aos="zoom-in"  className="container">
        <div className="service-card">
            <img className='icon-service' src={ dollarIcon } alt="Dollar Icon" width='40px' />
            <h3>Best Prices</h3>
            <p>Best prices compared to other stores in California.</p>
        </div>
        </div>
</div>
            
<div data-aos="zoom-in"  className="service-info">
    <div className="container">
        <div className="service-card">
            <img className='icon-service' src={ contactIcon } alt="Contact Icon" width='40px' /> 
            <h3>Contact Support</h3>
            <p>We are here for you for 24/7 .</p>
        </div>
    </div>

    <div data-aos="zoom-in"  className="container">
            <div className="service-card">
                <img className='icon-service' src={ careIcon } alt="Care Icon" width='40px' />
                <h3>Plant Care</h3>
                <p>Transplanting & re-potting, dusting & cleaning. </p>
            </div>
</div>

    <div data-aos="zoom-in"  className="container">
            <div className="service-card">
                <img className='icon-service' src={returnIcon } alt="Return Icon" width='40px' />
                <h3>Easy Return</h3>
                <p>Refunds can be expected in 3-5 business days.</p>
            </div>
    </div>
</div>
</section>
    )
}

export default HomeServices;