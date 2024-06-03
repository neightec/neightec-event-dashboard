import { createReducer, on } from "@ngrx/store";
import { loadDataDashboardState, loadDataDashboardStateSuccess } from "./dashboard.actions";
import { DashboardState } from "./dashboard.state";

export const dashboardReducer = createReducer(
  on(
    loadDataDashboardState,
    loadDataDashboardStateSuccess,
    (state, action): DashboardState => {
      return {
        ...state as DashboardState,
        data: (state as DashboardState).data
      }
    })
);