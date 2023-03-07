import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test-utils';

const renderWithContext = (element: React.ReactElement) => {
  renderWithProviders(
    <BrowserRouter>{element}</BrowserRouter>
  )
}

describe('Home Component', () => {
  beforeEach(() => {
    renderWithContext(<Home/>)
  })
  test("should render correctly", () => {    
    expect(screen).toBeTruthy()

  })
  test("should have a combobox", () => {
    expect(screen.getAllByRole('combobox')).toBeDefined()

  })
})