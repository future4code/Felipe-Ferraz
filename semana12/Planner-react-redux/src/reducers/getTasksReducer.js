const InitialState = [];

const getTaskReducer = (state = InitialState, action) => {
  console.log("fui chamado getTaskReducer");
  switch (action.type) {
    case "GET_TASKS":
      return (state = action.payload.data);
    default:
      return state;
  }
};

export default getTaskReducer;
