
import React, { FC } from 'react';
import { DetailsModal } from '../DetailsModal';

import { StyledTable } from './styles';

export const Table: FC = () => {

  const items = [
    {
      name: "hammer",
      price: "1,99",
      description: "this is hammer",
      weight: "200g",
      id: Math.random(),
    },
    {
      name: "hammer",
      price: "1,99",
      description: "this is hammer",
      weight: "200g",
      id: Math.random(),
    },
    {
      name: "screwdriver",
      price: "1,99",
      description: "this is hammer",
      weight: "200g",
      id: Math.random(),
    }
  ]
  return (
    <StyledTable>
     
          {items.map(item =>{
            return (
              <ul>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.weight}</li>
              <li>{item.id}</li>
              </ul> )
  
          })}
      
          <DetailsModal/>
    </StyledTable> 
  )
}
