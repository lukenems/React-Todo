import React from "react";
import { shallow, mount} from "enzyme";
import toJson from "enzyme-to-json";
import TodoList from './TodoList';

it("renders without crashing", function() {
  shallow(<TodoList />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<TodoList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("renders a list of todos", function() {
  let wrapper = mount(<TodoList />);

  wrapper.setState({todos: [
    {id: 1, task: "dishes"},
    {id: 2, task: "sweep"},
    {id: 3, task: "chores"}
  ]});

  expect(wrapper.state().todos.length).toEqual(3);
  expect(wrapper.state()).toEqual({todos: [
    {id: 1, task: "dishes"},
    {id: 2, task: "sweep"},
    {id: 3, task: "chores"}
  ]});
  expect(wrapper.find("li").last().text()).toContain("chores");
});

it("removeTodo function should remove a task", function() {
  let wrapper = mount(<TodoList />);

  wrapper.setState({todos: [
    {id: 1, task: "dishes"},
    {id: 2, task: "sweep"},
    {id: 3, task: "chores"}
  ]});

  wrapper.instance().removeTodo(2);

  expect(wrapper.state().todos.length).toEqual(2);
});

it("addTodo function should add a task", function() {
  let wrapper = mount(<TodoList />);

  wrapper.setState({todos: [
    {id: 1, task: "dishes"},
    {id: 2, task: "sweep"}
  ]});

  wrapper.instance().addTodo({id: 3, task: "windows" });

  expect(wrapper.state().todos.length).toEqual(3);
  expect(wrapper.state().todos[2].id).toEqual(expect.any(String));
});