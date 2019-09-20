import React from "react";
import { shallow, mount} from "enzyme";
import toJson from "enzyme-to-json";
import EditTodoForm from './EditTodoForm';

it("renders without crashing", function() {
  shallow(<EditTodoForm />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<EditTodoForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it("allows for change of new Todo", function() {
  let wrapper = mount(<EditTodoForm value="chore"/>);
  wrapper.instance().handleChange({ target: {
    name: "editTask",
    value: "chores"
  }})

  expect(wrapper.state().editTask).toEqual("chores");
});

it("runs a mocked updateTodo function on submit", function() {
  const submitFn = jest.fn();
  let wrapper = mount(<EditTodoForm updateTodo={submitFn} />);
  const form = wrapper.find("form");

  form.simulate("submit");

  expect(submitFn).toHaveBeenCalled();
});