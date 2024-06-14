import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardFeatureKey, DashboardState } from "./dashboard.state";

export const selectFeature = createFeatureSelector<DashboardState>(DashboardFeatureKey);

export const selectDashboard = createSelector(selectFeature, (state) => state.data);