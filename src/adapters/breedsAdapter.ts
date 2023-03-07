import { BreedGroupedInterface, BreedInterface } from '../models/breedModel';
import { ResponseInterface } from "../models/responseModel"

export const breeds = (data : ResponseInterface): BreedGroupedInterface[] => {
  const { status, message } = data;
  let breedsOptions : BreedGroupedInterface[] = []
  if(status == 'success'){
    for (const key in message) {
      if(!message[key].length){
        breedsOptions = [ {label: key, value: key }, ...breedsOptions ]
      }else{
        breedsOptions = [ {label: key, options: message[key].map( (element:string) => ({label: element, value: `${key} ${element}`}))}, ...breedsOptions ];
      }        
    }
    //breeds = message.map((element: string, index: number) => Breed(element, index.toString()) )
  }
  return breedsOptions;
}
export const Breed = (data : string, index: string) : BreedInterface => {
  return { value: data, label: data }
}
