const isPending = (action) => {
  return action.type.endsWith("/pending");
};

const isRejected = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export { isPending, isRejected, handlePending, handleRejected };
