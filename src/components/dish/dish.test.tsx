import React from 'react';
import { render, screen } from '@testing-library/react';
import Dish from './dish';

const testData={
  id:1,
  name:'Dish title',
  description:'description one',
  price:'50USD',
  photo:'http://localhost:8080/images/bandeja.jpg'
}

test('renders bad thing red flag', () => {
  const { container } = render(<Dish dishData={testData} editCallBack={()=>{}} deleteCallBack={()=>{}}/>);
  //Render name
  const name = screen.getByText(/Dish title/i);
  expect(name).toBeInTheDocument();
  //Render description
  const description = screen.getByText(/description one/i);
  expect(description).toBeInTheDocument();
  //Render price
  const price = screen.getByText(/50USD/i);
  expect(price).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const imgElement=container.getElementsByTagName('img');
  expect(imgElement[0].src).toBe('http://localhost:8080/images/bandeja.jpg');
});
