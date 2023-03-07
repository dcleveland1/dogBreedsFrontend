import { BreedInterface } from './../models/breedModel';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface filterReducerInterface {
  filterReducer: BreedInterface[];
}
const initialState: BreedInterface[] =  [] 

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = action.payload
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilters } = filterSlice.actions

export const selectFilters = (state:any) => state.filterReducer
export default filterSlice.reducer