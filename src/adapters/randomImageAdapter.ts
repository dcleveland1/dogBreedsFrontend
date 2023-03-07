import { ResponseInterface } from '../models/responseModel';
import { ImageInterface } from "../models/imageModel"

export const ImagesAdapter = (data: ResponseInterface): ImageInterface[] => {
  const { status, message } = data;
  let imagenes: ImageInterface[] = []
  if(status == 'success'){
    imagenes = message.map((element: string, index: number) => Image(element, index.toString()) )
  }
  return imagenes;
}
export const Image = (data : string, index: string) : ImageInterface => {
  return { key: index, src: data , width: Math.floor(Math.random() * (99 - 70 + 1) ) + 70 , height: 100}
}

