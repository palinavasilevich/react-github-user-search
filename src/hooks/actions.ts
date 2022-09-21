import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { githubActions } from "../store/github/github.slice";

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
