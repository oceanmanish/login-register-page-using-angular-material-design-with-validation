import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule, MatInputModule, MatCardModule, MatRadioModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from "@angular/material";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
@NgModule({
    declarations: [
	MyApp,
	HomePage, LoginPage, RegisterPage

    ],
    imports: [
	BrowserModule,
	IonicModule.forRoot(MyApp),
	BrowserAnimationsModule,
	MatButtonModule, MatSelectModule, MatAutocompleteModule, MatTabsModule,
	MatCheckboxModule, MatFormFieldModule, MatInputModule,
	MatRadioModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
	MatDialogModule, MatSidenavModule

    ],
    bootstrap: [IonicApp],
    entryComponents: [
	MyApp,
	HomePage, LoginPage, RegisterPage
    ],
    providers: [
	StatusBar,
	SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
