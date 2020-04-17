import Planner from "./index";
import React from "react";
import { shallow, mount } from "enzyme";

test("Call didMout", () => {
  const mockGetTasks = jest.fn;
  const allTasks = [{ day: "segunda", texto: "Lavar louça" }];
  const store = { getState: jest.fn };
  const component = shallow(
    <Planner allTasks={allTasks} store={store} getTasks={mockGetTasks} />
  );
  const instance = component;
  console.log(instance);
  //instance.componentDidMount();
  expect(instance).toHaveBeenCalled();
});
