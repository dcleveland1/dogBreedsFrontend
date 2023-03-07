import { BreedInterface } from './../models/breedModel';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface filterReducerInterface {
  favoriteReducer: BreedInterface[];
}
const initialState: BreedInterface[] =  [] 

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = [action.payload, ...state]
      return state;
    },
    removeFavorite: (state, action) => {      
      state = state.filter(element => {
        return JSON.stringify(element) !== JSON.stringify(action.payload)
      })
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite} = favoriteSlice.actions

export const selectFavorites = (state:any) => state.favoriteReducer
export default favoriteSlice.reducer