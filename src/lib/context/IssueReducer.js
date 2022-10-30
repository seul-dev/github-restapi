const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ISSUELIST':
      return {
        ...state,
        issueList: loadingState,
      };
    case 'GET_ISSUELIST_SUCCESS':
      return {
        ...state,
        issueList: success(action.data),
      };
    case 'GET_ISSUELIST_ERROR':
      return {
        ...state,
        issueList: error(action.error),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};
