import { ImageInterface } from './../models/imageModel';
import { BreedInterface } from './../models/breedModel';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface filterReducerInterface {
  imageGaleryReducer: ImageInterface[];
}
const initialState: ImageInterface[] =  [] 

export const imageGalerySlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setImages: (state, action) => {
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
export const { setImages } = imageGalerySlice.actions

export const selectImageGalery = (state:any) => state.imageGaleryReducer
export default imageGalerySlice.reducer