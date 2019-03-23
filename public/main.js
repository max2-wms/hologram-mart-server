(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var _components_holograms_holograms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/holograms/holograms.component */ "./src/app/components/holograms/holograms.component.ts");
/* harmony import */ var _components_hologram_hologram_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hologram/hologram.component */ "./src/app/components/hologram/hologram.component.ts");
/* harmony import */ var _components_add_hologram_add_hologram_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-hologram/add-hologram.component */ "./src/app/components/add-hologram/add-hologram.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");



// Services

// Components






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'holograms',
    },
    {
        path: 'holograms',
        component: _components_holograms_holograms_component__WEBPACK_IMPORTED_MODULE_4__["HologramsComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'hologram/:hologramid',
        component: _components_hologram_hologram_component__WEBPACK_IMPORTED_MODULE_5__["HologramComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'add-hologram',
        component: _components_add_hologram_add_hologram_component__WEBPACK_IMPORTED_MODULE_6__["AddHologramComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'settings',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div id=\"content\" class=\"container\">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  padding: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvU2l0ZXMvaW50ZXJuYWwvaG9sb2dyYW0tbWFydC9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Services
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var config = {
    appName: 'hologram mart',
    version: '0.0.0',
    backendAPI_URL: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendHost + "/api",
    backendAUTH_API_URL: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendHost + "/auth"
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/hologram/hologram.service */ "./src/app/shared/services/hologram/hologram.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var _shared_services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth/token-interceptor.service */ "./src/app/shared/services/auth/token-interceptor.service.ts");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_holograms_holograms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/holograms/holograms.component */ "./src/app/components/holograms/holograms.component.ts");
/* harmony import */ var _components_hologram_hologram_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hologram/hologram.component */ "./src/app/components/hologram/hologram.component.ts");
/* harmony import */ var _components_add_hologram_add_hologram_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-hologram/add-hologram.component */ "./src/app/components/add-hologram/add-hologram.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");







// Services





// Pipes

// components










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_holograms_holograms_component__WEBPACK_IMPORTED_MODULE_13__["HologramsComponent"],
                _components_hologram_hologram_component__WEBPACK_IMPORTED_MODULE_14__["HologramComponent"],
                _components_add_hologram_add_hologram_component__WEBPACK_IMPORTED_MODULE_15__["AddHologramComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_11__["CapitalizePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [
                _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_6__["HologramService"],
                _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-hologram/add-hologram.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-hologram/add-hologram.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"hologramForm\" (ngSubmit)=\"onSubmit(hologramForm.value)\">\n    <fieldset>\n        <legend>Add Hologram</legend>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">First Name</label>\n            <input type=\"email\" class=\"form-control\" name=\"firstname\" formControlName=\"firstname\" placeholder=\"Enter First Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Last Name</label>\n            <input type=\"email\" class=\"form-control\" name=\"lastname\" formControlName=\"lastname\" placeholder=\"Enter Last Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Image URL</label>\n            <input type=\"email\" class=\"form-control\" name=\"imageUrl\" formControlName=\"imageUrl\" placeholder=\"Enter Image URL\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Price</label>\n            <input type=\"number\" class=\"form-control\" name=\"price\" formControlName=\"price\" placeholder=\"Enter Price\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/components/add-hologram/add-hologram.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-hologram/add-hologram.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWhvbG9ncmFtL2FkZC1ob2xvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-hologram/add-hologram.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-hologram/add-hologram.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddHologramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHologramComponent", function() { return AddHologramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/hologram/hologram.service */ "./src/app/shared/services/hologram/hologram.service.ts");




// Services

var AddHologramComponent = /** @class */ (function () {
    function AddHologramComponent(router, fb, hologramService) {
        this.router = router;
        this.fb = fb;
        this.hologramService = hologramService;
        this.hologramForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            imageUrl: [''],
            price: ['']
        });
    }
    AddHologramComponent.prototype.ngOnInit = function () {
    };
    AddHologramComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.hologramService.addHologram(this.hologramForm.value)
            .subscribe(function (hologram) {
            console.log('hologram added!');
            _this.router.navigate(['/']);
        });
    };
    AddHologramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-hologram',
            template: __webpack_require__(/*! ./add-hologram.component.html */ "./src/app/components/add-hologram/add-hologram.component.html"),
            styles: [__webpack_require__(/*! ./add-hologram.component.scss */ "./src/app/components/add-hologram/add-hologram.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_4__["HologramService"]])
    ], AddHologramComponent);
    return AddHologramComponent;
}());



/***/ }),

/***/ "./src/app/components/hologram/hologram.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/hologram/hologram.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hologram\" id=\"hologram\" class=\"card mb-3\">\n    <h3 class=\"card-header\">\n        <span>{{ hologram.firstname }} {{ hologram.lastname }} </span>\n\n        <button (click)=\"deleteHologram(hologram._id)\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </h3>\n    <img style=\"height: 200px; width: 100%; display: block;\" [src]=\"hologram.imageUrl\" alt=\"hologram.firstname\">\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">Price: {{ hologram.price | currency }}</li>\n    </ul>\n    <div class=\"card-body\">\n        <a class=\"btn btn-primary\">Purchase</a>\n        <a [routerLink]=\"['/holograms']\" class=\"btn btn-secondary ml-3\">Back to Holograms</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n        2 days ago\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hologram/hologram.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/hologram/hologram.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9sb2dyYW0vaG9sb2dyYW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/hologram/hologram.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/hologram/hologram.component.ts ***!
  \***********************************************************/
/*! exports provided: HologramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HologramComponent", function() { return HologramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/hologram/hologram.service */ "./src/app/shared/services/hologram/hologram.service.ts");



// Services

var HologramComponent = /** @class */ (function () {
    function HologramComponent(hologramService, activatedRoute, router) {
        this.hologramService = hologramService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    HologramComponent.prototype.ngOnInit = function () {
        var _this = this;
        var hologramid = this.activatedRoute.snapshot.url[1].path || null;
        if (hologramid) {
            this.hologramService.getHologram(hologramid)
                .subscribe(function (hologram) {
                _this.hologram = hologram;
            });
        }
    };
    HologramComponent.prototype.deleteHologram = function (hologramid) {
        var _this = this;
        this.hologramService.deleteHologram(hologramid)
            .subscribe(function () {
            console.log('hologram deleted!');
            _this.router.navigate(['/']);
        });
    };
    HologramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hologram',
            template: __webpack_require__(/*! ./hologram.component.html */ "./src/app/components/hologram/hologram.component.html"),
            styles: [__webpack_require__(/*! ./hologram.component.scss */ "./src/app/components/hologram/hologram.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_3__["HologramService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HologramComponent);
    return HologramComponent;
}());



/***/ }),

/***/ "./src/app/components/holograms/holograms.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/holograms/holograms.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!holograms.length\" class=\"alert alert-dismissible alert-warning\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    <span>Sorry, we're all out of holograms right now, check back later!</span>\n</div>\n\n<div *ngIf=\"holograms\">\n    <div *ngFor=\"let hologram of holograms\" class=\"card mb-3\">\n        <h3 class=\"card-header\">\n            <span>{{ hologram.firstname }} {{ hologram.lastname }} </span>\n    \n            <button (click)=\"deleteHologram(hologram._id)\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </h3>\n        <img style=\"height: 200px; width: 100%; display: block;\" [src]=\"hologram.imageUrl\" alt=\"hologram.firstname\">\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Price: {{ hologram.price | currency }}</li>\n        </ul>\n        <div class=\"card-body\">\n            <a class=\"btn btn-primary\">Purchase</a>\n            <a [routerLink]=\"['/hologram', hologram._id ]\" class=\"btn btn-secondary ml-3\">View</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n            2 days ago\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/holograms/holograms.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/holograms/holograms.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hologram {\n  margin-bottom: 10px;\n  border: thin solid #FFF;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvU2l0ZXMvaW50ZXJuYWwvaG9sb2dyYW0tbWFydC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2hvbG9ncmFtcy9ob2xvZ3JhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9sb2dyYW1zL2hvbG9ncmFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xvZ3JhbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI0ZGRjtcbiAgICBjb2xvcjogI0ZGRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/holograms/holograms.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/holograms/holograms.component.ts ***!
  \*************************************************************/
/*! exports provided: HologramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HologramsComponent", function() { return HologramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/hologram/hologram.service */ "./src/app/shared/services/hologram/hologram.service.ts");



// Services

var HologramsComponent = /** @class */ (function () {
    function HologramsComponent(hologramService, router) {
        this.hologramService = hologramService;
        this.router = router;
        this.holograms = [];
    }
    HologramsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hologramService.getHolograms()
            .subscribe(function (holograms) {
            _this.holograms = holograms;
            console.log('retrived holograms');
        }, function (err) {
            console.log(err);
        });
    };
    HologramsComponent.prototype.deleteHologram = function (hologramid) {
        var _this = this;
        this.hologramService.deleteHologram(hologramid)
            .subscribe(function () {
            console.log('hologram deleted!');
            _this.holograms = _this.holograms.filter(function (hologram) { return hologram._id != hologramid; });
        });
    };
    HologramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holograms',
            template: __webpack_require__(/*! ./holograms.component.html */ "./src/app/components/holograms/holograms.component.html"),
            styles: [__webpack_require__(/*! ./holograms.component.scss */ "./src/app/components/holograms/holograms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hologram_hologram_service__WEBPACK_IMPORTED_MODULE_3__["HologramService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HologramsComponent);
    return HologramsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n    <fieldset>\n        <legend>Login</legend>\n        <div class=\"form-group\">\n            <label for=\"username\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"username\" formControlName=\"username\" placeholder=\"Enter email address\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" placeholder=\"Enter Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




// Services

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.loginForm = this.fb.group({
            username: [''],
            password: [''],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated) {
            this.router.navigate(['/holograms']);
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        this.authService.login(this.loginForm.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\n    <fieldset>\n        <legend>Register</legend>\n        <div class=\"form-group\">\n            <label for=\"firstname\">Firstname</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstname\" formControlName=\"firstname\" placeholder=\"Enter your firstname\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastname\">Lastname</label>\n            <input type=\"email\" class=\"form-control\" name=\"lastname\" formControlName=\"lastname\" placeholder=\"Enter email lastname\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"username\" formControlName=\"username\" placeholder=\"Enter email address\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" placeholder=\"Enter Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




// Services

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.pageTitle = 'nav.register';
        this.registerForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            username: [''],
            password: ['']
        });
        this.registerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated) {
            this.router.navigate(['/holograms']);
        }
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        this.registerEvent.emit();
        this.authService.registerUser(this.registerForm.value);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fbl-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\n    <div class=\"container text-center\">\n\n        <span>&copy; {{ CONFIG.appName | myCapitalize }} 2018. All rights reserved.</span>\n\n    </div>    \n\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 5px 0 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvU2l0ZXMvaW50ZXJuYWwvaG9sb2dyYW0tbWFydC9jbGllbnQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogNXB4IDAgMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");


// Config

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.CONFIG = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n    <app-nav></app-nav>\n\n</header>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{ CONFIG.appName | myCapitalize }}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul *ngIf=\"authService.isAuthenticated\" class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\">View Holograms <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/add-hologram\">Add Hologram</a>\n            </li>\n        </ul>\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form> -->\n        <ul class=\"navbar-nav my-2 my-lg-0\">\n            <li class=\"nav-item\">\n                <a *ngIf=\"!authService.isAuthenticated\" class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a *ngIf=\"authService.isAuthenticated\" class=\"nav-link\" (click)=\"logout()\">Logout</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a *ngIf=\"!authService.isAuthenticated\" class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");


// Configuration

// Services

var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.CONFIG = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.appName = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].appName;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.currentLang = 'en';
        if (localStorage.getItem('lang')) {
            this.currentLang = localStorage.getItem('lang');
        }
    };
    NavComponent.prototype.toggleLanguage = function (lang) {
        if (localStorage.getItem('lang') !== lang) {
            this.currentLang = (this.currentLang === 'en') ? 'fr' : 'en';
            localStorage.setItem('lang', this.currentLang);
            location.reload();
        }
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "currentUser", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return !value ? null : value.toLowerCase()
            .replace(/\b./g, function (a) { return a.toUpperCase(); });
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myCapitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/auth/auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth/auth.service.ts");



// Services

var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");




// Configuration

var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.AUTH_API_URL = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"].backendAUTH_API_URL;
        this.NAME_KEY = 'name';
        this.ID_KEY = '_id';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            return localStorage.getItem(this.ID_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        set: function (value) {
            // empty implementation just for the purposes of testing
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.registerUser = function (user) {
        var _this = this;
        console.log("create user: " + user.firstname + "...");
        this.http.post(this.AUTH_API_URL + "/register", user).subscribe(function (res) {
            _this._authenticate(res);
        }, function (error) {
            console.log('500 - server error');
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        console.log("authenticating user: " + user.username + "...");
        this.http.post(this.AUTH_API_URL + "/login", user).subscribe(function (res) {
            _this._authenticate(res);
        }, function (error) {
            console.log('500 - server error');
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.ID_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/login']);
    };
    AuthService.prototype._authenticate = function (res) {
        var authResponse = res;
        if (!authResponse.token) {
            console.log(authResponse.message);
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.ID_KEY, authResponse._id);
        localStorage.setItem(this.NAME_KEY, authResponse.firstname);
        this.router.navigate(['/']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/token-interceptor.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/auth/token-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth/auth.service.ts");


// Services

var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(auth) {
        this.auth = auth;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/services/hologram/hologram.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/hologram/hologram.service.ts ***!
  \**************************************************************/
/*! exports provided: HologramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HologramService", function() { return HologramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");



// Configuration

var HologramService = /** @class */ (function () {
    function HologramService(http) {
        this.http = http;
        this.API_URL = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].backendAPI_URL;
        console.log(this.API_URL);
    }
    HologramService.prototype.getHolograms = function () {
        return this.http.get(this.API_URL + "/holograms");
    };
    HologramService.prototype.getHologram = function (hologramid) {
        return this.http.get(this.API_URL + "/holograms/" + hologramid);
    };
    HologramService.prototype.addHologram = function (hologram) {
        return this.http.post(this.API_URL + "/holograms", hologram);
    };
    HologramService.prototype.deleteHologram = function (hologramid) {
        return this.http.post(this.API_URL + "/holograms/" + hologramid, {});
    };
    HologramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HologramService);
    return HologramService;
}());



/***/ }),

/***/ "./src/app/shared/services/user/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");



// Configuration

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.API_URL = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].backendAPI_URL;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.API_URL + "/users");
    };
    UserService.prototype.getUser = function (userid) {
        return this.http.get(this.API_URL + "/users/" + userid);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendHost: ""
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/max/Sites/internal/hologram-mart/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map