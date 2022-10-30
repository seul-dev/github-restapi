import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  issueList: {
    loading: false,
    data: null,
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};
