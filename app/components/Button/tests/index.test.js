import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

const renderComponent = (props = {}) => shallow(
  <Button {...props}/>
);

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have caption', () => {
    const caption = 'buttonCaption';
    const renderedComponent = renderComponent({ caption });
    expect(renderedComponent.find(caption).length).toEqual(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').prop('className')).toBeDefined();
  });

});
