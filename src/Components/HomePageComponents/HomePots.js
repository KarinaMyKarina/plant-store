import { useState } from "react";
import dataPots from "../../data/dataPots";
import arrowLeftIcon from '../../media/arrowleft.png'
import arrowRightIcon from '../../media/arrowright.png'

function HomePots() {

    const [newProduct, setNewProduct] = useState(0);

    const {id, image, name, text} = dataPots[newProduct];

    const previousProduct = () => {
        setNewProduct((item =>{
            item--;
            if (item < 0) {
            return dataPots.length-1;
        }
    
        return item;
        }))
    }
    
    const nextProduct = () => {
        setNewProduct((item =>{
            item ++;
            if (item > dataPots.length -1) {
            item = 0;
        }
        return item;
        }))
    }

    return (
        <section className="new-product-container" id="pots">
        <div>
            <h1>Coming Soon</h1>
            <h4 className="new-product-info">Explore our collection and find the perfect pot for your favorite plants.</h4>
        </div>

        <div>
            <img className="new-product" src={ image } alt="New Product"  width='300px'/>
        </div>

        <div key={id}>
            <p>{ name }</p>
        </div>

        <div>
            <p className="new-product-text">{ text }</p>
        </div>

        <div className="btn-pots">
            <button className="btn-prev" onClick={ previousProduct }> 
                <img src={ arrowLeftIcon } alt="Arrow Prev" width='25px' />
            </button>

            <button className="btn-next" onClick={ nextProduct} >
                <img src={arrowRightIcon} alt="Arrow Next" width='25px' />
            </button> 
                
        </div>  

    </section>
    
    )
}

export default HomePots;