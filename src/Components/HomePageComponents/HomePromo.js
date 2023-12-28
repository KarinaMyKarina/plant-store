import shop from '../../media/shop.jpg'
import herbIcon from '../../media/icon-herb.png'

function HomePromo () {
    return (
        <section className='promo'>
            <div className='promo-container'>

                <div className='promo-pic'>
                    <img className='shop' src={ shop } alt="Shop" width='650px' height='500px' />
                </div>


            <div className='promo-text'>
                <div className='promo-head'>
                    <h1 className='promo-head-text'>Always Something New  <img src={ herbIcon } alt="Herb Icon" width='35px' /></h1>
                </div>
                <h4>We work hard to make sure we always have the best selection possible, at the most reasonable price. <br /> 
                With new shipments multiple times per week, whether it's a rare tropical or a common succulent, we got you covered!</h4>

                
                <div className="btn-home">
                    <a className="btn-buy-promo" href="#products">Shop Online</a>
                </div>
                
            </div>
            </div>
        </section>
    )
}

export default HomePromo;