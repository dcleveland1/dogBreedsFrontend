import { fireEvent, render, screen } from '@testing-library/react'
import {SelectComponent} from '../../components/Select'
import { store } from "../../store";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test-utils';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useBreeds } from '../../hooks/useBreeds';
import { BreedGroupedInterface } from '../../models/breedModel';


const renderWithContext = (element: React.ReactElement) => {
  renderWithProviders(
    <BrowserRouter>{element}</BrowserRouter>
  )
}

describe('Select Component', () => {
  beforeEach(() => {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ]
    renderWithContext(   
      <div data-testid='test'>   
        <Select
          closeMenuOnSelect={false}
          isMulti
          name="select_breeds"
          options={options}
        />
      </div>
    )

  })
  test("should render correctly", () => {    
    expect(screen).toBeTruthy()

  })
  test("should have a combobox", () => {
    expect(screen.getAllByRole('combobox')).toBeDefined()

  })


  test('should contain the options', async () => {
    const selectWrapper = screen.getByTestId('test')
    const input = selectWrapper.firstChild
    fireEvent.keyDown(input, { keyCode: 40 })

    screen.debug()
    expect(screen.getByTestId('test')).toHaveTextContent('One')
    expect(screen.getByTestId('test')).toHaveTextContent('Two')
    expect(screen.getByTestId('test')).toHaveTextContent('Three')
    
  })

  test('should select the option and add selected options', async () => {
    const selectWrapper = screen.getByTestId('test')
    const input = selectWrapper.firstChild
    fireEvent.keyDown(input, { keyCode: 40 })
    const option = await screen.findByText('One') // its a label in options list
    fireEvent.click(option)
    expect(screen.getByText('One')).toHaveClass('css-wsp0cs-MultiValueGeneric')
    const option2 = await screen.findByText('Two') // its a label in options list
    fireEvent.click(option2)
    expect(screen.getByText('Two')).toHaveClass('css-wsp0cs-MultiValueGeneric')
    
  })
})