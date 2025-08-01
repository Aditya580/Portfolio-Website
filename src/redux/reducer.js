const initialState = {
  activeTab: 'Home',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
