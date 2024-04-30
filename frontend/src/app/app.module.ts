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

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        // StoreModule.forRoot({
        //   neightWeddingGuestList: neightWeddingGuestListReducer,
        //   neightWeddingGuestFamilyList: neightWeddingGuestFamilyListReducer,
        // }),
        // EffectsModule.forRoot([
        //   NeightWeddingGuestListEffects,
        //   NeightWeddingGuestFamilyListEffects
        // ]),
    ],
    declarations: [
        AppComponent,
        NeightWeddingPagenotfoundComponent
    ],
    providers: [
        NeightApiService,
        LoginService,
        FetchGuestService,
        { provide: NEIGHT_CONFIG, useValue: neightEnvironment },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
