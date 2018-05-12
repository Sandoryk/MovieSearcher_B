import React from 'react';
import { mount } from 'enzyme';

import SearchMode from '../index';

const renderComponent = (props = {}) => mount(
  <SearchMode {...props} />
);

describe('<SearchMode />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('<button').length).toEqual(2);
    expect(renderedComponent.find('<span').length).toEqual(1);
  });
});
