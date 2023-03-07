import React, { useEffect, useState } from 'react'
import { PhotoAlbum } from "react-photo-album";
import { useDispatch, useSelector } from 'react-redux';
import { SelectComponent } from '../../components/Select';
import { useBreeds } from '../../hooks/useBreeds';
import { BreedInterface } from '../../models/breedModel';
import { ImageInterface } from '../../models/imageModel';
import { selectFilters } from '../../store';
import { renderPhoto } from '../../components/renderPhoto';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledButton, StyledCard, StyledCardImages, StyledContainer, StyledMiddleBox, StyledPhotoGalery, StyledRowSelect, StyledSubTitle, StyledTitle } from './styles';

import { QuestionOctagon, EmojiHeartEyes} from "react-bootstrap-icons";
import { selectImageGalery, setImages } from '../../store/imageGalerySlice';
import { Alert } from 'react-bootstrap';


export const Home = () => {
  const { getPictures } = useBreeds();
  const [searchCheck , setSearchCheck] = useState<string>('random')

  let filters = useSelector(selectFilters)

  let imagenes = useSelector(selectImageGalery)

  const dispatch = useDispatch()

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const getImages = async () => {
    try {
      const imagesResponse = await getPictures(searchCheck,filters,21)

      dispatch(setImages(imagesResponse))
    } catch (error) {
    }
  }
  useEffect(() => {
    getImages()
    return () => {
      
    }
  }, [searchCheck])
  return (
    <StyledContainer fluid> 
      <StyledRowSelect>
        <Col xl={{ span: 6, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <StyledCard onClick={() => setSearchCheck('search')} style={{padding:0, backgroundColor: searchCheck === 'search' ? "#6062ad" : "#ffff"}}>
            <SelectComponent images={imagenes}/>
          </StyledCard>
        </Col>
        <Col xl={{ span: 1, offset: 0 }}  xs={{ span: 4, offset: 2 }}>
          <StyledCard  onClick={() => setSearchCheck('random')} style={{backgroundColor: searchCheck === 'random' ? "#6d1766" : "#ffff"}}>            
            <QuestionOctagon size={60} />
          </StyledCard>
        </Col>
        <Col xl={{ span: 1, offset: 0 }} xs={{ span: 4, offset: 0 }}>
          <StyledCard onClick={() => setSearchCheck('favorite')} style={{backgroundColor: searchCheck === 'favorite' ? "#d18989" : "#ffff"}}>            
            <EmojiHeartEyes  size={60} />
          </StyledCard>
        </Col>
      </StyledRowSelect>

      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
            <StyledCardImages style={{backgroundColor: searchCheck === 'search' ? '#6062ad' : searchCheck === 'random' ? '#6d1766' : "#d18989" }}>
              <StyledPhotoGalery>
                {!!imagenes && (
                  <PhotoAlbum layout="columns"  spacing={ 6 } photos={imagenes} renderPhoto={renderPhoto}  />   
                )}
                {!!!imagenes && (
                  <Alert variant="danger">
                    <Alert.Heading>Sin imagenes favoritas</Alert.Heading>
                    <p>
                      Ve a la sección random o selecciona una raza para empezar a agregar imagenes favoritas
                    </p>
                    <hr />
                    <p className="mb-0">
                      Dalé click en la imagen y podrás ir agregando imagenes a esta sección
                    </p>
                  </Alert>
                )}
              </StyledPhotoGalery> 
            </StyledCardImages>
        </Col>
      </Row>
    </StyledContainer>
  )
}

export default Home;