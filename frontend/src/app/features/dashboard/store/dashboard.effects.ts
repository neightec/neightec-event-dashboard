import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, combineLatest, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { initDashboard, loadDataDashboardState, loadDataDashboardStateError, loadDataDashboardStateSuccess } from "./dashboard.actions";
import { GuestWeddingListService } from "src/app/services/guest-wedding-list.service";

@Injectable()
export class DashboardEffects { 
  
  // init$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(init),
  //     mergeMap(() => [loadDataDashboardState()])
  //   );
  // });

  // init$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(initDashboard),
  //     mergeMap(action => {
  //       return this.guestService.fetchWeddingListEffect().pipe(
  //         map(response => loadDataDashboardStateSuccess(
  //           { data: response })),
  //         catchError(() => of(loadDataDashboardStateError()))
  //       );
  //     })
  //   );
  // });

  loadDataDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDataDashboardState),
      mergeMap(() =>
        combineLatest([
          this.guestService.fetchWeddingDashboardList(),
        ]).pipe(
          map(([data]) => {
            return loadDataDashboardStateSuccess({ data });
          }),
          catchError(() => of(loadDataDashboardStateError()))
        )
      )
    );
  });

  // loadDataDashboard$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadDataDashboardStateSuccess),
  //     mergeMap(action => {
  //       return this.guestService.fetchWeddingListEffect().pipe(
  //         map(response => loadDataDashboardStateSuccess({ data: response })),
  //         catchError(() => of(loadDataDashboardStateError()))
  //       )
  //     })
  //   );
  // });

  constructor(
    private actions$: Actions,
    private guestService: GuestWeddingListService
  ) {}
}