import { SkillState, SkillAction } from './../types/types';
import { requestStates } from '../consts/consts';
import { ActionType } from '../types/types';

export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING',
  success: 'FETCH_SUCCESS',
  error: 'FETCH_ERROR',
};

export const initialState: SkillState = {
  languageList: [],
  requestState: requestStates.idle,
};

export const skillReducer: React.Reducer<SkillState, SkillAction> = (
  state: SkillState,
  action: SkillAction
) => {
  switch (action.type) {
    case actionTypes.initial: {
      return {
        languageList: [],
        requestState: requestStates.idle,
      };
    }
    case actionTypes.fetch: {
      return {
        ...state,
        requestState: requestStates.loading,
      };
    }
    case actionTypes.success: {
      return {
        languageList: action.payload.languageList,
        requestState: requestStates.success,
      };
    }
    case actionTypes.error: {
      return {
        languageList: [],
        requestState: requestStates.error,
      };
    }
    default: {
      throw new Error();
    }
  }
};
