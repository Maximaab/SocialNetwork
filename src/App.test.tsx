import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {allData} from "./components/data";

test('renders learn react link', () => {
  render(<App allData={allData} addPost={()=>{}} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
