import { useEffect, useState } from "react";
import { RenderPhoto } from "react-photo-album";
import { useBreeds } from "../../hooks/useBreeds";
import { ImageInterface } from "../../models/imageModel";
import { StyledFixedImageOption, StyledOptions } from "./styles";
import { EmojiHeartEyes, EmojiFrown } from "react-bootstrap-icons";
import { addFavorite, removeFavorite, selectFavorites } from "../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { BreedInterface } from "../../models/breedModel";

export const renderPhoto: RenderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, src,...restImageProps } }) => {
  
  const [isFavorite , setIsFavorite ] = useState<boolean>(false);


  const [isHovering, setIsHovering] = useState(false);
  let imagenes = useSelector(selectFavorites)
  const dispatch = useDispatch()

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClickImage = () => {
    if(!isFavorite){
      dispatch(addFavorite({label:src, value: src}))
      setIsFavorite(true);
    }
    else{
      dispatch(removeFavorite({label:src, value: src}))
      setIsFavorite(false);
    }
    
  }
  useEffect(() => {
    if(imagenes.some((element: BreedInterface) => element.value === src)){
      setIsFavorite(true)
    }
  
    return () => {
      
    }
  }, [])
  
  return (
    <div
        style={{
            position:'relative',
            borderRadius: "4px",
            boxSizing: "content-box",
            alignItems: "center",
            width: style?.width,
            padding: `${layoutOptions.padding - 2}px`,
            paddingBottom: 0,
        }}

        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
        <img alt={alt} src={src} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
        {isHovering && (
          <StyledFixedImageOption>
            <StyledOptions onClick={handleClickImage}>
              {!isFavorite && (<EmojiHeartEyes size={60}/>)}
              {isFavorite && (<EmojiFrown size={60} />)}
            </StyledOptions>
          </StyledFixedImageOption>
        )}
    </div>
  )};