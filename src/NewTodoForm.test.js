import React from "react";
import { shallow, mount} from "enzyme";
import toJson from "enzyme-to-json";
import NewTodoForm from './NewTodoForm';

it("renders without crashing", function() {
  shallow(<NewTodoForm />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<NewTodoForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it("allows for change of new Todo", function() {
  let wrapper = mount(<NewTodoForm />);
  const taskInput = wrapper.find("#task");
  taskInput.instance().value = "chores"
  taskInput.simulate("change");

  expect(wrapper.state().task).toEqual("chores");
});

it("runs a mocked addTodo function on submit", function() {
  const submitFn = jest.fn();
  let wrapper = mount(<NewTodoForm addTodo={submitFn} />);
  const form = wrapper.find("form");

  form.simulate("submit");

  expect(submitFn).toHaveBeenCalled();
});

it("resets state on submit", function() {
  const submitFn = jest.fn();
  let wrapper = mount(<NewTodoForm addTodo={submitFn} />);

  const taskInput = wrapper.find("#task");
  taskInput.instance().value = "chores"
  taskInput.simulate("change");

  expect(wrapper.state().task).toEqual("chores");

  const form = wrapper.find("form");
  form.simulate("submit");

  expect(wrapper.state()).toEqual({
    task: ""
  });
});