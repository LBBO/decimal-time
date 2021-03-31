(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zr8":
/*!***************************************************!*\
  !*** ./src/app/landingpage/landingpage.module.ts ***!
  \***************************************************/
/*! exports provided: LandingpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageModule", function() { return LandingpageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landingpage_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingpage-routing.module */ "P6Or");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "t7MW");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo.component */ "i3y2");
/* harmony import */ var _clock_clock_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock/clock.module */ "gYXX");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landingpage.component */ "AXwu");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class LandingpageModule {
}
LandingpageModule.ɵfac = function LandingpageModule_Factory(t) { return new (t || LandingpageModule)(); };
LandingpageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LandingpageModule });
LandingpageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _landingpage_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingpageRoutingModule"],
            _clock_clock_module__WEBPACK_IMPORTED_MODULE_4__["ClockModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LandingpageModule, { declarations: [_landingpage_component__WEBPACK_IMPORTED_MODULE_5__["LandingpageComponent"], _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_2__["SplashscreenComponent"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _landingpage_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingpageRoutingModule"],
        _clock_clock_module__WEBPACK_IMPORTED_MODULE_4__["ClockModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/decimal-time/decimal-time/src/main.ts */"zUnb");


/***/ }),

/***/ "4NDE":
/*!****************************************!*\
  !*** ./src/app/normal-time.service.ts ***!
  \****************************************/
/*! exports provided: NormalTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalTimeService", function() { return NormalTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var _seconds$, _minutes$, _hours$, _interval;




class NormalTimeService {
    constructor() {
        _seconds$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        _minutes$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        _hours$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        this.seconds$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _seconds$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.minutes$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _minutes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.hours$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _hours$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        _interval.set(this, void 0);
        this.clockIntervals = new Array(12).fill(1).map((_, index) => index + 1);
        this.numOfLargeIntervals = 12;
        this.numOfSmallIntervals = 5;
        this.maxSmallHandValue = 12;
        this.maxLargeHandValue = 60;
        this.maxChronoValue = 60;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _interval, setInterval(this.updateTime.bind(this), 100));
    }
    ngOnDestroy() {
        if (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _interval)) {
            clearInterval(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _interval));
        }
    }
    getTime() {
        return [this.hours$, this.minutes$, this.seconds$];
    }
    updateTime() {
        const now = new Date();
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _seconds$).next(now.getSeconds());
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _minutes$).next(now.getMinutes());
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _hours$).next(now.getHours());
    }
}
_seconds$ = new WeakMap(), _minutes$ = new WeakMap(), _hours$ = new WeakMap(), _interval = new WeakMap();
NormalTimeService.ɵfac = function NormalTimeService_Factory(t) { return new (t || NormalTimeService)(); };
NormalTimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NormalTimeService, factory: NormalTimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AXwu":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "t7MW");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/demo.component */ "i3y2");



class LandingpageComponent {
    constructor() { }
    ngOnInit() { }
}
LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) { return new (t || LandingpageComponent)(); };
LandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingpageComponent, selectors: [["app-landingpage"]], decls: 2, vars: 0, template: function LandingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splashscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-demo");
    } }, directives: [_splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_1__["SplashscreenComponent"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5ncGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
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

/***/ "P6Or":
/*!***********************************************************!*\
  !*** ./src/app/landingpage/landingpage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingpageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageRoutingModule", function() { return LandingpageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingpage.component */ "AXwu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', pathMatch: 'full', component: _landingpage_component__WEBPACK_IMPORTED_MODULE_1__["LandingpageComponent"] },
];
class LandingpageRoutingModule {
}
LandingpageRoutingModule.ɵfac = function LandingpageRoutingModule_Factory(t) { return new (t || LandingpageRoutingModule)(); };
LandingpageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LandingpageRoutingModule });
LandingpageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingpageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'decimal-time';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YgKd":
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ClockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClockComponent {
    constructor() {
        this.numOfLargeIntervals = 0;
        this.numOfSmallIntervals = 0;
        this.progressLargeHand = 0;
        this.progressSmallHand = 0;
        this.progressChrono = 0;
    }
    ngOnInit() {
        if (this.timeService) {
            this.numOfLargeIntervals = this.timeService.numOfLargeIntervals;
            this.numOfSmallIntervals = this.timeService.numOfSmallIntervals;
            const timeService = this.timeService;
            const [smallHandValue$, largeHandValue$, chronoValue$,] = this.timeService.getTime();
            largeHandValue$.subscribe((val) => {
                this.progressLargeHand =
                    (val / timeService.maxLargeHandValue) % timeService.maxLargeHandValue;
            });
            smallHandValue$.subscribe((val) => {
                this.progressSmallHand =
                    (val / timeService.maxSmallHandValue) % timeService.maxSmallHandValue;
            });
            chronoValue$.subscribe((val) => {
                this.progressChrono =
                    (val / timeService.maxChronoValue) % timeService.maxChronoValue;
            });
        }
    }
}
ClockComponent.ɵfac = function ClockComponent_Factory(t) { return new (t || ClockComponent)(); };
ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockComponent, selectors: [["app-clock"]], hostVars: 10, hostBindings: function ClockComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--large-intervals", ctx.numOfLargeIntervals)("--small-intervals", ctx.numOfSmallIntervals)("--progress-large-hand", ctx.progressLargeHand)("--progress-small-hand", ctx.progressSmallHand)("--progress-chrono", ctx.progressChrono);
    } }, inputs: { timeService: "timeService" }, decls: 1, vars: 1, consts: [["class", "clock", 4, "ngIf"], [1, "clock"], [1, "chrono"], [1, "hand"], [1, "hand", "small"]], template: function ClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClockComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timeService);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  background-color: black;\n  margin: 1em;\n  --padding: 0.8vmin;\n  width: calc(28vmin + 2 * var(--padding));\n  height: calc(28vmin + 2 * var(--padding));\n  padding: var(--padding);\n  box-sizing: border-box;\n  border-radius: 100%;\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  \n  \n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]::before {\n  --large-angle: calc(360deg / var(--large-intervals));\n  --small-angle: calc(var(--large-angle) / var(--small-intervals));\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  background-image: repeating-conic-gradient(from 0deg, white 0deg 1deg, transparent 1deg var(--large-angle), white var(--large-angle) var(--large-angle)), repeating-conic-gradient(rgba(255, 255, 255, 0.2) 0deg 1deg, transparent 1deg var(--small-angle), rgba(255, 255, 255, 0.2) var(--small-angle) var(--small-angle));\n  -webkit-mask-image: radial-gradient(circle at center, transparent 66%, black 66.1%);\n          mask-image: radial-gradient(circle at center, transparent 66%, black 66.1%);\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: white;\n  width: 1.3vmin;\n  height: 1.3vmin;\n  margin-top: -0.65vmin;\n  margin-left: -0.65vmin;\n  border-radius: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-mask-image: radial-gradient(circle at center, transparent 33%, black 33.1%);\n          mask-image: radial-gradient(circle at center, transparent 33%, black 33.1%);\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.5vmin;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: 50% 50%;\n  transform: rotate(calc(var(--progress-large-hand) * 360deg - 90deg));\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: white;\n  border-radius: 200px;\n  width: 11.7vmin;\n  height: 1vmin;\n  margin-left: -0.3vmin;\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-color: white;\n  height: 0.5vmin;\n  width: 1.7vmin;\n  margin-left: -1.7vmin;\n  display: block;\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .hand.small[_ngcontent-%COMP%] {\n  transform: rotate(calc(var(--progress-small-hand) * 360deg - 90deg));\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .hand.small[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 6vmin;\n  margin-right: 5.5vmin;\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .chrono[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  transform-origin: 50% 50%;\n  transform: rotate(calc(var(--progress-chrono) * 360deg - 90deg));\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .chrono[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 0.29vmin;\n  width: 16vmin;\n  background-color: orange;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .clock[_ngcontent-%COMP%]   .chrono[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--screen-color);\n  box-shadow: 0 0 0 0.2vmin orange;\n  width: 0.5vmin;\n  height: 0.5vmin;\n  margin-top: -0.25vmin;\n  margin-left: -0.25vmin;\n  border-radius: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFvREEsZ0JBQUE7RUE2Q0EsZ0JBQUE7QUFoR0o7QUFDSTtFQUVFLG9EQUFBO0VBQ0EsZ0VBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwyVEFBQTtFQVlBLG1GQUFBO1VBQUEsMkVBQUE7QUFaTjtBQW1CSTtFQUVFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1GQUFBO1VBQUEsMkVBQUE7QUFsQk47QUEwQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvRUFBQTtBQXhCTjtBQTBCTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQXhCUjtBQTJCTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBekJSO0FBNEJNO0VBQ0Usb0VBQUE7QUExQlI7QUE0QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBMUJWO0FBZ0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnRUFBQTtBQTlCTjtBQWdDTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUE5QlI7QUFpQ007RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUEvQlIiLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDTG9jayBmcm9tIGh0dHBzOi8vY29kZXBlbi5pby9lcXVpbnVzb2Npby9wZW4vUG9OWUdHWFxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDFlbTtcbiAgLS1wYWRkaW5nOiAwLjh2bWluO1xuICB3aWR0aDogY2FsYygyOHZtaW4gKyAyICogdmFyKC0tcGFkZGluZykpO1xuICBoZWlnaHQ6IGNhbGMoMjh2bWluICsgMiAqIHZhcigtLXBhZGRpbmcpKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgLmNsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAvLyBpbmRpY2F0b3IgbGluZXMgYmFja2dyb3VuZFxuICAgICAgLS1sYXJnZS1hbmdsZTogY2FsYygzNjBkZWcgLyB2YXIoLS1sYXJnZS1pbnRlcnZhbHMpKTtcbiAgICAgIC0tc21hbGwtYW5nbGU6IGNhbGModmFyKC0tbGFyZ2UtYW5nbGUpIC8gdmFyKC0tc21hbGwtaW50ZXJ2YWxzKSk7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAvLyBsaW5lc1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50KFxuICAgICAgICAgIGZyb20gMGRlZyxcbiAgICAgICAgICB3aGl0ZSAwZGVnIDFkZWcsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgMWRlZyB2YXIoLS1sYXJnZS1hbmdsZSksXG4gICAgICAgICAgd2hpdGUgdmFyKC0tbGFyZ2UtYW5nbGUpIHZhcigtLWxhcmdlLWFuZ2xlKVxuICAgICAgICApLFxuICAgICAgICByZXBlYXRpbmctY29uaWMtZ3JhZGllbnQoXG4gICAgICAgICAgaHNsKDBkZWcgMCUgMTAwJSAvIDIwJSkgMGRlZyAxZGVnLFxuICAgICAgICAgIHRyYW5zcGFyZW50IDFkZWcgdmFyKC0tc21hbGwtYW5nbGUpLFxuICAgICAgICAgIGhzbCgwZGVnIDAlIDEwMCUgLyAyMCUpIHZhcigtLXNtYWxsLWFuZ2xlKSB2YXIoLS1zbWFsbC1hbmdsZSlcbiAgICAgICAgKTtcbiAgICAgIC8vYmxhY2sgY2lyY2xlIGZyb20gY2VudGVyLCBjb3ZlcnMgdGhlIGxpbmVzIHRoYXQgYWN0dWFsbHkgb3JpZ2luYXRlIHRoZXJlXG4gICAgICBtYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICAgIHRyYW5zcGFyZW50IDY2JSxcbiAgICAgICAgYmxhY2sgNjYuMSVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgLy8gd2hpdGUgY2lyY2xlIGluIHRoZSBtaWRkbGVcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMS4zdm1pbjtcbiAgICAgIGhlaWdodDogMS4zdm1pbjtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjY1dm1pbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC42NXZtaW47XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICAgIHRyYW5zcGFyZW50IDMzJSxcbiAgICAgICAgYmxhY2sgMzMuMSVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogQ2xvY2sgaGFuZHMgKi9cbiAgICAuaGFuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwYWRkaW5nOiAwLjV2bWluO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1wcm9ncmVzcy1sYXJnZS1oYW5kKSAqIDM2MGRlZyAtIDkwZGVnKSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDExLjd2bWluO1xuICAgICAgICBoZWlnaHQ6IDF2bWluO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTAuM3ZtaW47XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAwLjV2bWluO1xuICAgICAgICB3aWR0aDogMS43dm1pbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xLjd2bWluO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJi5zbWFsbCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tcHJvZ3Jlc3Mtc21hbGwtaGFuZCkgKiAzNjBkZWcgLSA5MGRlZykpO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICB3aWR0aDogNnZtaW47XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1LjV2bWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogU2Vjb25kcyBoYW5kKi9cbiAgICAuY2hyb25vIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1wcm9ncmVzcy1jaHJvbm8pICogMzYwZGVnIC0gOTBkZWcpKTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGhlaWdodDogMC4yOXZtaW47XG4gICAgICAgIHdpZHRoOiAxNnZtaW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuLWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ydm1pbiBvcmFuZ2U7XG4gICAgICAgIHdpZHRoOiAwLjV2bWluO1xuICAgICAgICBoZWlnaHQ6IDAuNXZtaW47XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjI1dm1pbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjI1dm1pbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _landingpage_landingpage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landingpage/landingpage-routing.module */ "P6Or");
/* harmony import */ var _clock_clock_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clock/clock.module */ "gYXX");
/* harmony import */ var _landingpage_landingpage_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landingpage/landingpage.module */ "+zr8");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _landingpage_landingpage_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingpageRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _clock_clock_module__WEBPACK_IMPORTED_MODULE_7__["ClockModule"],
            _landingpage_landingpage_module__WEBPACK_IMPORTED_MODULE_8__["LandingpageModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _landingpage_landingpage_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingpageRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _clock_clock_module__WEBPACK_IMPORTED_MODULE_7__["ClockModule"],
        _landingpage_landingpage_module__WEBPACK_IMPORTED_MODULE_8__["LandingpageModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"]] }); })();


/***/ }),

/***/ "gYXX":
/*!***************************************!*\
  !*** ./src/app/clock/clock.module.ts ***!
  \***************************************/
/*! exports provided: ClockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockModule", function() { return ClockModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.component */ "YgKd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ClockModule {
}
ClockModule.ɵfac = function ClockModule_Factory(t) { return new (t || ClockModule)(); };
ClockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClockModule });
ClockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClockModule, { declarations: [_clock_component__WEBPACK_IMPORTED_MODULE_1__["ClockComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_clock_component__WEBPACK_IMPORTED_MODULE_1__["ClockComponent"]] }); })();


/***/ }),

/***/ "i3y2":
/*!****************************************************!*\
  !*** ./src/app/landingpage/demo/demo.component.ts ***!
  \****************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _normal_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../normal-time.service */ "4NDE");
/* harmony import */ var _v_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../v-time.service */ "lL1T");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clock/clock.component */ "YgKd");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");







class DemoComponent {
    constructor(normalTimeService, vTimeService) {
        this.normalTimeService = normalTimeService;
        this.vTimeService = vTimeService;
    }
    ngOnInit() { }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_normal_time_service__WEBPACK_IMPORTED_MODULE_1__["NormalTimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_v_time_service__WEBPACK_IMPORTED_MODULE_2__["VTimeService"])); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 84, vars: 2, consts: [[1, "normal-time"], [1, "card-content"], [3, "timeService"], [1, "decimal-time"], ["matTooltip", "Decimal time units are emphasized; normal time units are not."]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What would a clock look like?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Normal time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-clock", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is how you are used to measuring time. There are 24 hours in a day, 60 minutes in an hour, and 60 seconds in a minute. You probably learned this in pre-school. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " These weird numbers make no real sense and are a frequent nuisance. For example, try figuring out how many seconds are in three and a half hours. Or try converting 72 km/h to m/s. Or figure out at what time 20% of the day have passed. These calculations are unnecessarily confusing, aren't they? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Decimal time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " info_outlined ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-clock", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " As opposed to the standard time measuring system, this system divides units into multiples of 10. The day is divided into 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ", one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " is divided into 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " and one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is divided into 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Since we represent numbers in the decimal system, decimal time allows us to convert between units by simply moving the decimal point: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 3.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "? Multiply by 100*100 (or move the decimal point four digits to the right): 3500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 72 km/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " to m/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "? 1000 meters in a kilometer, 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " in an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ", so we multiply by 1000/100=10 (or move the decimal point 3-2=1 digit to the right): 720 m/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 20% of the day? There are 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " in a day, so that would be exactly 2:00 o'clock. This also means an added bonus of easily converting something like 0.1415 days into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ": you just have to add the correct colons after one, three, and five digits (and add zeroes, if necessary)! So, 0.1415 days would be 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ", 41 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " and 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeService", ctx.normalTimeService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeService", ctx.vTimeService);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__["ClockComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: -webkit-min-content -webkit-max-content;\n  grid-template-rows: min-content max-content;\n  grid-template-columns: repeat(2, -webkit-max-content);\n  grid-template-columns: repeat(2, max-content);\n  grid-template-areas: \"title title\" \"normal decimal\";\n  align-content: center;\n  justify-content: center;\n  --padding: 3em;\n  padding: var(--padding);\n  grid-gap: var(--padding);\n  min-height: 100vh;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"title\" \"normal\" \"decimal\";\n  }\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  grid-area: title;\n  font-size: 4em;\n  text-align: center;\n  margin: 1em 0;\n  line-height: 1em;\n}\n[_nghost-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1em;\n  display: inline-flex;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   app-clock[_ngcontent-%COMP%] {\n  margin: 2em 0;\n}\n[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  max-width: 70ch;\n}\n[_nghost-%COMP%]   .normal-time[_ngcontent-%COMP%] {\n  grid-area: normal;\n}\n[_nghost-%COMP%]   .decimal-time[_ngcontent-%COMP%] {\n  grid-area: decimal;\n}\n[_nghost-%COMP%]   .decimal-time[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", serif;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFBQSwyQ0FBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7RUFDQSxtREFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQVpGO0lBYUksMEJBQUE7SUFDQSwrQ0FBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNOO0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJSTs7RUFFRSxlQUFBO0FBRk47QUFNRTtFQUNFLGlCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEo7QUFPSTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7QUFMTiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSB0aXRsZScgJ25vcm1hbCBkZWNpbWFsJztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAzZW07XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICBncmlkLWdhcDogdmFyKC0tcGFkZGluZyk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZScgJ25vcm1hbCcgJ2RlY2ltYWwnO1xuICB9XG5cbiAgaDMge1xuICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgfVxuXG4gIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYXBwLWNsb2NrIHtcbiAgICAgIG1hcmdpbjogMmVtIDA7XG4gICAgfVxuXG4gICAgcCxcbiAgICB1bCB7XG4gICAgICBtYXgtd2lkdGg6IDcwY2g7XG4gICAgfVxuICB9XG5cbiAgLm5vcm1hbC10aW1lIHtcbiAgICBncmlkLWFyZWE6IG5vcm1hbDtcbiAgfVxuXG4gIC5kZWNpbWFsLXRpbWUge1xuICAgIGdyaWQtYXJlYTogZGVjaW1hbDtcblxuICAgIGVtIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");


class NavigationComponent {
    constructor() { }
    ngOnInit() { }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 8, vars: 0, consts: [["color", "primary", 1, "nav-bar"], [1, "spacer"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Decimal time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n  padding: 0 2em;\n  position: sticky;\n}\n.nav-bar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFlbTtcbiAgcGFkZGluZzogMCAyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "lL1T":
/*!***********************************!*\
  !*** ./src/app/v-time.service.ts ***!
  \***********************************/
/*! exports provided: VTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTimeService", function() { return VTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var _milliV$, _deciV$, _v$, _interval;




class VTimeService {
    constructor() {
        this.clockIntervals = new Array(100).fill(1).map((_, index) => index);
        this.numOfLargeIntervals = 10;
        this.numOfSmallIntervals = 10;
        this.maxSmallHandValue = 10;
        this.maxLargeHandValue = 100;
        this.maxChronoValue = 100;
        _milliV$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        _deciV$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        _v$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
        this.milliV$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _milliV$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.deciV$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _deciV$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.v$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _v$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        _interval.set(this, void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _interval, setInterval(this.updateTime.bind(this), 100));
    }
    ngOnDestroy() {
        if (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _interval)) {
            clearInterval(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _interval));
        }
    }
    getTime() {
        return [this.v$, this.deciV$, this.milliV$];
    }
    updateTime() {
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const millisecondsPerV = millisecondsPerDay / 10;
        const millisecondsPerDeciV = millisecondsPerV / 100;
        const millisecondsPerMilliV = millisecondsPerV / 10000;
        const now = new Date();
        const totalMinutesPassed = now.getHours() * 60 + now.getMinutes();
        const totalSecondsPassed = totalMinutesPassed * 60 + now.getSeconds();
        const totalMillisecondsPassed = totalSecondsPassed * 1000 + now.getMilliseconds();
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _milliV$).next(Math.floor(totalMillisecondsPassed / millisecondsPerMilliV) % 100);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _deciV$).next(Math.floor(totalMillisecondsPassed / millisecondsPerDeciV) % 100);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _v$).next(Math.floor(totalMillisecondsPassed / millisecondsPerV) % 10);
    }
}
_milliV$ = new WeakMap(), _deciV$ = new WeakMap(), _v$ = new WeakMap(), _interval = new WeakMap();
VTimeService.ɵfac = function VTimeService_Factory(t) { return new (t || VTimeService)(); };
VTimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VTimeService, factory: VTimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "t7MW":
/*!********************************************************************!*\
  !*** ./src/app/landingpage/splashscreen/splashscreen.component.ts ***!
  \********************************************************************/
/*! exports provided: SplashscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenComponent", function() { return SplashscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SplashscreenComponent {
    constructor() { }
    ngOnInit() { }
}
SplashscreenComponent.ɵfac = function SplashscreenComponent_Factory(t) { return new (t || SplashscreenComponent)(); };
SplashscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashscreenComponent, selectors: [["app-splashscreen"]], decls: 9, vars: 0, template: function SplashscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's time to fix time!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Why are all units based on multiples of ten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "except time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Let's change that.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3em;\n  height: calc(100vh - 64px);\n  background-color: #37405e;\n  z-index: -1;\n  color: white;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 70ch;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwbGFzaHNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBRUEsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoic3BsYXNoc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzZW07XG5cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQwNWU7XG4gIHotaW5kZXg6IC0xO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICB9XG5cbiAgcCB7XG4gICAgbWF4LXdpZHRoOiA3MGNoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map