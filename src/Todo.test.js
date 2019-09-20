import React from "react";
import { shallow } from "enzyme";
import Todo from './Todo';


describe('<Todo /> rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo task="chores" />);
  });

  describe('Todo item', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});