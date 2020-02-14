import AppState from '../state/AppState';
import {iDataState} from '../state/IState';
import IAction from '../actions/IAction';
import AppAction from '../actions/AppAction';

export default class AppReducer {
  private static readonly _initialState: AppState = {
    state: iDataState.initial,
  };

  public static reducer(
    state: AppState = AppReducer._initialState,
    action: IAction<any, AppState>,
  ): AppState {
    switch (action.type) {
      case AppAction.INIT_APP:
        return state;
      default:
        return state;
    }
  }
}
