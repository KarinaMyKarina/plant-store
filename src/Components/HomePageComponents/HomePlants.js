import { useState } from 'react';
import arrowUpIcon from '../../media/arrow-up.png';
import arrowRightIcon from '../../media/arrrow-right.png';
import ChangeQuantity from '../Cart/ChangeQuantity';


const HomePlants = ({ plant } ) => {

    const [quantity, setQuantity] = useState(1);
    const [showMore, setShowMore] = useState(false);

    const showTextclick = () => {
        setShowMore(!showMore);
    }

    return (
        <section>

        <div className="home-plants" key={ plant.id } > 
            <div className="product-card-home" >
                <img className="image" src={ plant.image } alt="Plant" />
    
        <div className="product-info-home">
                <h5>{ plant.name }</h5>

            <div className="container-info">
                <div className="info">
                        <img src={ arrowUpIcon } alt="Arrow Up" width='22px' /> 
                        <p>{ plant.tall } </p>
                </div>
                <div className="info">   
                            <img src={ arrowRightIcon }alt="Arrow Right" width='22px' /> 
                            <p>{ plant.pot } </p>

                </div>
            </div>

            <p className="price">$ { plant.price }</p>

            <ChangeQuantity quantity={ quantity }
            setQuantity={ setQuantity } plant={ plant }/>

        <div className="container-descripton">
            <p className="plant-description"> <span className="more-about">More About: </span> {showMore ? plant.description : plant.description.substring(0, 20) + '....'}
                <button className="show-info" id ={ plant.id } onClick={ showTextclick }>{ showMore ?  'Show less' : 'Show more'}</button>
            </p>
        </div>
            
            </div>
        </div>
    </div>
    </section>
    
    )
}


export default HomePlants;