import React from 'react';
import { shallow } from 'enzyme';

import Caption from '../index';

const renderComponent = (props = {}) => shallow(
    <Caption {...props}/>
  );

describe('<Caption />', () => {
    it('should render a <span> tag', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.is('span')).toBe(true);
      });

      it('should have a value', () => {
        const value = 'someValueForCaption';
        const renderedComponent = renderComponent({ value });
        expect(renderedComponent.find(value).length).toEqual(1);
      });
});