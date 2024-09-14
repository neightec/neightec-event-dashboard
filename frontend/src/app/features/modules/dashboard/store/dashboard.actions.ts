import { createAction, props } from "@ngrx/store";
import { GuestDTO } from "src/app/dto/GuestDTO";

enum DashboardActions { 
  InitDashboard = '[Dashboard] Init',
  LoadDataDashboardState = '[Core] Load Data Dashboard',
  LoadDataDashboardStateSuccess = '[Core] Load Data Dashboard Success',
  LoadDataDashboardStateError = '[Core] Load Data Dashboard Error',
  LoadDataGuestAfterDeleteStateSuccess = '[Core] Load Data Guest Dashboard After Delete success',
  LoadDataGuestAfterDeleteStateFailure = '[Core] Load Data Guest Dashboard After Delete failure',
}

export const initDashboard = createAction(DashboardActions.InitDashboard, props<{ data: GuestDTO[] }>());

export const loadDataDashboardState = createAction(DashboardActions.LoadDataDashboardState);
export const loadDataDashboardStateSuccess = createAction(
  DashboardActions.LoadDataDashboardStateSuccess,
  props<{data: GuestDTO[]}>()
);
export const loadDataDashboardStateError = createAction(DashboardActions.LoadDataDashboardStateError);

export const loadDataGuestAfterDeleteStateSuccess = createAction(
  DashboardActions.LoadDataGuestAfterDeleteStateSuccess,
  props<{data: GuestDTO[]}>()
);
export const loadDataGuestAfterDeleteStateError = createAction(DashboardActions.LoadDataGuestAfterDeleteStateFailure);

export const updateDataDashboard = createAction(
  '[Dashboard Actions] add guest to dashboard',
  props<{guests: string[]}>()
);

export const deleteGuestsFrom = createAction(
  '[Dashboard Actions] delete guest to dashboard',
  props<{guests: string[]}>()
);