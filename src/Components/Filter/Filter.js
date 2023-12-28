
import { filterCategory } from "../../redux/plantsSlice";
import { useDispatch } from "react-redux";


const Filter = () => {

    const dispatch = useDispatch()

    return (

        <div className="btn-container">
            <button className="btn-search" onClick={ ()=> dispatch(filterCategory('all')) } > View All</button> 
            <button className="btn-search" onClick={ ()=> dispatch(filterCategory('easy care plant')) }  >Easy Care Plants</button>
            <button className="btn-search" onClick={ ()=> dispatch(filterCategory('large plant')) } >Large Plants</button>
            <button className="btn-search" onClick={ ()=> dispatch(filterCategory('air purifying plant')) } >Air Purifying Plants</button>
            <button className="btn-search" onClick={ ()=> dispatch(filterCategory('mini plant')) } >Mini Plants</button>
        </div>
    )

}

export default Filter;