(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-file-uploader></app-file-uploader>\n<app-file-visualizer></app-file-visualizer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-uploader/file-uploader.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-uploader/file-uploader.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-uploader\">\n      <angular-file-uploader [config]=\"afuConfig\">\n      </angular-file-uploader>\n</div>\n<h1>&nbsp; <<= upload file from here</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-visualizer/file-visualizer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-visualizer/file-visualizer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-name-container\">\n    <div class=\"file-name\" *ngFor=\"let file of files\" (click)=\"selectFile(file.name)\">\n        <div>{{file.name}}</div>\n    </div>\n</div>\n<div class=\"chart-container\">\n    <div>\n        <h1 *ngIf=\"noFileUploaded\">kindly upload a file</h1>\n        <h1 *ngIf=\"noFileSelected && !noFileUploaded\">Please Select a File from left panel</h1>\n    </div>\n    <div *ngIf=\"chartIsLoading\">Chart is loading, please wait!</div>\n    <div [chart]=\"chart\" *ngIf=\"!loading\" class=\"chart\" ></div>\n    <div class=\"\" *ngIf=\"loading\">\n        <div>Please Wait!</div>\n        <div>we are downloading your data</div>\n        <div>{{downloadedMb}}-Mb <br> downloaded</div>\n\n        <div class=\"lds-facebook\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>\n</div>"

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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dashboard {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hlci90aGVybW9tZXRlci9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZGFzaGJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjMzMzO1xufVxuIiwiYXBwLWRhc2hib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogIzMzMztcbn0iXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'thermometer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: highchartsModules, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsModules", function() { return highchartsModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-uploader/file-uploader.component */ "./src/app/file-uploader/file-uploader.component.ts");
/* harmony import */ var _file_visualizer_file_visualizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-visualizer/file-visualizer.component */ "./src/app/file-visualizer/file-visualizer.component.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/stock.src */ "./node_modules/highcharts/modules/stock.src.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts/highcharts-more.src */ "./node_modules/highcharts/highcharts-more.src.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");













function highchartsModules() {
    // apply Highcharts Modules to this array
    return [highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_10___default.a, highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_6__["FileUploaderComponent"],
                _file_visualizer_file_visualizer_component__WEBPACK_IMPORTED_MODULE_7__["FileVisualizerComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__["AngularFileUploaderModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_12__["ChartModule"]
            ],
            providers: [{ provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_12__["HIGHCHARTS_MODULES"], useFactory: highchartsModules }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-uploader {\n  padding: 10px;\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  border-bottom: 3px solid #333;\n  display: -webkit-box;\n  display: flex;\n  width: 99vw;\n}\n\napp-file-visualizer {\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n@media only screen and (max-width: 768px) {\n  app-file-visualizer {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hlci90aGVybW9tZXRlci9jbGllbnQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7O0FEQUU7RUFIRjtJQUlJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZpbGUtdXBsb2FkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5OXZ3O1xufVxuXG5hcHAtZmlsZS12aXN1YWxpemVyIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgfVxufSIsImFwcC1maWxlLXVwbG9hZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTl2dztcbn1cblxuYXBwLWZpbGUtdmlzdWFsaXplciB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcHAtZmlsZS12aXN1YWxpemVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #333;\n}\n\n.file-uploader {\n  display: block;\n  width: 500px;\n  border: 2px solid #333;\n  border-radius: 5px;\n  padding: 4px;\n}\n\n.file-uploader angular-file-uploader {\n  width: 500px !important;\n}\n\n.file-uploader angular-file-uploader .container {\n  margin-right: -1000px;\n  width: 500px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hlci90aGVybW9tZXRlci9jbGllbnQvc3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURBRTtFQUNFLHVCQUFBO0FDRUo7O0FEREk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIC8vIGZsZXg6IDAgMCBhdXRvO1xuICBjb2xvcjogIzMzMztcbn1cbi5maWxlLXVwbG9hZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGFuZ3VsYXItZmlsZS11cGxvYWRlciB7XG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMDAwcHg7XG4gICAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsImgxIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5maWxlLXVwbG9hZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG4uZmlsZS11cGxvYWRlciBhbmd1bGFyLWZpbGUtdXBsb2FkZXIge1xuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbn1cbi5maWxlLXVwbG9hZGVyIGFuZ3VsYXItZmlsZS11cGxvYWRlciAuY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwMHB4O1xuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.ts ***!
  \**********************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent() {
        this.afuConfig = {
            formatsAllowed: ".json",
            maxSize: "1000",
            uploadAPI: {
                url: '/upload/'
            }
        };
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
    };
    FileUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(/*! raw-loader!./file-uploader.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__(/*! ./file-uploader.component.scss */ "./src/app/file-uploader/file-uploader.component.scss")]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/file-visualizer/file-visualizer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/file-visualizer/file-visualizer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-name-container {\n  width: 200px;\n  border: 2px solid #333;\n  border-left: none;\n  border-top: none;\n  padding: 2px;\n  height: 100vh;\n}\n@media only screen and (max-width: 768px) {\n  .file-name-container {\n    width: 100vw;\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n    flex-wrap: wrap;\n  }\n}\n.file-name-container .file-name {\n  border: 1px solid #333;\n  border-radius: 5px;\n  padding: 8px 5px;\n  margin: 1px;\n  text-align: center;\n  height: 50px;\n  background-color: pink;\n}\n.file-name-container .file-name:hover {\n  background-color: red;\n}\n@media only screen and (max-width: 768px) {\n  .file-name-container .file-name {\n    flex-basis: 32%;\n  }\n}\n.chart {\n  height: 100vh;\n  display: block;\n}\n.chart-container {\n  text-align: center;\n  width: 100%;\n  font-size: 30px;\n}\n.loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 6px;\n  width: 13px;\n  background: grey;\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div:nth-child(1) {\n  left: 6px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n.lds-facebook div:nth-child(2) {\n  left: 26px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n.lds-facebook div:nth-child(3) {\n  left: 45px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 6px;\n    height: 51px;\n  }\n  50%, 100% {\n    top: 19px;\n    height: 26px;\n  }\n}\n@keyframes lds-facebook {\n  0% {\n    top: 6px;\n    height: 51px;\n  }\n  50%, 100% {\n    top: 19px;\n    height: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hlci90aGVybW9tZXRlci9jbGllbnQvc3JjL2FwcC9maWxlLXZpc3VhbGl6ZXIvZmlsZS12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLXZpc3VhbGl6ZXIvZmlsZS12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQVBGO0lBUUksWUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDR0Y7QUFDRjtBRERFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDR0o7QURGSTtFQUNFLHFCQUFBO0FDSU47QURGSTtFQVhGO0lBWUksZUFBQTtFQ0tKO0FBQ0Y7QURGQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDS0Y7QURIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUNLRjtBREZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0tGO0FERkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNLRjtBREhBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwRUFBQTtVQUFBLGtFQUFBO0FDTUY7QURKQTtFQUNFLFNBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDT0Y7QURMQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDUUY7QUROQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0FDU0Y7QURQQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFlBQUE7RUNVRjtFRFJBO0lBRUUsU0FBQTtJQUNBLFlBQUE7RUNTRjtBQUNGO0FEbEJBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsWUFBQTtFQ1VGO0VEUkE7SUFFRSxTQUFBO0lBQ0EsWUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maWxlLXZpc3VhbGl6ZXIvZmlsZS12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtbmFtZS1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuZmlsZS1uYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWJhc2lzOiAzMiU7XG4gICAgfVxuICB9XG59XG4uY2hhcnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaGFydC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmxkcy1mYWNlYm9vayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1mYWNlYm9vayBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNnB4O1xuICB3aWR0aDogMTNweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xufVxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogNnB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcbn1cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDI2cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNDVweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xuICAwJSB7XG4gICAgdG9wOiA2cHg7XG4gICAgaGVpZ2h0OiA1MXB4O1xuICB9XG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgdG9wOiAxOXB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxufVxuIiwiLmZpbGUtbmFtZS1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWxlLW5hbWUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4uZmlsZS1uYW1lLWNvbnRhaW5lciAuZmlsZS1uYW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggNXB4O1xuICBtYXJnaW46IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG4uZmlsZS1uYW1lLWNvbnRhaW5lciAuZmlsZS1uYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmlsZS1uYW1lLWNvbnRhaW5lciAuZmlsZS1uYW1lIHtcbiAgICBmbGV4LWJhc2lzOiAzMiU7XG4gIH1cbn1cblxuLmNoYXJ0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5sZHMtZmFjZWJvb2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLmxkcy1mYWNlYm9vayBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNnB4O1xuICB3aWR0aDogMTNweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA2cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyNnB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcbn1cblxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNDVweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XG4gIDAlIHtcbiAgICB0b3A6IDZweDtcbiAgICBoZWlnaHQ6IDUxcHg7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICB0b3A6IDE5cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/file-visualizer/file-visualizer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/file-visualizer/file-visualizer.component.ts ***!
  \**************************************************************/
/*! exports provided: FileVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileVisualizerComponent", function() { return FileVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _thermometer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thermometer.service */ "./src/app/thermometer.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var FileVisualizerComponent = /** @class */ (function () {
    function FileVisualizerComponent(service) {
        this.service = service;
        this.loading = false;
        this.downloadedMb = 0;
        this.noFileSelected = true;
        this.noFileUploaded = false;
        this.graphFormatedData = {
            chart: {
                type: 'line'
            },
            boost: {
                useGPUTranslations: true
            },
            title: {
                text: 'Linechart'
            },
            xAxis: {
                minRange: 10000
            },
            credits: {
                enabled: false
            },
            series: [],
            showLoading: true,
        };
    }
    FileVisualizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["StockChart"];
        // theme(Highcharts)
        this.service.getFiles().subscribe(function (data) {
            _this.files = data;
            if (_this.files.length === 0) {
                _this.noFileUploaded = true;
            }
        }, function (err) { console.log(err); });
    };
    FileVisualizerComponent.prototype.__updateGraphObject = function (data, fileName) {
        this.graphFormatedData.title.text = fileName;
        this.graphFormatedData.series = [{
                type: "line",
                tooltip: {
                    valueDecimals: 2
                },
                name: fileName,
                data: data
            }];
        this.chartIsLoading = true;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["StockChart"](this.graphFormatedData);
        this.chartIsLoading = false;
        console.log(this.chart);
    };
    FileVisualizerComponent.prototype.selectFile = function (fileName) {
        var _this = this;
        this.noFileSelected = false;
        this.loading = true;
        this.service.getFileData(fileName).subscribe(function (response) {
            if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
                // This is an download progress event. Compute and show the % done:
                _this.downloadedMb = Math.round(response.loaded / 1048576);
                console.log(response);
            }
            else if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                _this.__updateGraphObject(response.body, fileName);
                _this.loading = false;
            }
        });
    };
    FileVisualizerComponent.ctorParameters = function () { return [
        { type: _thermometer_service__WEBPACK_IMPORTED_MODULE_2__["ThermometerService"] }
    ]; };
    FileVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-visualizer',
            template: __webpack_require__(/*! raw-loader!./file-visualizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-visualizer/file-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./file-visualizer.component.scss */ "./src/app/file-visualizer/file-visualizer.component.scss")]
        })
    ], FileVisualizerComponent);
    return FileVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/thermometer.service.ts":
/*!****************************************!*\
  !*** ./src/app/thermometer.service.ts ***!
  \****************************************/
/*! exports provided: ThermometerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermometerService", function() { return ThermometerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ThermometerService = /** @class */ (function () {
    function ThermometerService(http) {
        this.http = http;
    }
    ThermometerService.prototype.getFiles = function () {
        return this.http.get('/files/');
    };
    ThermometerService.prototype.getFileData = function (fileName) {
        return this.http.get('/file-data/' + fileName, { reportProgress: true, observe: 'events' });
    };
    ThermometerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ThermometerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ThermometerService);
    return ThermometerService;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/hasher/thermometer/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map