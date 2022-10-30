import { createContext, useReducer } from 'react';
import issueReducer from './IssueReducer';

const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const initialState = {
    issueList: [],
    issue: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(issueReducer, initialState);

  return (
    <IssueContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export default IssueContext;
