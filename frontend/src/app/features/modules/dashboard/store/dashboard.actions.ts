import { createAction, props } from "@ngrx/store";
import { GuestDTO } from "src/app/dto/GuestDTO";

enum DashboardActions { 
  InitDashboard = '[Dashboard] Init',
  LoadDataDashboardState = '[Core] Load Data Dashboard',
  LoadDataDashboardStateSuccess = '[Core] Load Data Dashboard Success',
  LoadDataDashboardStateError = '[Core] Load Data Dashboard Error',
}

export const initDashboard = createAction(DashboardActions.InitDashboard, props<{ data: GuestDTO[] }>());

export const loadDataDashboardState = createAction(DashboardActions.LoadDataDashboardState);
export const loadDataDashboardStateSuccess = createAction(
  DashboardActions.LoadDataDashboardStateSuccess,
  props<{data: GuestDTO[]}>()
);
export const loadDataDashboardStateError = createAction(DashboardActions.LoadDataDashboardStateError);

export const updateDataDashboard = createAction(
  '[Modelling Table] External Modelling Action',
  props<{guests: string[]}>()
);