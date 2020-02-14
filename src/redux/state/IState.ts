export default class IState {
  state?: iDataState;
  errorMessage?: String;
}

export enum iDataState {
  initial = 0,
  loading,
  loaded,
  error,
}
