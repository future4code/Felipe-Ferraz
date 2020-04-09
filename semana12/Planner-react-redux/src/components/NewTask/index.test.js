import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import NewTasks from "./index";
import Button from "@material-ui/core/Button";

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
    createButtonTask.simulate("click");
    expect(mockCreateTask).toHaveBeenCalledWith(mockTask.day, mockTask.text);
  });
});
