import getTaskReducer from "./getTasksReducer";
import { getTasksToReducer } from "../actions/getAllTasks";

const mockStore = [];

describe("Tasks Reducer", () => {
  test("Get Tasks", () => {
    const data = {
      day: "Segunda",
      text: "lavar louça",
    };
    const mockAction = getTasksToReducer(data);
    const newStore = getTaskReducer(mockStore, mockAction);
    expect(newStore).toEqual(data);
    expect(newStore.day).toEqual("Segunda");
    expect(newStore.text).toEqual("lavar louça");
  });
});
