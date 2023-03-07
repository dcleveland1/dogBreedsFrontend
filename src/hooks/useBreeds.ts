import { selectFavorites } from './../store/favoriteSlice';
import { BreedGroupedInterface } from './../models/breedModel';

import { useHttpRequest } from "./useHttpRequest"
import { HTTP_METHODS, RequestMethod} from "../utils/constants"
import { ImagesAdapter } from "../adapters/randomImageAdapter"
import { ResponseInterface } from "../models/responseModel"
import { ImageInterface } from "../models/imageModel"
import { breeds } from "../adapters/breedsAdapter"
import { BreedInterface } from "../models/breedModel"
import { useSelector } from 'react-redux';

export const useBreeds = () => {

  const { isLoading, error, sendRequest, clearError } = useHttpRequest()

  let imagenes = useSelector(selectFavorites)
  const getPictures = async (searchCheck: string,filters: BreedInterface[],numberOfImage: number): Promise<ImageInterface[]> => {
    let url = ''
    let type =  HTTP_METHODS.GET as RequestMethod
    let data = {}
    if(filters.length && searchCheck === "search"){
      url = `/dog/breeds/filters/${numberOfImage}`
      data = {  filters: JSON.stringify(filters) , numberOfImage, page: 1 }
      type =  HTTP_METHODS.POST as RequestMethod
    }else if(searchCheck === "random"){
      url = `/dog/breeds/random_image/${numberOfImage}`
      
    }else{
      return imagenes ? ImagesAdapter({status:"success", message: imagenes.map((element:BreedInterface) => element.value)}) : []
    }
    const responseData = await sendRequest(
      url,
      type,
      {},
      data
    ) 
    return ImagesAdapter(responseData)
  }

  const getAllBreeds = async (): Promise<BreedGroupedInterface[]> => {
    const responseData = await sendRequest(
      `/dog/breeds/`,
      HTTP_METHODS.GET as RequestMethod,
      {},
      {}
    ) 
    return breeds(responseData)
  }

  return {
    getPictures,
    getAllBreeds
  }
}