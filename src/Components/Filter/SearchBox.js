import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, getSearchQuery } from '../../redux/plantsSlice';
import SearchIcon from '../../media/icon-search-black.png'

const SearchBox = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(getSearchQuery);

    const handleSearchChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
    
    };

    return (
    <div className='search-box'>
        <input className='search'
        type="text"
        placeholder="Find your plant..."
        value={searchQuery}
        onChange={handleSearchChange}
        />
        <button className='btn-input'> <img src={ SearchIcon } alt=" Search Icon" width='22px' /></button>
    </div>
    );
};

export default SearchBox;
