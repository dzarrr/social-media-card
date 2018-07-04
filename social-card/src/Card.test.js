import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import Card from './Card';

describe('Card', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Card />);
    console.log(renderedComponent.debug());
  })
});