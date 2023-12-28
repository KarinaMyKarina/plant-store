import Filter from "../../Filter/Filter";
import SearchBox from "../../Filter/SearchBox";
import Plants from "./Plants";

const Products = () => {
    return (
        <div>
            <SearchBox/>
            <Filter />
            <Plants />
        </div>
    )
}

export default Products;