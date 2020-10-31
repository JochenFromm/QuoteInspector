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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.about {\n  font-size: 24px;\n  margin: 30px;\n  padding: 5px 0px;\n}\n\na {\n  color: #777;\n  text-decoration: none;\n}\n\na.active-link {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWJvdXQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMzBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"about\">\n  <p>\n    Small Angular app for investigating quotes of wise men, old philosophers and great minds\n  </p>\n\n  <p>\n    Try:\n    <a href=\"search?q=Sartre\">Sartre</a>,\n    <a href=\"search?q=Confucius\">Confucius</a>,\n    <a href=\"search?q=Horace\">Horace</a>,\n    or <a href=\"search?q=Plato\">Plato</a>\n  </p>\n\n  <p>\n    Made in Berlin by <a href=\"https://twitter.com/jofr\">@jofr</a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _random_random_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random/random.component */ "./src/app/random/random.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'random', component: _random_random_component__WEBPACK_IMPORTED_MODULE_4__["RandomComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  text-align: center;\n}\n\nh3 {\n  margin: 10px 30px;\n}\n\na {\n  color: #777;\n  text-decoration: none;\n}\n\na.active-link {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICBtYXJnaW46IDEwcHggMzBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>\n  {{ title }}\n</h1>\n\n<h3>\n  <a routerLink=\"search\" routerLinkActive=\"active-link\"> Search </a> |\n  <a routerLink=\"random\" routerLinkActive=\"active-link\"> Random </a> |\n  <a routerLink=\"about\" routerLinkActive=\"active-link\"> About </a>\n</h3>\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Quote Inspector';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_quotes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/quotes.component */ "./src/app/search/quotes.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _random_random_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./random/random.component */ "./src/app/random/random.component.ts");
/* harmony import */ var _tag_cloud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tag/cloud.component */ "./src/app/tag/cloud.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/quotes.service */ "./src/app/services/quotes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_quotes_component__WEBPACK_IMPORTED_MODULE_6__["QuotesComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _random_random_component__WEBPACK_IMPORTED_MODULE_8__["RandomComponent"],
                _tag_cloud_component__WEBPACK_IMPORTED_MODULE_9__["CloudComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [
                _services_quotes_service__WEBPACK_IMPORTED_MODULE_11__["QuotesService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/random/random.component.css":
/*!*********************************************!*\
  !*** ./src/app/random/random.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.quotation {\n  font-size: 36px;\n  margin: 20px;\n  padding: 5px 0px;\n}\n\n.quotation .text {\n  margin: 20px 10px;\n}\n\n.quotation .author {\n  margin: 20px 10px;\n  font-size: 28px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuZG9tL3JhbmRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JhbmRvbS9yYW5kb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnF1b3RhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4ucXVvdGF0aW9uIC50ZXh0IHtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi5xdW90YXRpb24gLmF1dGhvciB7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/random/random.component.html":
/*!**********************************************!*\
  !*** ./src/app/random/random.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"quotation\">\n  <div class=\"text\">\n    &ldquo;&nbsp;{{ quote_text }}&nbsp;&rdquo;\n  </div>\n  <div class=\"author\">\n    ~ {{ quote_author }}\n  </div>\n  <button (click)=\"refresh()\">Get a new quote</button>\n</div>"

/***/ }),

/***/ "./src/app/random/random.component.ts":
/*!********************************************!*\
  !*** ./src/app/random/random.component.ts ***!
  \********************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quotes.service */ "./src/app/services/quotes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomComponent = /** @class */ (function () {
    function RandomComponent(quotesService) {
        this.quotesService = quotesService;
        this.quote_author = '';
        this.quote_text = '';
        this.quotes = [];
    }
    RandomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quotesService.findAll().subscribe(function (data) {
            _this.quotes = data;
            _this.selectRandomQuote();
        });
    };
    RandomComponent.prototype.selectRandomQuote = function () {
        var index = Math.floor((Math.random() * this.quotes.length));
        var quote = this.quotes[index];
        this.quote_text = this.quotesService.quote(quote);
        this.quote_author = this.quotesService.author(quote);
    };
    RandomComponent.prototype.refresh = function () {
        this.selectRandomQuote();
    };
    RandomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-random',
            template: __webpack_require__(/*! ./random.component.html */ "./src/app/random/random.component.html"),
            styles: [__webpack_require__(/*! ./random.component.css */ "./src/app/random/random.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quotes_service__WEBPACK_IMPORTED_MODULE_1__["QuotesService"]])
    ], RandomComponent);
    return RandomComponent;
}());



/***/ }),

/***/ "./src/app/search/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #eee;\n}\n\ntable.table-striped > tbody > tr >td,\ntable.table-striped > tbody > tr >th,\ntable.table-striped > tfoot > tr >td,\ntable.table-striped > tfoot > tr >th,\ntable.table-striped > thead > tr >td,\ntable.table-striped > thead > tr >th {\n  padding: 8px;\n  line-height: 24px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3F1b3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDs7Ozs7O0VBTUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvcXVvdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0ciA+dGQsXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0ciA+dGgsXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGZvb3QgPiB0ciA+dGQsXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGZvb3QgPiB0ciA+dGgsXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGhlYWQgPiB0ciA+dGQsXG50YWJsZS50YWJsZS1zdHJpcGVkID4gdGhlYWQgPiB0ciA+dGgge1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  {{ quotes.length }}\n  Results\n  <span *ngIf=\"keyword\">\n    for \"{{ keyword }}\"\n  </span>\n</h3>\n\n<table class=\"table-striped\">\n   <thead><th>Author</th><th>Quote</th></thead>\n   <tr *ngFor=\"let line of quotes\">\n     <td> {{ author(line) }} </td>\n     <td> {{ quote(line) }} </td>\n   </tr>\n</table>"

/***/ }),

/***/ "./src/app/search/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quotes.service */ "./src/app/services/quotes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(quotesService) {
        this.quotesService = quotesService;
    }
    QuotesComponent.prototype.author = function (line) {
        return this.quotesService.author(line);
    };
    QuotesComponent.prototype.quote = function (line) {
        return this.quotesService.quote(line);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuotesComponent.prototype, "keyword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], QuotesComponent.prototype, "quotes", void 0);
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/search/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/search/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quotes_service__WEBPACK_IMPORTED_MODULE_1__["QuotesService"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.quote-list {\n  margin: 10px 30px;\n}\n\ninput.search {\n  -webkit-transition: all 0.30s ease-in-out;\n  -moz-transition: all 0.30s ease-in-out;\n  -ms-transition: all 0.30s ease-in-out;\n  -o-transition: all 0.30s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n\n  font-size: 16px;\n  line-height: 34px;\n  width: 300px;\n  height: 34px;\n}\n\ninput.search:focus {\n  box-shadow: 0 0 5px rgba(210, 210, 210, 1);\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid rgba(210, 210, 210, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQ0FBMEM7RUFDMUMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsMEJBQTBCOztFQUUxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwyQ0FBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix5Q0FBeUM7Q0FDMUMiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnF1b3RlLWxpc3Qge1xuICBtYXJnaW46IDEwcHggMzBweDtcbn1cblxuaW5wdXQuc2VhcmNoIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDNweCAwcHggM3B4IDNweDtcbiAgbWFyZ2luOiA1cHggMXB4IDNweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XG5cbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbmlucHV0LnNlYXJjaDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcbiAgcGFkZGluZzogM3B4IDBweCAzcHggM3B4O1xuICBtYXJnaW46IDVweCAxcHggM3B4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"quote-list\">\n\n  <input class=\"search\" type=\"text\"\n         [ngModel]=\"keyword\" (ngModelChange)=\"onInputChanged($event)\"\n         placeholder=\"Enter your search terms\" />\n\n  <tag-cloud [keyword]=\"keyword\" [text]=\"text\"> </tag-cloud>\n\n  <quotes [keyword]=\"keyword\" [quotes]=\"quotes\"> </quotes>\n\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quotes.service */ "./src/app/services/quotes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute, quotesService) {
        this.activatedRoute = activatedRoute;
        this.quotesService = quotesService;
        this.keyword = '';
        this.data = [];
        this.quotes = [];
        this.text = '';
    }
    SearchComponent.prototype.onInputChanged = function (value) {
        this.keyword = value;
        this.updateQuotes();
    };
    SearchComponent.prototype.updateQuotes = function () {
        this.quotes = this.filter(this.data, this.keyword);
        this.text = this.quotes.join(' ');
    };
    SearchComponent.prototype.getKeyword = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.keyword = params['q'] || '';
        });
    };
    SearchComponent.prototype.getQuotes = function () {
        var _this = this;
        this.quotesService.findAll().subscribe(function (data) {
            _this.data = data;
            _this.updateQuotes();
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.getKeyword();
        this.getQuotes();
    };
    SearchComponent.prototype.filter = function (data, keyword) {
        var result = [];
        if (data.length > 0) {
            var word_1 = keyword.toLowerCase();
            result = data.filter(function (line) { return line.toLowerCase().includes(word_1); });
        }
        return result;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")],
            providers: [
                _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"],
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/quotes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/quotes.service.ts ***!
  \********************************************/
/*! exports provided: QuotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesService", function() { return QuotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesService = /** @class */ (function () {
    function QuotesService(http) {
        var _this = this;
        this.http = http;
        this.result = [];
        this.items = this.http.get('assets/quotes.txt')
            .map(function (res) { return res.text().split(/\r\n|\n/); });
        this.items.subscribe(function (data) { return _this.result = data; });
    }
    QuotesService.prototype.findAll = function () {
        return this.items;
    };
    QuotesService.prototype.author = function (line) {
        var author = line.split('~')[1];
        return author ? author.trim() : '';
    };
    QuotesService.prototype.quote = function (line) {
        var quote = line.split('~')[0];
        return quote ? quote.trim() : '';
    };
    QuotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuotesService);
    return QuotesService;
}());



/***/ }),

/***/ "./src/app/tag/cloud.component.css":
/*!*****************************************!*\
  !*** ./src/app/tag/cloud.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, p {\n  font-family: Lato;\n}\n\ntextarea {\n  width: 400px;\n  height: 150px;\n}\n\na {\n  color: #333;\n  text-decoration: none;\n}\n\n.cloud {\n  display: none;\n  list-style-type: none;\n  width: 400px;\n  min-height: 200px;\n  float: right;\n}\n\n@media (min-width: 1000px) {\n  .cloud {\n    display: block;\n  }\n}\n\n.cloud li {\n  list-style: none;\n  display: inline-block;\n  margin: 0px 6px;\n}\n\n.cloud li.extra_small {\n  font-size: 10px;\n}\n\n.cloud li.small {\n  font-size: 11px;\n}\n\n.cloud li.normal {\n  font-size: 13px;\n}\n\n.cloud li.medium {\n  font-size: 15px;\n}\n\n.cloud li.large {\n  font-size: 16px;\n}\n\n.cloud li.extra_large {\n  font-size: 22px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnL2Nsb3VkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjs7QUFHRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdGFnL2Nsb3VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgcCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbG91ZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5jbG91ZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4uY2xvdWQgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDZweDtcbn1cblxuLmNsb3VkIGxpLmV4dHJhX3NtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2xvdWQgbGkuc21hbGwge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jbG91ZCBsaS5ub3JtYWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jbG91ZCBsaS5tZWRpdW0ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jbG91ZCBsaS5sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNsb3VkIGxpLmV4dHJhX2xhcmdlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tag/cloud.component.html":
/*!******************************************!*\
  !*** ./src/app/tag/cloud.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"cloud\">\n  <li *ngFor=\"let tag of tags\" class={{tagClass(tag)}}>\n    <a href=\"search?q={{tag}}\">{{ tag }}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/tag/cloud.component.ts":
/*!****************************************!*\
  !*** ./src/app/tag/cloud.component.ts ***!
  \****************************************/
/*! exports provided: CloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudComponent", function() { return CloudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/tag/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudComponent = /** @class */ (function () {
    function CloudComponent() {
        this.grades = ["extra_small ", "small", "normal", "medium", "large", "extra_large"];
        this.cloud = {};
        this.tags = [];
        this.max = 0;
        this.min = 3;
        this.distribution = [];
    }
    CloudComponent.prototype.ngOnInit = function () {
    };
    CloudComponent.prototype.ngOnChanges = function () {
        var cloud = this.buildCloud(this.text);
        this.cloud = this.filterCloud(cloud);
        this.tags = Object.keys(cloud).slice();
        this.distribution = Object.values(cloud);
        this.max = Math.max.apply(Math, this.distribution);
    };
    CloudComponent.prototype.buildCloud = function (value) {
        var _this = this;
        var excludeWords = _constants__WEBPACK_IMPORTED_MODULE_1__["stopWords"];
        excludeWords.push(this.keyword.toLowerCase());
        var words = value.split(' ');
        return words.map(function (word) { return word.toLowerCase().replace(/[\(\)\:\.\,!?;]|'s/g, ''); })
            .filter(function (s) { return s.trim() && s.length > _this.min; })
            .filter(function (s) { return !excludeWords.includes(s); })
            .reduce(function (x, s) {
            x[s] = (x[s] || 0) + 1;
            return x;
        }, {});
    };
    CloudComponent.prototype.filterCloud = function (cloud) {
        return Object.keys(cloud)
            .filter(function (key) { return cloud[key] > 2; })
            .reduce(function (obj, key) {
            obj[key] = cloud[key];
            return obj;
        }, {});
    };
    CloudComponent.prototype.strength = function (index) {
        var maxGrade = (this.grades.length - 1);
        var strength = (index / this.max) * maxGrade;
        return this.grades[Math.floor(strength)];
    };
    CloudComponent.prototype.tagClass = function (tag) {
        return this.strength(this.cloud[tag]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CloudComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CloudComponent.prototype, "keyword", void 0);
    CloudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tag-cloud',
            template: __webpack_require__(/*! ./cloud.component.html */ "./src/app/tag/cloud.component.html"),
            styles: [__webpack_require__(/*! ./cloud.component.css */ "./src/app/tag/cloud.component.css")]
        })
    ], CloudComponent);
    return CloudComponent;
}());



/***/ }),

/***/ "./src/app/tag/constants.ts":
/*!**********************************!*\
  !*** ./src/app/tag/constants.ts ***!
  \**********************************/
/*! exports provided: stopWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWords", function() { return stopWords; });
var stopWords = ['them', 'than', 'that', 'these', 'those',
    'their', 'they', 'they\'ve', 'they\'re', 'you\'ve', 'we\'ve', 'does',
    'which', 'when', 'what', 'with', 'cannot',
    'would', 'should', 'could', 'must', 'sometimes',
    'from', 'such', 'will', 'shall', 'them',
    'your', 'have', 'more', 'only', 'never', 'like',
    'because', 'can\’t', 'don\’t', 'don\'t', 'doesn\'t',
    'isn\'t', 'every'];



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jochenfromm/Projects/QuoteInspector/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map