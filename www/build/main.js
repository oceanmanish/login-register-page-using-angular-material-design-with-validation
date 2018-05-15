webpackJsonp([2],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, platform, loadingController, formBuilder, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.authForm = this.formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.authForm.valid) {
            this.loginUser(this.authForm.value);
        }
        else {
            Object.keys(this.authForm.controls).forEach(function (field) {
                var control = _this.authForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    /**
     * this is for login application
     */
    LoginPage.prototype.loginUser = function (data) {
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ionic project\external-project\DocApp\src\pages\login\login.html"*/`<ion-content padding>\n    <div class="login">\n	<form class="login-form" [formGroup]="authForm">\n	    <span class="error-message error-message-2" *ngIf="IsError" innerHtml="{{errorMsg}}"></span>\n	    <div>\n		<mat-form-field class="full-width">\n		    <input type="text" matInput [formControl]="authForm.controls[\'email\']" [ngClass]="{\'error-border\':!authForm.controls[\'email\'].valid}" placeholder="Email id *" >\n		</mat-form-field>\n		<div class="full-width error-box" *ngIf="authForm.controls[\'email\'].hasError(\'required\') && authForm.controls[\'email\'].touched">* Mobile Number is required!</div>\n\n	    </div>\n\n	    <div>\n		<mat-form-field class="full-width">\n		    <input matInput type="password" [formControl]="authForm.controls[\'password\']" placeholder="Password" required>\n		</mat-form-field>\n		<div class="full-width error-box" *ngIf="authForm.controls[\'password\'].hasError(\'required\') && authForm.controls[\'password\'].touched">* Password is required!</div>\n	    </div>\n\n	    <button mat-button class="btn-login" (click)="onSubmit()" >Sign in</button>\n\n	</form>\n	<button mat-button class="btn-login" (click)="registerPage()" >Register</button>\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\ionic project\external-project\DocApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		365,
		1
	],
	"../pages/register/register.module": [
		366,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, platform, loadingController, formBuilder, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.registerForm = this.formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])],
            'mobile_number': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^(?=(.*[0-9])).{10,}$')])],
            'cnf_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])],
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.registerUser(this.registerForm.value);
        }
        else {
            Object.keys(this.registerForm.controls).forEach(function (field) {
                var control = _this.registerForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    /**
     * this is for register user function
     */
    RegisterPage.prototype.registerUser = function (data) {
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\ionic project\external-project\DocApp\src\pages\register\register.html"*/`<ion-header>\n  <ion-navbar style="color:rgb(218, 179, 255)">\n    \n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="login">\n	<form class="login-form" [formGroup]="registerForm">\n	    <span class="error-message error-message-2" *ngIf="IsError" innerHtml="{{errorMsg}}"></span>\n\n	    <mat-form-field class="full-width">\n		<input type="text" matInput [formControl]="registerForm.controls[\'email\']" [ngClass]="{\'error-border\':!registerForm.controls[\'email\'].valid}" placeholder="Email id *" >\n	    </mat-form-field>\n	    <div class="full-width error-box" *ngIf="registerForm.controls[\'email\'].hasError(\'required\') && registerForm.controls[\'email\'].touched">* Email id is required!</div>\n\n	    <mat-form-field class="full-width">\n		<input type="text" matInput [formControl]="registerForm.controls[\'mobile_number\']" [ngClass]="{\'error-border\':!registerForm.controls[\'mobile_number\'].valid}" placeholder="Mobile Number *" >\n	    </mat-form-field>\n	    <div class="full-width error-box" *ngIf="registerForm.controls[\'mobile_number\'].hasError(\'required\') && registerForm.controls[\'mobile_number\'].touched">* Mobile Number is required!</div>\n\n	    <mat-form-field class="full-width">\n		<input matInput type="password" [formControl]="registerForm.controls[\'password\']" placeholder="Password" required>\n	    </mat-form-field>\n	    <div class="full-width error-box" *ngIf="registerForm.controls[\'password\'].hasError(\'required\') && registerForm.controls[\'password\'].touched">* Password is required!</div>\n\n	    <mat-form-field class="full-width">\n		<input matInput type="password" [formControl]="registerForm.controls[\'cnf_password\']" placeholder="Confirm Password" required>\n	    </mat-form-field>\n	    <div class="full-width error-box" *ngIf="registerForm.controls[\'cnf_password\'].hasError(\'required\') && registerForm.controls[\'cnf_password\'].touched">* Confirm password is required!</div>\n\n\n\n\n	    <button mat-button class="btn-login" style="margin-top:20px;" (click)="onSubmit()" >Register</button>\n\n	</form>\n    </div>\n</ion-content>\n`/*ion-inline-end:"E:\ionic project\external-project\DocApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__["a" /* MatSidenavModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../pages/home/home';
//import {RegisterPage} from '../pages/register/register';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic project\external-project\DocApp\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"E:\ionic project\external-project\DocApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic project\external-project\DocApp\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Home \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"E:\ionic project\external-project\DocApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.js.map