// containers/SnakeGame/index.js
import React, { Component } from 'react';
import * as _ from 'lodash';
import { useData } from '../hooks/provider';
import styled from "styled-components";


export default function Map () {
    
  const {GAME_WIDTH, Color} =  useData()
  const blocks = _.range(0, GAME_WIDTH).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_WIDTH * indexY,
            x: indexX,
            y: indexY,
        }
    ))
  ));
  const Main = styled.div`
  background: ${Color[0]};
  color: white;
  display: grid;
  grid-template-columns: repeat(${GAME_WIDTH}, 1fr);
  grid-template-rows: repeat(${GAME_WIDTH}, 1fr);
  width: 100%;
  height: 100%;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
`;
  const BlackCell = styled.div`
  background: ${Color[1]};
  color: white;
  `;

  const a = [1,2,3];
       return (
           <Main>
              {blocks.map(item => (item.map(
                (cell =>  <BlackCell></BlackCell>)
              )
             ))}
           </Main>
       );
}
