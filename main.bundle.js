webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/**
 * Created by NguyenNK3 on 5/5/2017.
 */
var Action = /** @class */ (function () {
    function Action() {
        this.index = 0;
        this.type = '';
        this.start = '';
        this.end = '';
        this.fileName = '';
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(user) {
        this.user = user;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  min-height: 100%;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  font-family: Roboto, \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  color: #404c51;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 16px;\r\n}\r\n\r\na {\r\n  text-decoration: none !important;\r\n  color: #1b82d7;\r\n}\r\n\r\n/*WRAPPER CSS*/\r\n\r\n.layout-wrapper {\r\n  display: block;\r\n}\r\n\r\n/*END WRAPPER CSS*/\r\n\r\n/*TOP-BAR CSS*/\r\n\r\n#layout-topbar {\r\n  background-color: #20272a;\r\n  /*-webkit-box-sizing: border-box;*/\r\n  /*box-sizing: border-box;*/\r\n  display: block;\r\n  padding: 0;\r\n  height: 70px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 9997;\r\n  /*-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);*/\r\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n#layout-topbar .menu-button {\r\n  display: none;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 60px;\r\n  height: 60px;\r\n  line-height: 58px;\r\n  text-align: center;\r\n  /*-webkit-transition: background-color .3s;*/\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n}\r\n\r\n#layout-topbar .menu-button i {\r\n  line-height: inherit;\r\n}\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n#layout-topbar .logo {\r\n  margin-left: 45px;\r\n  margin-top: 15px;\r\n  display: inline-block;\r\n}\r\n\r\n#layout-topbar .logo img {\r\n  height: 42px;\r\n}\r\n\r\n.topbar-menu {\r\n  display: inline-block;\r\n  list-style-type: none;\r\n  float: right;\r\n  margin: 0 60px 0 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.topbar-menu > li {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\n.topbar-menu > li > a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /*-webkit-transition: background-color .3s;*/\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n  min-width: 120px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  /*-webkit-box-sizing: border-box;*/\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: 100%;\r\n  line-height: 70px;\r\n}\r\n\r\n.topbar-menu > li > a:hover {\r\n  background-color: #4a4f52;\r\n}\r\n\r\n/*a:hover {*/\r\n\r\n/*color: red !important;*/\r\n\r\n/*background-color: white;*/\r\n\r\n/*}*/\r\n\r\n.topbar-menu > li.topbar-menu-themes {\r\n  position: relative;\r\n}\r\n\r\n.topbar-menu > li {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\na:-webkit-any-link {\r\n  color: -webkit-link;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*END TOPBAR CSS*/\r\n\r\n/*SIDEBAR CSS*/\r\n\r\n#layout-sidebar .layout-menu > a.active-menuitem img.layout-menu-icon-active {\r\n  display: inline;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a.active-menuitem img.layout-menu-icon-inactive {\r\n  display: none;\r\n}\r\n\r\n#layout-sidebar .layout-menu {\r\n  overflow-y: auto;\r\n  width: 300px;\r\n}\r\n\r\n#layout-sidebar {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 70px;\r\n  height: calc(100% - 70px);\r\n  background-color: #fff;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  width: 300px;\r\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n#layout-sidebar .layout-menu > a {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: block;\r\n  padding: 15px 0 0 25px;\r\n  cursor: pointer;\r\n  border-top: 1px solid #e3e9ea;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a:hover {\r\n  background-color: #eee;\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img.layout-menu-icon-active {\r\n  display: none;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img.layout-menu-icon-inactive {\r\n  display: inline;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img {\r\n  width: 20px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a span {\r\n  color: #6d7879;\r\n  font-size: 16px;\r\n  margin: 0 0 0 30px;\r\n  display: block;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div {\r\n  padding: 20px 15px;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div a {\r\n  width: 50%;\r\n  float: left;\r\n  padding: 6px;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  -webkit-border-radius: 4px;\r\n  font-size: 14px;\r\n  color: #6d7879;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div a:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n.layout-mask {\r\n  z-index: 9998;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 0;\r\n  display: none;\r\n  background-color: #4c5254;\r\n  opacity: .7;\r\n}\r\n\r\n/*SUBMENU SHOWHIDE*/\r\n\r\n#layout-sidebar .layout-menu > div.submenuhide {\r\n  overflow: hidden;\r\n  max-height: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  -webkit-transition-duration: .3s;\r\n  transition-duration: .3s;\r\n  -webkit-transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n}\r\n\r\n#layout-sidebar .layout-menu > div.submenushow {\r\n  -webkit-transition-duration: .3s;\r\n  transition-duration: .3s;\r\n  -webkit-transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  max-height: 500px;\r\n}\r\n\r\n/*END SUBMENUSHOWHIDE*/\r\n\r\n/*END SIDEBAR CSS*/\r\n\r\n/*LAYOUT-CONTENT*/\r\n\r\n#layout-content {\r\n  margin-left: 300px;\r\n  padding-top: 70px;\r\n  background-color: #fff;\r\n}\r\n\r\n.home .introduction {\r\n  background: url(https://www.primefaces.org/primeng/introduction.48b4d5d99dc447de12a8.jpg) 0 0/cover no-repeat;\r\n  color: #fff;\r\n  padding: 80px 30px 80px 50px;\r\n}\r\n\r\n.home .introduction h1 {\r\n  font-weight: 400;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.home .introduction h2 {\r\n  font-weight: 700;\r\n  margin-bottom: 40px;\r\n  margin-top: 0;\r\n}\r\n\r\n.home-button {\r\n  font-weight: 700;\r\n  background-color: #fbd17b;\r\n  color: #b27800 !important;\r\n  padding: 8px 14px 8px 14px;\r\n  /*padding-right: 14px;*/\r\n  /*padding-left: 14px;*/\r\n  border-radius: 3px;\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n  display: inline-block;\r\n  min-width: 120px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\nh1 {\r\n  font-size: 32px;\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n}\r\n\r\n.home .features {\r\n  background-color: #f5f7f8;\r\n  text-align: center;\r\n  padding: 30px;\r\n}\r\n\r\n.home .features h3 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home h3 {\r\n  font-size: 1.5em;\r\n}\r\n\r\nh3 {\r\n  display: block;\r\n  font-size: 1.17em;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.features > p > a:hover {\r\n  color: rgb(0, 0, 238) !important;\r\n}\r\n\r\n.ui-g {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.home .features img {\r\n  width: 57px;\r\n}\r\n\r\n.home .features .ui-g > div {\r\n  padding: .5em 2em;\r\n}\r\n\r\n.home .features .feature-name {\r\n  display: block;\r\n  font-size: 18px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.home .features .ui-g p {\r\n  color: #535d62;\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.home p {\r\n  line-height: 1.5;\r\n}\r\n\r\n/*END-LAYOUT-CONTENT*/\r\n\r\n/*MEDIA*/\r\n\r\n@media screen and (max-width: 768px) {\r\n  #layout-topbar .menu-button {\r\n    display: inline-block !important;\r\n  }\r\n\r\n  #layout-topbar .logo {\r\n    margin: 7px 0;\r\n  }\r\n\r\n  .topbar-menu {\r\n    background-color: #363c3f;\r\n    float: none;\r\n    width: 100%;\r\n    height: 44px;\r\n    margin: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  #layout-sidebar.active {\r\n    left: 0;\r\n  }\r\n\r\n  #layout-sidebar {\r\n    top: 100px;\r\n    left: -300px;\r\n    -webkit-transition: left .3s;\r\n    transition: left .3s;\r\n    z-index: 9999;\r\n  }\r\n\r\n  #layout-content {\r\n    margin-left: 0;\r\n    padding-top: 100px;\r\n  }\r\n\r\n  #layout-topbar {\r\n    text-align: center;\r\n  }\r\n\r\n  .topbar-menu > li > a {\r\n    padding-bottom: 0;\r\n    line-height: 40px;\r\n    min-width: 100px;\r\n  }\r\n\r\n  .layout-mask {\r\n    display: block;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<body>-->\n<!--<div class=\"layout-wrapper\">-->\n  <!--<div id=\"layout-topbar\">-->\n    <!--<a class=\"menu-button\" (click)=\"activeMenuButtonClick()\">-->\n      <!--<i class=\"fa fa-bars\"></i>-->\n    <!--</a>-->\n    <!--<a class=\"logo\" href=\"#\">-->\n      <!--<img class=\"ng-tns-c0-0\" alt=\"logo\" src=\"assets/showcase/images/logo.png\">-->\n    <!--</a>-->\n    <!--<ul class=\"topbar-menu\">-->\n      <!--<li class=\"ng-tns-c0-0\">-->\n        <!--<a class=\"ng-tns-c0-0\" href=\"#/setup\">GET STARTED</a>-->\n      <!--</li>-->\n      <!--<li class=\"topbar-menu-themes\">-->\n        <!--<a class=\"ng-tns-c0-0\" href=\"#/\">THEMES</a>-->\n      <!--</li>-->\n      <!--<li class=\"ng-tns-c0-0\">-->\n        <!--<a class=\"ng-tns-c0-0\" href=\"#/support\">SUPPORT</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n  <!--<div id=\"layout-sidebar\" [ngClass]=\"{'active': isActiveMenuButton}\">-->\n    <!--<div class=\"layout-menu\">-->\n      <!--<a id=\"menu_input\" [ngClass]=\"{'active-menuitem': isActiveInput}\" (click)=\"activeClick()\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/input-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/input.svg\">-->\n        <!--<span>Input</span>-->\n      <!--</a>-->\n      <!--<div [ngClass]=\"{'submenushow': isActiveInput , 'submenuhide': !isActiveInput}\">-->\n        <!--<a í (click)=\"toLogin()\">● InputGroup</a>-->\n        <!--<a href=\"#/autocomplete\">● AutoComplete</a>-->\n        <!--<a href=\"#/calendar\">● Calendar</a>-->\n        <!--<a href=\"#/checkbox\">● Checkbox</a>-->\n        <!--<a href=\"#/chips\">● Chips</a>-->\n        <!--<a href=\"#/colorpicker\">● ColorPicker</a>-->\n        <!--<a href=\"#/dropdown\">● Dropdown</a>-->\n        <!--<a href=\"#/editor\">● Editor</a>-->\n        <!--<a href=\"#/keyfilter\">● KeyFilter </a>-->\n        <!--<a href=\"#/inputswitch\">● InputSwitch</a>-->\n        <!--<a href=\"#/inputtext\">● InputText</a>-->\n        <!--<a href=\"#/inputtextarea\">● InputTextArea</a>-->\n        <!--<a href=\"#/listbox\">● Listbox</a>-->\n        <!--<a href=\"#/inputmask\">● Mask</a>-->\n        <!--<a href=\"#/multiselect\">● MultiSelect</a>-->\n        <!--<a href=\"#/password\">● Password</a>-->\n        <!--<a href=\"#/radiobutton\">● RadioButton</a>-->\n        <!--<a href=\"#/rating\">● Rating</a>-->\n        <!--<a href=\"#/slider\">● Slider</a>-->\n        <!--<a href=\"#/spinner\">● Spinner</a>-->\n        <!--<a href=\"#/selectbutton\">● SelectButton</a>-->\n        <!--<a href=\"#/togglebutton\">● ToggleButton</a>-->\n        <!--<a href=\"#/tristatecheckbox\">● TriCheckbox</a>-->\n      <!--</div>-->\n      <!--<a id=\"button-menutitle\" [ngClass]=\"{'active-menuitem': isActiveButton}\" (click)=\"activeButtonClick()\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/button-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/button.svg\">-->\n        <!--<span>Button</span>-->\n      <!--</a>-->\n      <!--<div [ngClass]=\"{'submenushow': isActiveButton , 'submenuhide': !isActiveButton}\">-->\n        <!--<a href=\"#/button\">● Button</a>-->\n        <!--<a href=\"#/splitbutton\">● SplitButton</a>-->\n      <!--</div>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"data_menutitle\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/data-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/data.svg\">-->\n        <!--<span class=\"ng-tns-c0-0\">Data</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_panel\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/panel-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/panel.svg\">-->\n        <!--<span>Panel</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_overlay\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/overlay-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/overlay.svg\">-->\n        <!--<span>Overlay</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_file\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/file-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/file.svg\">-->\n        <!--<span>File</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_menu\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/menu-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/menu.svg\">-->\n        <!--<span>Menu</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_chart\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/charts-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/charts.svg\">-->\n        <!--<span>Charts</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_messages\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/message-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/message.svg\">-->\n        <!--<span>Messages</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_multimedia\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/multimedia-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/multimedia.svg\">-->\n        <!--<span>Multimedia</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_dnd\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/dragdrop-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/dragdrop.svg\">-->\n        <!--<span>DragDrop</span>-->\n      <!--</a>-->\n      <!--<a class=\"ng-tns-c0-0\" id=\"menu_misc\">-->\n        <!--<img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/misc-active.svg\">-->\n        <!--<img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/misc.svg\">-->\n        <!--<span>Misc</span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div *ngIf=\"isActiveMenuButton == true\" class=\"layout-mask ng-tns-c0-0 ng-star-inserted\">-->\n  <!--</div>-->\n  <!--<div id=\"layout-content\">-->\n    <!--<div>-->\n      <!--&lt;!&ndash;<router-outlet>&ndash;&gt;-->\n\n      <!--&lt;!&ndash;</router-outlet>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--</body>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authguard_guard__ = __webpack_require__("./src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_sidebar__ = __webpack_require__("./node_modules/primeng/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_module__ = __webpack_require__("./src/app/homepage/homepage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__beeketing_beeketing_component__ = __webpack_require__("./src/app/beeketing/beeketing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__beeketing_beeketing_component__["a" /* BeeketingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_primeng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_module__["a" /* HomepageModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__authguard_guard__["a" /* AuthguardGuard */], __WEBPACK_IMPORTED_MODULE_16__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authguard_guard__ = __webpack_require__("./src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beeketing_beeketing_component__ = __webpack_require__("./src/app/beeketing/beeketing.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'beeketing',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: '',
        // loadChildren: './homepage/homepage.module#HomepageModule'
        component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]
    },
    {
        path: 'admin',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__authguard_guard__["a" /* AuthguardGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'sidebar',
        component: __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__["a" /* SidebarComponent */]
    },
    {
        path: 'nav',
        component: __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */]
    },
    {
        path: 'beeketing',
        component: __WEBPACK_IMPORTED_MODULE_7__beeketing_beeketing_component__["a" /* BeeketingComponent */]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: false });


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.commentsUrl = 'http://10.16.42.192:8080/';
    }
    AppService.prototype.submitData = function (dataType, body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        var response = this.http.post(this.commentsUrl + 'video/add', body, options);
        switch (dataType) {
            case 'json':
                return response.map(this.extractJson).catch(this.handleError.bind(this));
            case 'text':
        }
    };
    AppService.prototype.extractJson = function (res) {
        try {
            return res.json();
        }
        catch (err) {
            return {};
        }
    };
    AppService.prototype.extractText = function (res) {
        try {
            return res.text();
        }
        catch (err) {
            return '';
        }
    };
    AppService.prototype.handleError = function (error) {
        var errorMessage = {
            body: error._body,
            status: error.status
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errorMessage);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user) {
        this.user = user;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoggedIn();
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/beeketing/beeketing.component.css":
/***/ (function(module, exports) {

module.exports = "#page {\r\n  height: 1000px;\r\n}\r\n\r\n.landing-page-new .navigation-brand .brand-logo .logo {\r\n  background: url(/../../assets/images/logobeeketing.png) 0 0 no-repeat;\r\n  background-size: contain;\r\n  color: white;\r\n}\r\n\r\n.brand-logo > a > img {\r\n  width: 230px;\r\n  height: 80px;\r\n}\r\n\r\n.first {\r\n  border-bottom: 2px solid;\r\n}\r\n\r\n.tracking-target {\r\n  top: 18px !important;\r\n  background-color: #0088ff;\r\n  color: white;\r\n  padding: 15px 10px;\r\n  margin-left: 12px;\r\n  text-align: center;\r\n  /* border: 2px solid #fff; */\r\n  border-radius: 9px;\r\n  width: 200px;\r\n  font-size: 17px;\r\n  position: absolute;\r\n}\r\n\r\n.get-started {\r\n  color: white !important;\r\n}\r\n\r\nli > a > span {\r\n  /*color: black;*/\r\n}\r\n\r\n.border-box {\r\n  background-color: #0088ff;\r\n  color: white;\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  width: 200px;\r\n  font-size: 17px;\r\n  position: absolute;\r\n}\r\n\r\n.border1-box {\r\n  background-color: #fb1ca4;\r\n  color: white;\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  width: 200px;\r\n  font-size: 21px;\r\n  position: absolute;\r\n  left: 45%;\r\n  margin-top: 100px;\r\n}\r\n\r\n.border2-box {\r\n  background-color: #12ca64;\r\n  color: white;\r\n  padding: 20px 35px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  width: 200px;\r\n  font-size: 17px;\r\n}\r\n\r\n.border2-box > span {\r\n  font-size: 21px;\r\n}\r\n\r\n.title {\r\n  margin-top: 90px;\r\n  font-family: Myriad Pro;\r\n  color: white;\r\n}\r\n\r\n.title > p {\r\n  color: white;\r\n  font-family: \"Myriad Pro\";\r\n}\r\n\r\n.nav > li > a.tracking-target:hover {\r\n  background-color: red !important;\r\n}\r\n\r\n.navbar-nav {\r\n  float: right;\r\n  display: inline-block;\r\n  list-style: none;\r\n}\r\n\r\n.navbar-nav > li {\r\n  float: left;\r\n  /*display: table-cell;*/\r\n  vertical-align: middle;\r\n}\r\n\r\n.navbar-nav > li > a {\r\n  font-size: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.slider {\r\n  background-image: url('/../../assets/images/layout_color.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 600px;\r\n}\r\n\r\n.customers-content > p {\r\n  font-weight: 400 !important;\r\n}\r\n\r\n.customers-slider {\r\n  padding-top: 40px;\r\n  height: 225px;\r\n}\r\n\r\n.bx-wrapper {\r\n  color: #f8f8fc;\r\n  height: 226px;\r\n}\r\n\r\n.bx-wrapper > .bx-viewport > ul > li {\r\n  float: left;\r\n  padding-right: 20px;\r\n}\r\n\r\n.bx-viewport > ul {\r\n  list-style: none;\r\n}\r\n\r\n.bx-prev {\r\n  background: url('/../../assets/images/icon_arow_left.svg') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n  padding-top: 20px;\r\n  top: 57px;\r\n  left: 20px;\r\n  position: absolute;\r\n}\r\n\r\n.bx-next {\r\n  background: url('/../../assets/images/icon_arow_right.svg') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n  padding-top: 20px;\r\n  top: 57px;\r\n  position: absolute;\r\n}\r\n\r\n.show-how-work {\r\n  height: 848px;\r\n  background-color: #ececec;\r\n  font-family: \"Myriad Pro\";\r\n}\r\n\r\n.text-center > p > a > i {\r\n  padding-left: 20px;\r\n  font-size: 28px;\r\n}\r\n\r\n.play-video {\r\n  font-size: 18px;\r\n  color: #0088ff;\r\n  font-weight: 400;\r\n}\r\n\r\n.analyze {\r\n  height: 703px;\r\n  font-family: \"Myriad Pro\";\r\n  padding-top: 80px;\r\n}\r\n\r\n.ready {\r\n  font-family: \"Myriad Pro\";\r\n}\r\n\r\n.smarter-marketing {\r\n  height: 840px;\r\n  background-color: #ececec;\r\n  font-family: \"Myriad Pro\";\r\n}\r\n\r\n.e-commerce {\r\n  height: 360px;\r\n  background-color: #ececec;\r\n  font-family: \"Myriad Pro\";\r\n}\r\n\r\n.track-customer {\r\n  padding-top: 180px;\r\n  padding-left: 110px;\r\n}\r\n\r\n.track-customer2 {\r\n  padding-top: 180px;\r\n}\r\n\r\n.track-customer > p {\r\n  font-family: \"Myriad Pro\";\r\n  color: #404c51;\r\n}\r\n\r\n.track-customer2 > p {\r\n  font-family: \"Myriad Pro\";\r\n  color: #404c51;\r\n}\r\n\r\n.ipad {\r\n  background: url('/../../assets/images/Ipad.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 620px;\r\n}\r\n\r\n.iphone {\r\n  background: url('/../../assets/images/Iphone.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 620px;\r\n}\r\n\r\n.book {\r\n  background: url('/../../assets/images/macbook_book.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 470px;\r\n}\r\n\r\n.block {\r\n  margin-right: 50px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.beeketing {\r\n  background: url('/../../assets/images/platform1.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.shopify {\r\n  background: url('/../../assets/images/platform8.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.seoshop {\r\n  background: url('/../../assets/images/platform7.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.weebly {\r\n  background: url('/../../assets/images/platform6.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.tictail {\r\n  background: url('/../../assets/images/platform5.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.bigcommerce {\r\n  background: url('/../../assets/images/platform4.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.woocommerce {\r\n  background: url('/../../assets/images/platform3.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.magento {\r\n  background: url('/../../assets/images/platform2.png') 0 0 no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.image {\r\n  height: 80px;\r\n  width: 150px;\r\n}\r\n\r\n.nav-footer {\r\n  margin-top: 300px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.active {\r\n  color: #0088ff;\r\n}\r\n\r\n.ul-footer > li > a:hover {\r\n  color: #0088ff;\r\n}\r\n\r\n.ul-footer {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #071130;\r\n  border-radius: 25px;\r\n}\r\n\r\n.ul-footer > li {\r\n  display: inline;\r\n  float: left;\r\n  width: 25%;\r\n}\r\n\r\n.ul-footer > li > a {\r\n  display: block;\r\n  padding: 8px;\r\n  font-size: 20px;\r\n  /*background-color: #dddddd;*/\r\n}\r\n\r\n.footer {\r\n  background-image: url('/../../assets/images/footer2.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 800px;\r\n}\r\n\r\n/*.footer > p {*/\r\n\r\n/*color: white;*/\r\n\r\n/*font-family: \"Myriad Pro\";*/\r\n\r\n/*}*/\r\n\r\n.white {\r\n  color: white;\r\n  padding-top: 100px;\r\n}\r\n\r\n.view-more {\r\n  padding: 10px;\r\n  background-color: #12ca64;\r\n  color: white;\r\n  border-radius: 11px;\r\n}\r\n\r\nh1 {\r\n  font-size: 56px;\r\n}\r\n\r\n.menu-active {\r\n  float: left;\r\n  color: white;\r\n}\r\n\r\n/*/*/\r\n\r\n/*.bx-wrapper .bx-controls-direction a {*/\r\n\r\n/*position: absolute;*/\r\n\r\n/*top: 50%;*/\r\n\r\n/*margin-top: -16px;*/\r\n\r\n/*outline: 0;*/\r\n\r\n/*text-indent: -9999px;*/\r\n\r\n/*width: 20px;*/\r\n\r\n/*height: 41px;*/\r\n\r\n/*opacity: 1;*/\r\n\r\n/*}*/\r\n"

/***/ }),

/***/ "./src/app/beeketing/beeketing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n  <div class=\"landing-page-new\">\r\n    <header>\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-4\">\r\n          <nav class=\"navigation navigation-header\">\r\n            <div class=\"navigation-brand\">\r\n              <div class=\"brand-logo\">\r\n                <a href=\"/\" title=\"beeketing\">\r\n                  <img src=\"/../../assets/images/beeketing1.png\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n        <div class=\"col-xs-8\">\r\n          <div class=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li class=\"active\"><a href=\"/features\" data-hover=\"Features\" class=\"features\" title=\"Features\"\r\n                                    data-event=\"Click features from homepage\">\r\n                <span>Features</span>\r\n              </a>\r\n              </li>\r\n              <li><a href=\"/pricing\" data-hover=\"Pricing\" title=\"Pricing\">\r\n                <span>Pricing</span>\r\n              </a>\r\n              </li>\r\n              <li><a href=\"/about\" data-hover=\"About\" title=\"About\">\r\n                <span>About</span>\r\n              </a>\r\n              </li>\r\n              <li><a href=\"/login\" data-hover=\"Login\" title=\"Login\"\r\n              >\r\n                <span>Login</span>\r\n              </a>\r\n              </li>\r\n              <li class=\"last\"><a href=\"/get-started\" title=\"Get Started\"\r\n                                  class=\"tracking-target\"\r\n                                  style=\"color: #0088ff;\">\r\n                <span class=\"get-started\">GetStarted</span>\r\n              </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n  </div>\r\n  <div class=\"main-content\">\r\n    <div class=\"slider\">\r\n      <div class=\"container\">\r\n        <div class=\"title\">\r\n          <p style=\"font-size:35px\">Convert Customers</p>\r\n          <p style=\"font-size: 50px;\">Personally & Automatically</p>\r\n          <p style=\"font-size:18px;margin-top:90px;color: white;margin-left:20px;margin-bottom: 20px;\"> Your customers\r\n            all behave\r\n            differently, why treat them all the same?</p>\r\n          <a href=\"/getstarted\" class=\"border-box\">\r\n            <span style=\"font-size:20px\">Get started now</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!--<img src=\"../../assets/images/layout.jpg\">-->\r\n    </div>\r\n    <section class=\"customers-slider\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 customers-content\">\r\n            <p style=\"font-size:20px;color:black;padding-left: 85px\">Helping more than <span\r\n              style=\"font-weight: bold\">6,000 online sellers</span> to\r\n              sell millions of\r\n              customers</p>\r\n            <div class=\"bx-wrapper\" style=\"max-width: 830px\">\r\n              <div class=\"bx-viewport\">\r\n                <ul>\r\n                  <li>\r\n                    <a class=\"bx-prev\" href=\"\">Prev</a>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"/../../assets/images/logo-app-7.png\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"/../../assets/images/logo-app-6.png\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"/../../assets/images/logo-app-5.png\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"/../../assets/images/logo-app-4.png\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"/../../assets/images/logo-app-3.png\">\r\n                  </li>\r\n                  <li><a class=\"bx-next\" href=\"\">Next</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"show-how-work\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center\">\r\n          <h1 style=\"font-weight: 400\">How it works</h1>\r\n          <p class=\"play-video\">PLAY VIDEO INTRO <a href=\"/play\" title=\"Play video intro\"><i\r\n            class=\"fa fa-play-circle\"></i></a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-xs-6 ipad\"></div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"track-customer\">\r\n            <p style=\"font-size:30px;font-weight: 300\">Track your customers' behaviors</p>\r\n            <p style=\"font-size:18px;font-weight: 100;width: 600px \">Every visit to your store gets tied to a real\r\n              person. Beeketing\r\n              helps you see who\r\n              they are, know what they do on your store.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"analyze\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-7\">\r\n          <div class=\"track-customer2\">\r\n            <p style=\"font-size:30px;font-weight: 300\">Analyze & Learn their interest on your store</p>\r\n            <p style=\"font-size:18px;font-weight: 100\">By analyzing and learning their interests,Beeketing\r\n              puts you a\r\n              step ahead of the customer journey to predict products they're most likely to buy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-5 iphone\"></div>\r\n\r\n      </div>\r\n    </section>\r\n    <section class=\"smarter-marketing\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center\" style=\"margin-bottom:100px;\">\r\n          <h2>Smarter Marketing Apps to turn your visitors into revenue</h2>\r\n          <h3>From the data collected, we build a platform of smart marketing apps to follow your visitors right when\r\n            they step on your store and gradually convert them to customers - then loyal customers for you.</h3>\r\n        </div>\r\n        <div class=\"col-xs-12 book\"></div>\r\n      </div>\r\n    </section>\r\n    <section class=\"ready\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center\" style=\"margin-bottom:100px;\">\r\n          <h2 style=\"margin-bottom: 30px\">Ready to Get Started</h2>\r\n          <div class=\"row text-center\"><a class=\"border2-box\" href=\"/#\"><span>View More Apps</span></a></div>\r\n        </div>\r\n        <hr style=\"padding-top:2px\"/>\r\n      </div>\r\n    </section>\r\n    <section class=\"ready\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center\">\r\n          <h2>E-marketing apps that give every sellers <b>the POWER</b></h2>\r\n          <h2>to sell effectively like Amazon</h2>\r\n          <div class=\"bx-viewport\">\r\n            <ul>\r\n              <li>\r\n                <img src=\"/../../assets/images/scvsoft-logo.png\">\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <h4><i>\"Beeketing has increase our conversion rate by 23% and bring back the lost revenue within just a couple\r\n            of\r\n            weeks. The extra sales has paid for the app itself for the whole year! </i></h4>\r\n          <h4><i>Definitely recommended!\"</i></h4>\r\n          <h4 style=\"color:#006ae2;padding-top:30px\">Helen Jones</h4>\r\n          <h4>FOUNDER OF AVIVA BOUTIQUE</h4>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"e-commerce\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center\">\r\n          <h3>Seamlessly integrated with your e-commerce platform,\r\n            install with just a few clicks</h3>\r\n        </div>\r\n        <div class=\"col-md-8 col-md-offset-2 text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"shopify image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"seoshop image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"weebly image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"tictail image\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"bigcommerce image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"woocommerce image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"magento image\"></div>\r\n            </div>\r\n            <div class=\"col-md-2 block\">\r\n              <div class=\"beeketing image\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"more\">... and more.</div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"text-center white\">\r\n          <h1 style=\"text-transform: uppercase\">Ready to increase your sales by 20%+?</h1>\r\n          <h4>No sales team, no marketers, no engineers. Just results & Beeketing.</h4>\r\n          <a class=\"border1-box\">Get started now</a>\r\n          <nav class=\"nav-footer\">\r\n            <ul class=\"ul-footer\">\r\n              <li class=\"active\"><a href=\"/blog\">Blog</a></li>\r\n              <li><a href=\"/presskit\">Press kit</a></li>\r\n              <li><a href=\"/careers\">Careers</a></li>\r\n              <li><a href=\"/contact\">Contact</a></li>\r\n            </ul>\r\n          </nav>\r\n          <p style=\"color:white;\">Contact Us | © Beeketing 2015. All rights reserved.</p>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/beeketing/beeketing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeeketingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeeketingComponent = /** @class */ (function () {
    function BeeketingComponent() {
    }
    BeeketingComponent.prototype.ngOnInit = function () {
    };
    BeeketingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-beeketing',
            template: __webpack_require__("./src/app/beeketing/beeketing.component.html"),
            styles: [__webpack_require__("./src/app/beeketing/beeketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BeeketingComponent);
    return BeeketingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/*LAYOUT-CONTENT*/\r\n#layout-content {\r\n  margin-left: 300px;\r\n  padding-top: 70px;\r\n  background-color: #fff;\r\n}\r\n.home .introduction {\r\n  background: url(https://www.primefaces.org/primeng/introduction.48b4d5d99dc447de12a8.jpg) 0 0/cover no-repeat;\r\n  color: #fff;\r\n  padding: 80px 30px 80px 50px;\r\n}\r\n.home .introduction h1 {\r\n  font-weight: 400;\r\n  margin-bottom: 5px;\r\n}\r\n.home .introduction h2 {\r\n  font-weight: 700;\r\n  margin-bottom: 40px;\r\n  margin-top: 0;\r\n}\r\n.home-button {\r\n  font-weight: 700;\r\n  background-color: #fbd17b;\r\n  color: #b27800 !important;\r\n  padding: 8px 14px 8px 14px;\r\n  /*padding-right: 14px;*/\r\n  /*padding-left: 14px;*/\r\n  border-radius: 3px;\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n  display: inline-block;\r\n  min-width: 120px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\nh1 {\r\n  font-size: 32px;\r\n}\r\nh2 {\r\n  font-size: 24px;\r\n}\r\n.home .features {\r\n  background-color: #f5f7f8;\r\n  text-align: center;\r\n  padding: 30px;\r\n}\r\n.home .features h3 {\r\n  margin-bottom: 10px;\r\n}\r\n.home h3 {\r\n  font-size: 1.5em;\r\n}\r\nh3 {\r\n  display: block;\r\n  font-size: 1.17em;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n.features > p > a:hover {\r\n  color: rgb(0, 0, 238) !important;\r\n}\r\n.ui-g {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n.home .features img {\r\n  width: 57px;\r\n}\r\n.home .features .ui-g > div {\r\n  padding: .5em 2em;\r\n}\r\n.home .features .feature-name {\r\n  display: block;\r\n  font-size: 18px;\r\n  margin-top: 4px;\r\n}\r\n.home .features .ui-g p {\r\n  color: #535d62;\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\r\n}\r\n.home p {\r\n  line-height: 1.5;\r\n}\r\n/*END-LAYOUT-CONTENT*/\r\n/*MEDIA*/\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n<div class=\"introduction\">\n<h1>The Most Complete User Interface Suite</h1>\n<h2>for Angular</h2>\n<a class=\"home-button\" href=\"#/setup\">\nGET STARTED\n</a>\n</div>\n<div class=\"features\">\n<h3>Why PrimeNG?</h3>\n<p class=\"features-tagline\">Congratulations! 🎉 Your quest to find the UI library for Angular is complete.</p>\n<p class=\"features-description\">PrimeNG is a collection of rich UI components for Angular. All widgets are\nopen\nsource and free to use under MIT License. PrimeNG is developed by <a href=\"http://www.primetek.com.tr\">PrimeTek\nInformatics</a>,\na vendor with years of expertise in developing open source UI solutions. For project news and updates,\nplease\nfollow us on <a href=\"https://twitter.com/prime_ng\">twitter</a> and visit our <a\nhref=\"https://www.primefaces.org/category/primeng/\">blog</a>.</p>\n<div class=\"ui-g\">\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-component.svg\">\n<span class=\"feature-name\">70+ COMPONENTS</span>\n<p>The most complete set of native widgets featuring 70+ easy to use components for all your UI\nrequirements.</p>\n</div>\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-opensource.svg\">\n<span class=\"feature-name\">OPEN SOURCE</span>\n<p>Hosted at <a href=\"https://github.com/primefaces/primeng\">GitHub</a>, all widgets are open source and\nfree to use under MIT license. Feel the power of open source.</p>\n</div>\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-themes.svg\">\n<span class=\"feature-name\">PRODUCTIVITY</span>\n<p>Allocate your valuable time to business logic rather than dealing with the complex user interface\nrequirements.</p>\n</div>\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-productive.svg\">\n<span class=\"feature-name\">THEMES</span>\n<p>Don’t get tied up in just one look &amp; feel. Choose from a variety of options including material and\nflat design.</p>\n</div>\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-mobile.svg\">\n<span class=\"feature-name\">TEMPLATES</span>\n<p>Professionally designed highly customizable native Angular CLI application templates to get you started\nin no time. </p>\n</div>\n<div class=\"ui-g-12 ui-md-4\">\n<img src=\"assets/showcase/images/home/icon-templates.svg\">\n<span class=\"feature-name\">MOBILE</span>\n<p>Enhanced mobile user experience with touch optimized responsive design elements.</p>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  min-height: 100%;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  font-family: Roboto, \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  color: #404c51;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 16px;\r\n}\r\n\r\na {\r\n  text-decoration: none !important;\r\n  color: #1b82d7;\r\n}\r\n\r\n/*WRAPPER CSS*/\r\n\r\n.layout-wrapper {\r\n  display: block;\r\n}\r\n\r\n/*END WRAPPER CSS*/\r\n\r\n/*TOP-BAR CSS*/\r\n\r\n#layout-topbar {\r\n  background-color: #20272a;\r\n  /*-webkit-box-sizing: border-box;*/\r\n  /*box-sizing: border-box;*/\r\n  display: block;\r\n  padding: 0;\r\n  height: 70px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 9997;\r\n  /*-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);*/\r\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n#layout-topbar .menu-button {\r\n  display: none;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 60px;\r\n  height: 60px;\r\n  line-height: 58px;\r\n  text-align: center;\r\n  /*-webkit-transition: background-color .3s;*/\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n}\r\n\r\n#layout-topbar .menu-button i {\r\n  line-height: inherit;\r\n}\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n#layout-topbar .logo {\r\n  margin-left: 45px;\r\n  margin-top: 15px;\r\n  display: inline-block;\r\n}\r\n\r\n#layout-topbar .logo img {\r\n  height: 42px;\r\n}\r\n\r\n.topbar-menu {\r\n  display: inline-block;\r\n  list-style-type: none;\r\n  float: right;\r\n  margin: 0 60px 0 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.topbar-menu > li {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\n.topbar-menu > li > a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /*-webkit-transition: background-color .3s;*/\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n  min-width: 120px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  /*-webkit-box-sizing: border-box;*/\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: 100%;\r\n  line-height: 70px;\r\n}\r\n\r\n.topbar-menu > li > a:hover {\r\n  background-color: #4a4f52;\r\n}\r\n\r\n/*a:hover {*/\r\n\r\n/*color: red !important;*/\r\n\r\n/*background-color: white;*/\r\n\r\n/*}*/\r\n\r\n.topbar-menu > li.topbar-menu-themes {\r\n  position: relative;\r\n}\r\n\r\n.topbar-menu > li {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\na:-webkit-any-link {\r\n  color: -webkit-link;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*END TOPBAR CSS*/\r\n\r\n/*SIDEBAR CSS*/\r\n\r\n#layout-sidebar .layout-menu > a.active-menuitem img.layout-menu-icon-active {\r\n  display: inline;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a.active-menuitem img.layout-menu-icon-inactive {\r\n  display: none;\r\n}\r\n\r\n#layout-sidebar .layout-menu {\r\n  overflow-y: auto;\r\n  width: 300px;\r\n}\r\n\r\n#layout-sidebar {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 70px;\r\n  height: calc(100% - 70px);\r\n  background-color: #fff;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  width: 300px;\r\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n#layout-sidebar .layout-menu > a {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: block;\r\n  padding: 15px 0 0 25px;\r\n  cursor: pointer;\r\n  border-top: 1px solid #e3e9ea;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a:hover {\r\n  background-color: #eee;\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img.layout-menu-icon-active {\r\n  display: none;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img.layout-menu-icon-inactive {\r\n  display: inline;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a img {\r\n  width: 20px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n#layout-sidebar .layout-menu > a span {\r\n  color: #6d7879;\r\n  font-size: 16px;\r\n  margin: 0 0 0 30px;\r\n  display: block;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div {\r\n  padding: 20px 15px;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div a {\r\n  width: 50%;\r\n  float: left;\r\n  padding: 6px;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  -webkit-border-radius: 4px;\r\n  font-size: 14px;\r\n  color: #6d7879;\r\n}\r\n\r\n#layout-sidebar .layout-menu > div a:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n.layout-mask {\r\n  z-index: 9998;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 0;\r\n  display: none;\r\n  background-color: #4c5254;\r\n  opacity: .7;\r\n}\r\n\r\n/*SUBMENU SHOWHIDE*/\r\n\r\n#layout-sidebar .layout-menu > div.submenuhide {\r\n  overflow: hidden;\r\n  max-height: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  -webkit-transition-duration: .3s;\r\n  transition-duration: .3s;\r\n  -webkit-transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n}\r\n\r\n#layout-sidebar .layout-menu > div.submenushow {\r\n  -webkit-transition-duration: .3s;\r\n  transition-duration: .3s;\r\n  -webkit-transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  transition-timing-function: cubic-bezier(.86, 0, .07, 1);\r\n  max-height: 500px;\r\n}\r\n\r\n/*END SUBMENUSHOWHIDE*/\r\n\r\n/*END SIDEBAR CSS*/\r\n\r\n/*LAYOUT-CONTENT*/\r\n\r\n#layout-content {\r\n  margin-left: 300px;\r\n  padding-top: 70px;\r\n  background-color: #fff;\r\n}\r\n\r\n.home .introduction {\r\n  background: url(https://www.primefaces.org/primeng/introduction.48b4d5d99dc447de12a8.jpg) 0 0/cover no-repeat;\r\n  color: #fff;\r\n  padding: 80px 30px 80px 50px;\r\n}\r\n\r\n.home .introduction h1 {\r\n  font-weight: 400;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.home .introduction h2 {\r\n  font-weight: 700;\r\n  margin-bottom: 40px;\r\n  margin-top: 0;\r\n}\r\n\r\n.home-button {\r\n  font-weight: 700;\r\n  background-color: #fbd17b;\r\n  color: #b27800 !important;\r\n  padding: 8px 14px 8px 14px;\r\n  /*padding-right: 14px;*/\r\n  /*padding-left: 14px;*/\r\n  border-radius: 3px;\r\n  -webkit-transition: background-color .3s;\r\n  transition: background-color .3s;\r\n  display: inline-block;\r\n  min-width: 120px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\nh1 {\r\n  font-size: 32px;\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n}\r\n\r\n.home .features {\r\n  background-color: #f5f7f8;\r\n  text-align: center;\r\n  padding: 30px;\r\n}\r\n\r\n.home .features h3 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home h3 {\r\n  font-size: 1.5em;\r\n}\r\n\r\nh3 {\r\n  display: block;\r\n  font-size: 1.17em;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.features > p > a:hover {\r\n  color: rgb(0, 0, 238) !important;\r\n}\r\n\r\n.ui-g {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.home .features img {\r\n  width: 57px;\r\n}\r\n\r\n.home .features .ui-g > div {\r\n  padding: .5em 2em;\r\n}\r\n\r\n.home .features .feature-name {\r\n  display: block;\r\n  font-size: 18px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.home .features .ui-g p {\r\n  color: #535d62;\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.home p {\r\n  line-height: 1.5;\r\n}\r\n\r\n/*END-LAYOUT-CONTENT*/\r\n\r\n/*MEDIA*/\r\n\r\n@media screen and (max-width: 768px) {\r\n  #layout-topbar .menu-button {\r\n    display: inline-block !important;\r\n  }\r\n\r\n  #layout-topbar .logo {\r\n    margin: 7px 0;\r\n  }\r\n\r\n  .topbar-menu {\r\n    background-color: #363c3f;\r\n    float: none;\r\n    width: 100%;\r\n    height: 44px;\r\n    margin: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  #layout-sidebar.active {\r\n    left: 0;\r\n  }\r\n\r\n  #layout-sidebar {\r\n    top: 100px;\r\n    left: -300px;\r\n    -webkit-transition: left .3s;\r\n    transition: left .3s;\r\n    z-index: 9999;\r\n  }\r\n\r\n  #layout-content {\r\n    margin-left: 0;\r\n    padding-top: 100px;\r\n  }\r\n\r\n  #layout-topbar {\r\n    text-align: center;\r\n  }\r\n\r\n  .topbar-menu > li > a {\r\n    padding-bottom: 0;\r\n    line-height: 40px;\r\n    min-width: 100px;\r\n  }\r\n\r\n  .layout-mask {\r\n    display: block;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"layout-wrapper\">\n  <div id=\"layout-topbar\">\n    <a class=\"menu-button\"  (click)=\"activeMenuButtonClick()\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n    <a class=\"logo\" href=\"#\">\n      <img class=\"ng-tns-c0-0\" alt=\"logo\" src=\"assets/showcase/images/logo.png\">\n    </a>\n    <ul class=\"topbar-menu\">\n      <li class=\"ng-tns-c0-0\">\n        <a class=\"ng-tns-c0-0\" href=\"#/setup\">GET STARTED</a>\n      </li>\n      <li class=\"topbar-menu-themes\">\n        <a class=\"ng-tns-c0-0\" href=\"#/\">THEMES</a>\n      </li>\n      <li class=\"ng-tns-c0-0\">\n        <a class=\"ng-tns-c0-0\" href=\"#/support\">SUPPORT</a>\n      </li>\n    </ul>\n  </div>\n  <div id=\"layout-sidebar\" [ngClass]=\"{'active': isActiveMenuButton}\">\n    <div class=\"layout-menu\">\n      <a id=\"menu_input\" [ngClass]=\"{'active-menuitem': isActiveInput}\" (click)=\"activeClick()\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/input-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/input.svg\">\n        <span>Input</span>\n      </a>\n      <div [ngClass]=\"{'submenushow': isActiveInput , 'submenuhide': !isActiveInput}\">\n        <a í (click)=\"toLogin()\">● InputGroup</a>\n        <a href=\"#/autocomplete\">● AutoComplete</a>\n        <a href=\"#/calendar\">● Calendar</a>\n        <a href=\"#/checkbox\">● Checkbox</a>\n        <a href=\"#/chips\">● Chips</a>\n        <a href=\"#/colorpicker\">● ColorPicker</a>\n        <a href=\"#/dropdown\">● Dropdown</a>\n        <a href=\"#/editor\">● Editor</a>\n        <a href=\"#/keyfilter\">● KeyFilter </a>\n        <a href=\"#/inputswitch\">● InputSwitch</a>\n        <a href=\"#/inputtext\">● InputText</a>\n        <a href=\"#/inputtextarea\">● InputTextArea</a>\n        <a href=\"#/listbox\">● Listbox</a>\n        <a href=\"#/inputmask\">● Mask</a>\n        <a href=\"#/multiselect\">● MultiSelect</a>\n        <a href=\"#/password\">● Password</a>\n        <a href=\"#/radiobutton\">● RadioButton</a>\n        <a href=\"#/rating\">● Rating</a>\n        <a href=\"#/slider\">● Slider</a>\n        <a href=\"#/spinner\">● Spinner</a>\n        <a href=\"#/selectbutton\">● SelectButton</a>\n        <a href=\"#/togglebutton\">● ToggleButton</a>\n        <a href=\"#/tristatecheckbox\">● TriCheckbox</a>\n      </div>\n      <a id=\"button-menutitle\" [ngClass]=\"{'active-menuitem': isActiveButton}\" (click)=\"activeButtonClick()\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/button-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/button.svg\">\n        <span>Button</span>\n      </a>\n      <div [ngClass]=\"{'submenushow': isActiveButton , 'submenuhide': !isActiveButton}\">\n        <a href=\"#/button\">● Button</a>\n        <a href=\"#/splitbutton\">● SplitButton</a>\n      </div>\n      <a class=\"ng-tns-c0-0\" id=\"data_menutitle\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/data-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/data.svg\">\n        <span class=\"ng-tns-c0-0\">Data</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_panel\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/panel-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/panel.svg\">\n        <span>Panel</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_overlay\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/overlay-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/overlay.svg\">\n        <span>Overlay</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_file\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/file-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/file.svg\">\n        <span>File</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_menu\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/menu-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/menu.svg\">\n        <span>Menu</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_chart\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/charts-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/charts.svg\">\n        <span>Charts</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_messages\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/message-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/message.svg\">\n        <span>Messages</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_multimedia\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/multimedia-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/multimedia.svg\">\n        <span>Multimedia</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_dnd\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/dragdrop-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/dragdrop.svg\">\n        <span>DragDrop</span>\n      </a>\n      <a class=\"ng-tns-c0-0\" id=\"menu_misc\">\n        <img class=\"layout-menu-icon-active\" src=\"assets/showcase/images/icons/misc-active.svg\">\n        <img class=\"layout-menu-icon-inactive\" src=\"assets/showcase/images/icons/misc.svg\">\n        <span>Misc</span>\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"isActiveMenuButton == true\" class=\"layout-mask ng-tns-c0-0 ng-star-inserted\">\n  </div>\n  <div id=\"layout-content\">\n    <div>\n      <router-outlet>\n\n      </router-outlet>\n    </div>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
        this.isActiveInput = false;
        this.isActiveMenuButton = false;
        this.isActiveButton = false;
    }
    HomepageComponent.prototype.activeClick = function () {
        this.isActiveInput = !this.isActiveInput;
    };
    HomepageComponent.prototype.activeButtonClick = function () {
        this.isActiveButton = !this.isActiveButton;
    };
    HomepageComponent.prototype.activeMenuButtonClick = function () {
        this.isActiveMenuButton = !this.isActiveMenuButton;
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.toLogin = function () {
        this.router.navigate(['/home/login']);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_routing__ = __webpack_require__("./src/app/homepage/homepage.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__homepage_routing__["a" /* routing */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__homepage_component__["a" /* HomepageComponent */],
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");




var routes = [{
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__homepage_component__["a" /* HomepageComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
            },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form (submit)=\"loginUser($event)\">-->\n<!--<div class=\"input\">-->\n<!--<label>Username</label>-->\n<!--<input type=\"text\" placeholder=\"Username\">-->\n<!--</div>-->\n<!--<div class=\"input\">-->\n<!--<label>Password</label>-->\n<!--<input type=\"password\" placeholder=\"Password\">-->\n<!--</div>-->\n<!--<div class=\"input\">-->\n<!--<button type=\"submit\">Login</button>-->\n<!--</div>-->\n<!--</form>-->\n<div id=\"body\" class=\"container\">\n  <div class=\"row\" id=\"row1\">\n    <div class=\"form-group col-xs-6\">\n      <div class=\"input-group\"><span class=\" input-group-addon\"\n                                     style=\"background-color:#5cb85c;border-color: #4cae4c;color: #fff;\">Video</span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Please insert your link\" [(ngModel)]=\"linkUrl\"/>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor='let actions of listactions; let i = index'>\n    <div class=\"col-xs-3 no-padding form-inline\">\n            <span class=\"span\">\n                <label>Step {{i+1}}:</label>\n            </span>\n      <select class=\"form-control\" [(ngModel)]=\"actions.type\">\n        <option *ngFor=\"let type of types\">{{type}}</option>\n      </select>\n    </div>\n    <div class=\"col-xs-3 no-padding form-inline\" *ngIf=\"actions.type == 'Add video' || actions.type == 'Add audio'\">\n            <span class=\"span\">\n                <label>File:</label>\n            </span>\n      <select class=\"form-control\" [(ngModel)]=\"actions.file\">\n        <option *ngFor=\"let file of files\">{{file}}</option>\n      </select>\n    </div>\n    <div class=\"col-xs-3 no-padding form-inline\">\n            <span class=\"span\">\n                <label>From:</label>\n            </span>\n      <input class=\"form-control start\" [(ngModel)]=\"actions.start\" type=\"text\" placeholder=\"00:00\"/>\n    </div>\n    <div class=\"col-xs-3 no-padding form-inline\">\n            <span class=\"span\">\n                <label>To:</label>\n            </span>\n      <input class=\"form-control end\" [(ngModel)]=\"actions.end\" type=\"text\" placeholder=\"00:00\"/>\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-remove\" style=\"margin-left:10px\" (click)=\"removeStep(i)\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div *ngIf=\"error\" class=\"error-message col-xs-6\">wrong time format ! please fill again\n    </div>\n    <!--<div id=\"loader\"  class=\"loader \"></div>-->\n    <div class=\"cssload-loader hidden\" id=\"loader\"></div>\n  </div>\n  <!--<input  type=\"button\" *ngIf=\"this.n<5\" (click)=\"addStep(i)\" value=\"Add Step\"/ >-->\n  <button type=\"button\" class=\"btn btn-success  \" id=\"buttonAdd\" *ngIf=\"this.n<4\" (click)=\"addStep(i)\">Add Step\n    <span class=\"glyphicon glyphicon-plus\"></span>\n  </button>\n  <input type=\"submit\" class=\"btn btn-success \" (click)=\"submit()\" value=\"Submit\"/>\n  <div class=\"row\">\n    <div class=\" no-padding form-inline\">\n      <span>Your Result <a target=\"_blank\" href=\"{{resultVideo}}\">{{resultVideo}}</a></span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos__ = __webpack_require__("./src/app/login/videos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./src/app/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService) {
        this.appService = appService;
        this.i = 0;
        this.linkUrl = 'https://media.frequency.com/UC6zPzUJo8hu-5TzUk8IEC2Q/Zefh3FjYMqs.mp4';
        this.n = 0;
        this.types = ['cut', 'fadevideo', 'fadeaudio', 'Add video', 'Add audio'];
        this.files = ['fade1.mp3', 'fade2.mp3', 'endcard1.mp4', 'endcard2.mp4'];
        this.listactions = [];
        this.videos = new __WEBPACK_IMPORTED_MODULE_2__videos__["a" /* Video */]();
        this.resultVideo = '';
        this.error = false;
        this.pattern = new RegExp('[0-9]{2}:[0-5]{1}[0-9]{1}');
        this.body = {
            video: this.videos,
            actions: this.listactions
        };
        this.listactions.push(new __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* Action */]());
        this.listactions[0].type = 'cut';
    }
    // public  pattern= new RegExp("([0-5]?\d):");
    // public step = 1;
    LoginComponent.prototype.addStep = function (i) {
        this.listactions.push(new __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* Action */]());
        this.listactions[this.n].index = this.n + 1;
        this.n++;
    };
    LoginComponent.prototype.removeStep = function (i) {
        this.listactions.splice(i, 1);
    };
    LoginComponent.prototype.checkPattern = function (value) {
        console.log(this.pattern.test(value));
        return this.pattern.test(value);
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        // this.body.video = this.videos;
        this.videos.link = this.linkUrl;
        // console.log(this.body);
        this.error = true;
        for (var i = 0; i < this.listactions.length; i++) {
            if (!this.checkPattern(this.listactions[i].start)) {
                // alert("Step: "+(i+1)+", From time wrong format, please check again");
                document.getElementsByClassName('start')[i].classList.add('error');
                // console.log(document.getElementsByClassName("start")[i]);
                this.error = true;
                return;
            }
            else {
                document.getElementsByClassName('start')[i].classList.remove('error');
                this.error = false;
            }
            if (!this.checkPattern(this.listactions[i].end)) {
                // alert("Step: "+(i+1)+", End time wrong format, please check again");
                document.getElementsByClassName('end')[i].classList.add('error');
                this.error = true;
                return;
            }
            else {
                document.getElementsByClassName('end')[i].classList.remove('error');
                this.error = false;
            }
        }
        // document.getElementById("body").classList.add("hidden");
        document.getElementById('loader').classList.remove('hidden');
        var res = this.appService.submitData('text', this.body);
        res.subscribe(function (result) {
            console.log('response: ' + result);
            _this.error = false;
            alert('Success');
            _this.resultVideo = result;
            // document.getElementById("body").classList.remove("hidden");
            document.getElementById('loader').classList.add('hidden');
        });
        // console.log(this.body);
        // console.log(res);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_app_service__["a" /* AppService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/videos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = /** @class */ (function () {
    function Video() {
        this.link = '';
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "#topbar {\r\n  background-color: #363c3f;\r\n  line-height: 60px;\r\n}\r\n\r\n#topbar-left {\r\n  color: red;\r\n  font-size: 15px;\r\n}\r\n\r\n#topbar-left ul > li {\r\n  margin-right: 15px;\r\n}\r\n\r\n#topbar-left ul > li > i {\r\n  padding-right: 5px;\r\n}\r\n\r\n#topbar-right {\r\n  color: red;\r\n  font-size: 21px;\r\n  float: right;\r\n}\r\n\r\n#topbar-right > ul > li {\r\n  margin-right: 25px;\r\n}\r\n\r\n.site-menu {\r\n  line-height: 40px;\r\n}\r\n\r\nul.menu > li > a {\r\n  font-family: 'Montserrat', sans-serif;\r\n  display: block;\r\n  float: left;\r\n  position: relative;\r\n  padding: 9px 19px;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  color: #222;\r\n  text-transform: uppercase;\r\n}\r\n\r\nul.menu > li.active > a {\r\n  color: red;\r\n}\r\n\r\n.extra-menu-item > a {\r\n  float: right;\r\n  color: white;\r\n}\r\n\r\n/*a {*/\r\n\r\n/*font-family: 'Montserrat', sans-serif;*/\r\n\r\n/*}*/\r\n\r\n#header-main {\r\n  /*background-color: #4cae4c;*/\r\n  /*line-height: 250px;*/\r\n  padding: 26px 0;\r\n}\r\n\r\n#logo1 {\r\n  height: auto;\r\n  max-width: 270px;\r\n}\r\n\r\nul > li {\r\n  float: left;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n  font-weight: 600;\r\n}\r\n\r\n.welcome-section h2 {\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n}\r\n\r\n.flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  background-color: DodgerBlue;\r\n}\r\n\r\n.service-item {\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .2);\r\n          box-shadow: 0 0 3px rgba(0, 0, 0, .2);\r\n}\r\n\r\n.special-services {\r\n  width: 100vw;\r\n  height: 500px;\r\n  background-color: #0c1239;\r\n}\r\n\r\n.special-title {\r\n  padding-top: 90px;\r\n}\r\n\r\n.title {\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 36px;\r\n}\r\n\r\n.warrenty {\r\n  display: table-cell;\r\n  border: 1px solid;\r\n  padding: 25px 20px;\r\n}\r\n\r\n.wholesale {\r\n  display: table-cell;\r\n  border: 1px solid;\r\n  padding: 25px 20px;\r\n  height: 205px;\r\n}\r\n\r\n.col-container {\r\n  display: table;\r\n  width: 100%;\r\n}\r\n\r\n.col {\r\n  display: table-cell;\r\n  padding: 16px;\r\n}\r\n\r\n.quote {\r\n  color: white;\r\n  font-size: 20px;\r\n  padding-left: 25px;\r\n  border-left: 2px solid red;\r\n}\r\n\r\n.services {\r\n  padding-top: 50px;\r\n  color: white;\r\n  display: table;\r\n}\r\n\r\n.plane {\r\n  font-size: 90px;\r\n  color: red;\r\n}\r\n\r\n.homepage {\r\n  color: red;\r\n}\r\n\r\n.menu {\r\n  list-style: none;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n  <div id=\"topbar\">\r\n    <div class=\"container\">\r\n      <div id=\"topbar-left\">\r\n        <ul>\r\n          <li><i class=\"fa fa-globe\"></i>Văn phòng Hà Nội</li>\r\n          <li><i class=\"fa fa-phone\"></i>Hotline +84123123123</li>\r\n          <li><i class=\"fa fa-envelope\"></i>hello@jvship.com</li>\r\n          <li><i class=\"fa fa-map-marker\"></i>Hai Bà Trưng</li>\r\n        </ul>\r\n      </div>\r\n      <div id=\"topbar-right\">\r\n        <ul>\r\n          <li><i class=\"fa fa-facebook\"></i></li>\r\n          <li><i class=\"fa fa-twitter\"></i></li>\r\n          <li><i class=\"fa fa-skype\"></i></li>\r\n          <li><i class=\"fa fa-youtube\"></i></li>\r\n          <li><i class=\"fa fa-search\"></i></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <header>\r\n    <div id=\"header-main\">\r\n      <div class=\"container\">\r\n        <div class=\"site-logo col-md-3\">\r\n          <img id=\"logo1\" src=\"/../../assets/images/logo.png\">\r\n        </div>\r\n        <div class=\"site-menu col-md-9\">\r\n          <ul class=\"menu\">\r\n            <li class=\"active\">\r\n              <a>TRANG CHỦ<i class=\"fa fa-angle-down\"></i></a>\r\n            </li>\r\n            <li><a>DỊCH VỤ</a></li>\r\n            <li><a>HỎI ĐÁP</a></li>\r\n            <li><a>LIÊN HỆ</a></li>\r\n            <li class=\"extra-menu-item\"><a href=\"/bookship\" class=\"btn btn-danger\" style=\"margin-right: 10px\">Gửi\r\n              hàng</a></li>\r\n            <li class=\"extra-menu-item\"><a href=\"/bookship\" class=\"btn btn-danger\" style=\"margin-right: 10px\">Đặt\r\n              hàng</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"intro-part\" id=\"home\" style=\"height:600px;width: 100vw;position: relative\">\r\n    <div class=\"mbYTP_wrapper\" id=\"wrapper_YTP_1526786869723\"\r\n         style=\"position: absolute; z-index: 0; min-width: 100%; min-height: 100%; left: 0px; top: 0px; overflow: hidden; opacity: 1; transition-property: opacity; transition-duration: 2000ms;\">\r\n      <iframe id=\"myVideo\" class=\"playerBox\"\r\n              style=\"position: absolute; z-index: 0; width: 1920px; height: 1080px; top: 0px; left: 0px; overflow: hidden; opacity: 1; user-select: none; margin-top: -150px; margin-left: 0px; max-width: initial; transition-property: opacity; transition-duration: 1000ms;\"\r\n              frameborder=\"0\" allowfullscreen=\"1\" allow=\"autoplay; encrypted-media\" title=\"YouTube video player\"\r\n              width=\"640\" height=\"360\"\r\n              src=\"https://www.youtube.com/embed/hk6iTo0t13o?modestbranding=1&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1526786869723&amp;origin=http%3A%2F%2Fjvship.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;playsinline=1&amp;mute=1&amp;html5=1&amp;widgetid=1\"\r\n              unselectable=\"on\"></iframe>\r\n      <div class=\"YTPOverlay\" style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"welcome-section\">\r\n    <div class=\"container text-center \">\r\n      <h2 class=\"underline\">GIỚI THIỆU về jv<span class=\"red\">SHIP</span></h2>\r\n      <p>ABCABACBACBACBACB</p>\r\n      <div class=\"webservices row\">\r\n        <div class=\"col-md-4 outer-service-item\">\r\n          <div class=\"service-item\">\r\n            <i class=\"fa fa-plane plane\"></i>\r\n            <p>Đường hàng không</p>\r\n            <p>Nhanh chóng 5-7 ngày, phù hợp với các mặt hàng nhỏ, gọn, nhẹ. Một số hàng hóa không được phép gửi.</p>\r\n            <a class=\"btn-danger\">Đặt Gửi Hàng</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 outer-service-item\">\r\n          <div class=\"service-item\">\r\n            <i class=\"fa fa-plane plane\"></i>\r\n            <p>Đường hàng không</p>\r\n            <p>Nhanh chóng 5-7 ngày, phù hợp với các mặt hàng nhỏ, gọn, nhẹ. Một số hàng hóa không được phép gửi.</p>\r\n            <a class=\"btn-danger\">Đặt Gửi Hàng</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 outer-service-item\">\r\n          <div class=\"service-item\">\r\n            <i class=\"fa fa-plane plane\"></i>\r\n            <p>Đường hàng không</p>\r\n            <p>Nhanh chóng 5-7 ngày, phù hợp với các mặt hàng nhỏ, gọn, nhẹ. Một số hàng hóa không được phép gửi.</p>\r\n            <a class=\"btn-danger\">Đặt Gửi Hàng</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"special-services\">\r\n    <div class=\"container\">\r\n      <div class=\"special-title row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"title\">Những dịch vụ đặc biệt</div>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div class=\"quote\">Bên cạnh việc vận chuyển hàng truyền thống. JVSHIP đồng thời cung cấp những tiện ích đi kèm\r\n            để giúp cho cá nhân và doanh nghiệp thuận tiện hơn trong việc giao thương giữa Nhật Bản và Việt Nam.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"services row\">\r\n        <div class=\"col-container\">\r\n          <div class=\"col-md-6 col-sm-12 col\">\r\n            <div class=\"warrenty\">\r\n              <div class=\"warrenty-title\"><h4>Bảo Hiểm</h4></div>\r\n              <p>Nhằm đảm bảo quyền lợi trong trường hợp bưu gửi mất mát, hư hỏng hoặc bị tráo đổi, chúng\r\n                tôi cung cấp đến bạn dịch vụ Khai Giá – Bảo Hiểm Hàng Gửi. Đây là dịch vụ bắt buộc, nhằm\r\n                mục giảm thiểu rủi ro trong quá trình giao nhận.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 col\">\r\n            <div class=\"wholesale\">\r\n              <div class=\"wholesale-title\"><h4>Buôn hàng sỉ</h4></div>\r\n              <p>Nhằm giải quyết các vấn đề khó khăn trong vận chuyển hàng cho các đối tượng khách hàng\r\n                hoạt động trong lĩnh vưc kinh doanh, chúng tôi sẽ đưa ra mức giá ưu đãi cho giúp quý\r\n                khách hàng.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "#toggle-sidebar {\r\n  font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.wrapper {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n  min-width: 250px;\r\n  max-width: 250px;\r\n  min-height: 100vh;\r\n}\r\n\r\n#sidebar.active {\r\n  margin-left: -250px;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n  content: '\\e259';\r\n  display: block;\r\n  position: absolute;\r\n  right: 20px;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-size: 0.6em;\r\n}\r\n\r\na[aria-expanded=\"true\"]::before {\r\n  content: '\\e260';\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #sidebar {\r\n    margin-left: -250px;\r\n  }\r\n\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #7386D5;\r\n}\r\n\r\na.article, a.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n#content {\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <nav id=\"sidebar\">\r\n    <!-- Sidebar Header -->\r\n    <div class=\"sidebar-header\">\r\n      <h3 style=\"font-family: 'Poppins', sans-serif\">Bootstrap Sidebar</h3>\r\n    </div>\r\n\r\n    <!-- Sidebar Links -->\r\n    <ul class=\"list-unstyled components\">\r\n      <p>Dummy Heading</p>\r\n      <li class=\"active\"><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">About</a></li>\r\n      <li><!-- Link with dropdown items -->\r\n        <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Pages</a>\r\n        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n          <li><a href=\"#\">Page</a></li>\r\n          <li><a href=\"#\">Page</a></li>\r\n          <li><a href=\"#\">Page</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Portfolio</a></li>\r\n      <li><a href=\"#\">Contact</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div id=\"content\">\r\n    <nav class=\"navbar navbar-default\">\r\n      <div class=\"container-fluid\">\r\n\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\">\r\n            <i class=\"glyphicon glyphicon-align-left\"></i>\r\n            <span id=\"toggle-sidebar\">Toggle Sidebar</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a routerLink=\"/login\">Login</a></li>\r\n            <li><a routerLink=\"/admin\">Go to admin</a></li>\r\n            <li><a href=\"#\">Page</a></li>\r\n            <li><a href=\"#\">Page</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n    <h2>Collapsible Sidebar Using Bootstrap 3</h2>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\r\n    <div class=\"line\"></div>\r\n\r\n    <h2>Lorem Ipsum Dolor</h2>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\r\n    <div class=\"line\"></div>\r\n\r\n    <h2>Lorem Ipsum Dolor</h2>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\r\n    <div class=\"line\"></div>\r\n\r\n    <h3>Lorem Ipsum Dolor</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(http) {
        this.http = http;
        this.apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
        this.data = {};
        this.getData();
        this.getContacts();
    }
    SidebarComponent.prototype.getData = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    SidebarComponent.prototype.getContacts = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map