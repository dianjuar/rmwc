import React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  GridList,
  GridTile,
  GridTileIcon,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle
} from './grid-list';

const tileAspectOptions = {
  '1x1': '1x1',
  '16x9': '16x9',
  '2x3': '2x3',
  '3x2': '3x2',
  '4x3': '4x3',
  '3x4': '3x4'
};

storiesOf('GridLists', module).add('Grid List', () => {
  return (
    <GridList
      tileGutter1={boolean('tileGutter1', false)}
      headerCaption={boolean('headerCaption', false)}
      twolineCaption={boolean('twolineCaption', false)}
      withIconAlignStart={boolean('withIconAlignStart', false)}
      tileAspect={select('tileAspect', tileAspectOptions, '1x1') as any}
    >
      {Array(4)
        .fill(undefined)
        .map((val, i) => (
          <GridTile key={i}>
            <GridTilePrimary>
              <GridTilePrimaryContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
            </GridTilePrimary>
            <GridTileSecondary>
              <GridTileIcon>info</GridTileIcon>
              <GridTileTitle>Tile {i + 1}</GridTileTitle>
            </GridTileSecondary>
          </GridTile>
        ))}
    </GridList>
  );
});
