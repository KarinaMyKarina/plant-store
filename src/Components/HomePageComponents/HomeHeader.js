import herbIcon from '../../media/icon-herb.png';


const HomeHeader = () => {

    return (

    <section className='home-header'>
        <div className='background'>
            <div className='App-header'> 
        
                <h1>"A beautiful plant is like having a friend around the house." <br />  <span className='author'>- Beth Ditto</span></h1>
    
                <h4> At <span>Your<img src={ herbIcon } alt="Herb Icon" width='25px'/>Plant</span> you'll find the largest selection of tropical house plants online. <br /> 
                We always carry a great selection of pet friendly plants <br /> as well as plants that are easy to care for, <br />
                and a range of sizes from the smallest to plants that are over 5 ft tall. <br />
                We offer in store shopping, online pickup, <br /> 
                or plants delivered right to your doorstep </h4>

                <div className="btn-home">
                    <a className="btn-buy" href="#products">Find your plant</a>
                </div>
                
            </div>
        </div>
    </section>
    )
}

export default HomeHeader;