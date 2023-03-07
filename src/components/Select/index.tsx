import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useBreeds } from '../../hooks/useBreeds';
import { BreedGroupedInterface, BreedInterface } from '../../models/breedModel';
import { ImageInterface } from '../../models/imageModel';
import { selectFilters, setFilters } from '../../store';
import { setImages } from '../../store/imageGalerySlice';
import { StyledSearchButton, StyledSearchDiv } from './styles';

const animatedComponents = makeAnimated();
interface Props {
  images: ImageInterface[]
}
export const SelectComponent = ({images}:Props) => {
const filterOption = ({ label, value }:BreedGroupedInterface, string:string):boolean => {
  // default search
  if (value && (label.includes(string) || value.includes(string))) return true;

  // check if a group as the filter string as label
  const groupOptions = options.filter(group => 
    {
      return  group.label.toLocaleLowerCase().includes(string)
    }
  );
  if (groupOptions) {
    for (const groupOption of groupOptions) {
      // Check if current option is in group

      if(groupOption.options){
        const option = groupOption.options.find(opt => {
          if(value){
            return opt.value.includes(value) && opt.value.includes(string);
          }
          return false;
        })
        if (option) {
          return true;
        }
      }
    }
  }
  return false;
};
  const [options, setOptions] = useState<BreedGroupedInterface[]>([])
  const { getAllBreeds } = useBreeds()

  const dispatch = useDispatch()

  let filters = useSelector(selectFilters)

  const { getPictures } = useBreeds();

  const getBreeds = async () => {
    const breeds = await getAllBreeds()
    setOptions(breeds)
  }

  useEffect(() => {
    getBreeds()
    return () => {

    }
  },[])

  const handleChange = (event: any) => {
    dispatch(setFilters(event))
  }
  const handleSearch = async () => {
    const imagesResponse = await getPictures('search',filters,21)

    dispatch(setImages(imagesResponse))
    
  }

  return (
    <StyledSearchDiv> 
      <Container fluid  style={{padding:'10px'}}>
        <Row>
          <Col xs={{ span: 8, offset: 0 }}>
            <Select
               styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width:'100%',
                  height:'100%',
                  minHeight:'80px'
                }),
              }}
              closeMenuOnSelect={false}
              components={animatedComponents}
              filterOption={filterOption}
              onChange={handleChange}
              isMulti
              options={options}
            />
          </Col>
          <Col xs={{ span: 4, offset: 0 }}>
            <StyledSearchButton onClick={handleSearch}>
              <Search/>
            </StyledSearchButton>
          </Col>
        </Row>
      </Container>
    </StyledSearchDiv>
  )
}
