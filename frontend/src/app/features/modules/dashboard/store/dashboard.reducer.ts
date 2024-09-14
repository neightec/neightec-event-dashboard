import { createReducer, on } from "@ngrx/store";
import { loadDataDashboardStateError, loadDataDashboardStateSuccess, loadDataGuestAfterDeleteStateError, loadDataGuestAfterDeleteStateSuccess } from "./dashboard.actions";
import { GuestDTO } from "src/app/dto/GuestDTO";

export const dashboardReducerKey = 'dashboard-reducer-key';

export interface DashboardState {
  data: GuestDTO[] | [];
}

export const initialState: DashboardState = {
  data: []
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    loadDataDashboardStateSuccess,
    (state, action) => ({
      ...state as DashboardState,
      data: action.data,
    })
  ),
  on(
    loadDataDashboardStateError,
    (state, action) => ({
      ...state as DashboardState,
      data: null,
    })
  ),
  on(
    loadDataGuestAfterDeleteStateSuccess,
    (state, action) => ({
      ...state as DashboardState,
      data: action.data,
    })
  ),
  on(
    loadDataGuestAfterDeleteStateError,
    (state, action) => ({
      ...state as DashboardState,
      data: null,
    })
  ),
);