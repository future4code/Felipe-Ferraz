import React from "react";
import { shallow } from "enzyme";
import NewTasks from "./index";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

const mockTask = {
  text: "Lavar o carro",
  day: "Segunda",
};

describe("Create Task Component", () => {
  test("Create Task", () => {
    window.alert = jest.fn();
    const mockCreateTask = jest.fn();
    const component = shallow(<NewTasks createTask={mockCreateTask} />); // so pode colocar componente dentro do shallow
    component.setState(mockTask);
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    component.instance().saveNewTask(mockEvent);
    const createButtonTask = component.find(Button);
    expect(createButtonTask).toHaveLength(1);
    createButtonTask.simulate("Onclick");
    expect(mockCreateTask).toHaveBeenCalledWith(mockTask.day, mockTask.text);
  });

  test("Open menu", () => {
    const mockData = {
      target: {
        name: "nome",
        value: "valor",
      },
    };
    const test = { target: jest.fn() };
    const component = shallow(<NewTasks />);
    component.setState(jest.fn());
    component.instance().handleChange(test);
    const mockSelect = component.find(Select);
    expect(mockSelect).toHaveLength(1);
    mockSelect.simulate("change");
    expect(test).toHaveBeenCalled();
  });
});
