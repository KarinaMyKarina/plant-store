import { useSelector } from "react-redux";
import dataProducts from "../../../data/dataProducts";
import Plant from "./Plant";
import { getSearchQuery, getSelectedCategory } from "../../../redux/plantsSlice";

const Plants = () => {

const selectedCategory = useSelector(getSelectedCategory)
const searchQuery = useSelector(getSearchQuery);

const filteredPlants = dataProducts.filter((plant) => {
    if (selectedCategory !== 'all' && selectedCategory !== plant.searchItem) {
      return false;
    }
    if (searchQuery && !plant.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

    return (
        <div className="home-plants">
      
      {filteredPlants.map((plant) => (
        <Plant plant={plant} key={plant.id} />
      ))}
    
  </div>
    )
}

export default Plants;