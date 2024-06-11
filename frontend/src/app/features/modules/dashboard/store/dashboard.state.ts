import { GuestDTO } from "src/app/dto/GuestDTO";
import { Guest } from "src/app/models/guest";

export const DashboardFeatureKey = 'dashboard';

export interface DashboardState {
  data: GuestDTO[] | null;
}