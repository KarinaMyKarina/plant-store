import { createSlice } from '@reduxjs/toolkit'

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: {
        selectedCategory: 'all',
        searchQuery: '',
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
})

export const getSelectedCategory = state => state.plants.selectedCategory;
export const { filterCategory, setSearchQuery } = plantsSlice.actions;
export const getSearchQuery = (state) => state.plants.searchQuery;
export default plantsSlice.reducer;