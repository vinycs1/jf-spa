export const createReducer = (initialState, handlers) => function reducer(state, action) {
  if (state === undefined) state = initialState;

  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
