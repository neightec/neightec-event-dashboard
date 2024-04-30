import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
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
import { NeightWeddingQrCodeComponent } from './component/neight-wedding-qr-code/neight-wedding-qr-code.component';
import { NeightToastTemplateComponent } from './component/neight-toast-template/neight-toast-template.component';
import { ToastService } from './services/toast.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatTabsModule,
        MatSnackBarModule,
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
        NeightWeddingPagenotfoundComponent,
        NeightWeddingQrCodeComponent,
        NeightToastTemplateComponent,
    ],
    providers: [
        NeightApiService,
        LoginService,
        FetchGuestService,
        ToastService,
        { provide: NEIGHT_CONFIG, useValue: neightEnvironment },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
