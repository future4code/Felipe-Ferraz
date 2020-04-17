import { getTasksToReducer, getTasks } from "./getAllTasks";
import axios from "axios";

test("Verificar ação", () => {
  const mockData = { day: "segunda", id: 1, tarefa: "Lavar louça" };
  const mockGetTaksToReducer = getTasksToReducer(mockData);
  expect(mockGetTaksToReducer.payload).toBeDefined();
  expect(mockGetTaksToReducer.payload.data).toEqual(mockData);
  expect(mockGetTaksToReducer.type).toEqual("GET_TASKS");
});

test("Testando getTasks", async () => {
  axios.get = jest.fn(() => ({
    data: { task: [{ day: "segunda", tarefa: "lavar louça" }] },
  }));
  const mockDispatch = jest.fn();
  await getTasks()(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledWith(getTasksToReducer());
});
