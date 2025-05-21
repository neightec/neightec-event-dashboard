import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, inject, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Configs
import { NeightConfiguration, NEIGHT_CONFIG } from 'src/neight.config';

//Services
import { NeightApiService } from 'src/neight-api.service';
import { neightEnvironment } from 'src/environments/environment';
import { LoginService } from './services/login.service';
import { NeightWeddingPagenotfoundComponent } from './component/neight-wedding-pagenotfound/neight-wedding-pagenotfound.component';
import { FetchGuestService } from './services/fetch-guest.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CheckboxModule,
  DatePickerModule,
  DialogModule,
  FileUploaderModule,
  GridModule,
  IconModule,
  IconService,
  InlineLoadingModule,
  InputModule,
  LoadingModule,
  ModalModule,
  NotificationModule,
  NumberModule,
  PaginationModule,
  PlaceholderModule,
  ProgressIndicatorModule,
  SearchModule,
  SkeletonModule,
  SliderModule,
  StructuredListModule,
  TableModule,
  TabsModule,
  TagModule,
  TilesModule,
  UIShellModule,
  ThemeModule
} from 'carbon-components-angular';

import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
  TranslateService,
} from '@ngx-translate/core';

// @ts-ignore
import * as Icons from '@carbon/icons';
import { NeightTechWeddingHomeComponent } from './component/neight-tech-wedding-home/neight-tech-wedding-home.component';
import { NeightTechWeddingDashboardComponent } from './component/neight-tech-wedding-dashboard/neight-tech-wedding-dashboard.component';
import { NeightTechWeddingGuestListComponent } from './component/neight-tech-wedding-guest-list/neight-tech-wedding-guest-list.component';
import { DashboardEffects } from './features/modules/dashboard/store/dashboard.effects';
import * as dashboardReducer from './features/modules/dashboard/store/dashboard.reducer';
import { UploadButtonFilesComponent } from './features/modules/dashboard/components/upload-button-files/upload-button-files.component';
import { DashboardOverviewComponent } from './features/modules/dashboard/pages/dashboard-overview/dashboard-overview.component';
import { RegisterGuestDialogComponent } from './features/modules/dashboard/components/register-guest-dialog/register-guest-dialog.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { catchError, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth/auth.service';
import { ACCESS_TOKEN_HEADER_KEY } from './models/auth.model';
import { NeightTechLoginComponent } from './component/neight-tech-login/neight-tech-login.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'de',
  isolate: false,
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export function initializeTranslation(translate: TranslateService) {
  return () => {
    if (translateModuleConfig.defaultLanguage) {
      return translate.use(translateModuleConfig.defaultLanguage).toPromise();
    }
    return of(true).toPromise();
  };
}

export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);

  const authToken = authService.getAccessToken();

  if (authToken) {
    req = req.clone({
      setHeaders: {
        [ACCESS_TOKEN_HEADER_KEY] : `Bearer ${authToken}`,
      },
    });
  }

  return next(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          authService.logout();
        }

        const errorMessage = JSON.stringify(error.error, null, '\t');
        toastrService.error(errorMessage, 'Error!').onHidden
          .subscribe(() => {
            authService.logout();
          });

        return throwError(() => error);
      })
    )

}

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(dashboardReducer.dashboardReducerKey, dashboardReducer.dashboardReducer),
        EffectsModule.forFeature([
          DashboardEffects,
        ]),
        TranslateModule.forRoot(translateModuleConfig),
        IconModule,
        UIShellModule,
        ThemeModule,
        SearchModule,
        SkeletonModule,
        TabsModule,
        TableModule,
        PaginationModule,
        ButtonModule,
        ModalModule,
        PlaceholderModule,
        InputModule
      ],
      declarations: [
        AppComponent,
        NeightWeddingPagenotfoundComponent,
        NeightTechWeddingHomeComponent,
        NeightTechWeddingDashboardComponent,
        NeightTechWeddingGuestListComponent,
        UploadButtonFilesComponent,
        DashboardOverviewComponent,
        RegisterGuestDialogComponent,
        NeightTechLoginComponent,
    ],
    providers: [
      NeightApiService,
      LoginService,
      FetchGuestService,
      { provide: NEIGHT_CONFIG, useValue: neightEnvironment },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeTranslation,
        deps: [TranslateService],
        multi: true,
      },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 

  groupedIcons: any[] = [];
  constructor(protected iconService: IconService) {
    const iconMap = new Map();

    for (const [_, descriptor] of Object.entries(Icons) as any) {
      this.iconService.register(descriptor as object);
      if (!iconMap.has(descriptor['name'])) {
        iconMap.set(descriptor['name'], []);
      }
      iconMap.get(descriptor['name']).push(descriptor);
    }
    this.groupedIcons = Array.from(iconMap.values());
  }

}
