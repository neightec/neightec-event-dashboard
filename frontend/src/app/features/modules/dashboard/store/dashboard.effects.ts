import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, combineLatest, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { deleteGuestsFrom, initDashboard, loadDataDashboardState, loadDataDashboardStateError, loadDataDashboardStateSuccess, loadDataGuestAfterDeleteStateError, loadDataGuestAfterDeleteStateSuccess, updateDataDashboard, uploadDashboardFiles } from "./dashboard.actions";
import { GuestWeddingListService } from "src/app/services/guest-wedding-list.service";
import { GuestDTO } from "src/app/dto/GuestDTO";

@Injectable()
export class DashboardEffects { 
  
  loadDataDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDataDashboardState),
      mergeMap(action => {
        return this.guestService.fetchWeddingDashboardList().pipe(
          map(response => loadDataDashboardStateSuccess({ data: response })),
          catchError(() => of(loadDataDashboardStateError()))
        )
      })
    );
  });

  updateDataDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateDataDashboard),
      mergeMap(action => {
        return this.guestService.enterGuestToWeddingListManual(action.guests).pipe(
          map(response => loadDataDashboardStateSuccess({ data: response })),
          catchError(() => of(loadDataDashboardStateError()))
        )
      })
    );
  });

  deleteGuestDataDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteGuestsFrom),
      mergeMap(action => {
        return this.guestService.deleteGuests(action.guests).pipe(
          map(response => loadDataGuestAfterDeleteStateSuccess({ data: response })),
          catchError(() => of(loadDataGuestAfterDeleteStateError()))
        )
      })
    );
  });

  uploadGuestList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(uploadDashboardFiles),
      mergeMap(action => {
        return this.guestService.enterGuestToWeddingListUpload(action.files).pipe(
          map(response => loadDataDashboardStateSuccess({ data: response })),
          catchError(() => of(loadDataDashboardStateError()))
        )
      })
    );
  });

  constructor(
    private actions$: Actions,
    private guestService: GuestWeddingListService
  ) {}
}