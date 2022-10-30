const issueReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ISSUELIST':
      return {
        ...state,
        issueList: action.payload,
        loading: false,
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default issueReducer;
