import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

// @ts-ignore
import * as Icons from '@carbon/icons';
import { NeightTechWeddingHomeComponent } from './component/neight-tech-wedding-home/neight-tech-wedding-home.component';
import { NeightTechWeddingDashboardComponent } from './component/neight-tech-wedding-dashboard/neight-tech-wedding-dashboard.component';
import { NeightTechWeddingGuestListComponent } from './component/neight-tech-wedding-guest-list/neight-tech-wedding-guest-list.component';
import { DashboardEffects } from './features/modules/dashboard/store/dashboard.effects';
import { dashboardReducer } from './features/modules/dashboard/store/dashboard.reducer';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          dashboard: dashboardReducer
        }),
        EffectsModule.forRoot([
          DashboardEffects,
        ]),
        IconModule,
        UIShellModule,
        ThemeModule,
        SearchModule,
        SkeletonModule,
        TabsModule,
        TableModule,
        PaginationModule
      ],
      declarations: [
        AppComponent,
        NeightWeddingPagenotfoundComponent,
        NeightTechWeddingHomeComponent,
        NeightTechWeddingDashboardComponent,
        NeightTechWeddingGuestListComponent,
    ],
    providers: [
      NeightApiService,
      LoginService,
      FetchGuestService,
      { provide: NEIGHT_CONFIG, useValue: neightEnvironment },
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
