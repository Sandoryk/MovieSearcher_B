import React from 'react';
import FilmDetailed from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const props = {
        filmTitle: 'SomeTitle',
        releaseDate: '12/01/2016',
        filmGenre: 'triller'
    }
    const tree = renderer
    .create(<FilmDetailed {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});