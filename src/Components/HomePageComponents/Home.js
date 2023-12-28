import dataHome from "../../data/dataHome";
import HomeHeader from "./HomeHeader";
import HomePlants from "./HomePlants";
import HomePots from "./HomePots";
import HomePromo from "./HomePromo";
import HomeServices from "./HomeServices";
import herbIcon from '../../media/icon-herb.png'


const Home = () => {

    return (
        <div>
            <HomeHeader/>
            <HomeServices/>
        <div>
        <div className="App-head mobile-head">
            <h2>Best Sellers <img src={ herbIcon } alt="Icon" width='35px'/></h2>
        </div> 
        
        <div className="home-plants">
            {dataHome
            .map(plant => <HomePlants plant ={ plant } key={ plant.id }/>)}
        </div>
        </div>
            <HomePromo/>
            <HomePots/>
        </div>
    )
}

export default Home;