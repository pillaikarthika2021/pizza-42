(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/bhartiyashesh/Documents/demoprojx/pizza42/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/loading/loading.component */
      "qQYQ");
      /* harmony import */


      var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/hero/hero.component */
      "Qbzz");
      /* harmony import */


      var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/home-content/home-content.component */
      "RvBo");

      function HomeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-content");
        }
      }

      var HomeComponent = function HomeComponent(auth) {
        _classCallCheck(this, HomeComponent);

        this.auth = auth;
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 4,
        vars: 4,
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "container"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.auth.isLoading$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"], _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_5__["HomeContentComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../auth_config.json */
      "gWCv");

      var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../auth_config.json */
      "gWCv", 1); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var domain = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.domain,
          clientId = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.clientId,
          audience = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.audience,
          apiUri = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.apiUri,
          errorPath = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.errorPath;
      var environment = {
        production: false,
        auth: Object.assign(Object.assign({
          domain: domain,
          clientId: clientId
        }, audience && audience !== 'YOUR_API_IDENTIFIER' ? {
          audience: audience
        } : null), {
          redirectUri: window.location.origin,
          errorPath: errorPath
        }),
        httpInterceptor: {
          allowedList: ["".concat(apiUri, "/*")]
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "bg-light", "p-3", "text-center"], [1, "logo"], ["href", "https://www.youtube.com/watch?v=ez6eauLcOuc"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "pizza42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Qbzz":
    /*!***************************************************!*\
      !*** ./src/app/components/hero/hero.component.ts ***!
      \***************************************************/

    /*! exports provided: HeroComponent */

    /***/
    function Qbzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
        return HeroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeroComponent = /*#__PURE__*/function () {
        function HeroComponent() {
          _classCallCheck(this, HeroComponent);
        }

        _createClass(HeroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeroComponent;
      }();

      HeroComponent.ɵfac = function HeroComponent_Factory(t) {
        return new (t || HeroComponent)();
      };

      HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroComponent,
        selectors: [["app-hero"]],
        decls: 12,
        vars: 0,
        consts: [[1, "position-relative", "overflow-hidden", "text-center", "bg-light"], [1, "col-md-12", "p-lg-12", "mx-auto", "my-12"], ["src", "https://i.ibb.co/4T96D1d/logopizza42.png", "alt", "Pizza42", 1, "mb-12", "app-logo"], [1, "lead"], ["href", "https://www.youtube.com/watch?v=ez6eauLcOuc"], [1, "product-device", "box-shadow", "d-none", "d-md-block"], [1, "product-device", "product-device-2", "box-shadow", "d-none", "d-md-block"]],
        template: function HeroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " (Answer to life universe and everything) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Go change the world and let Robos make your Pizza ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".hero[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  max-width: 10.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyAuYXBwLWxvZ28ge1xuICBtYXgtd2lkdGg6IDEwLjVyZW07XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "RvBo":
    /*!*******************************************************************!*\
      !*** ./src/app/components/home-content/home-content.component.ts ***!
      \*******************************************************************/

    /*! exports provided: HomeContentComponent */

    /***/
    function RvBo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function () {
        return HomeContentComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api.service */
      "yTNM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          show: a0
        };
      };

      function HomeContentComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \uD83C\uDF89 Your Order has been Successfully Placed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !!ctx_r0.responseJson));
        }
      }

      function HomeContentComponent_p_13_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_13_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.order("Spirit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_13_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.allData.email_verified);
        }
      }

      function HomeContentComponent_p_23_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_23_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.order("Opportunity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_23_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.order("Opportunity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_23_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.allData.email_verified);
        }
      }

      function HomeContentComponent_p_33_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_33_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r16.order("X \xC6 A-Xii");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_33_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.allData.email_verified);
        }
      }

      function HomeContentComponent_p_44_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_44_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r19.order("Wall-E");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_44_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.allData.email_verified);
        }
      }

      function HomeContentComponent_p_54_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_54_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r22.order("R2D2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_54_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.allData.email_verified);
        }
      }

      function HomeContentComponent_p_64_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeContentComponent_p_64_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r25.order("Benders Special");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeContentComponent_p_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeContentComponent_p_64_a_1_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.allData.email_verified);
        }
      }

      var HomeContentComponent = /*#__PURE__*/function () {
        function HomeContentComponent(auth, api, configFactory) {
          _classCallCheck(this, HomeContentComponent);

          var _a;

          this.auth = auth;
          this.api = api;
          this.configFactory = configFactory;
          this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLink"];
          this.profileJson = null;
          this.allData = null;
          this.audience = (_a = this.configFactory.get()) === null || _a === void 0 ? void 0 : _a.audience;
          this.hasApiError = false;
        }

        _createClass(HomeContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.auth.user$.subscribe(function (profile) {
              return _this.profileJson = JSON.stringify(profile, null, 2), _this.allData = JSON.parse(_this.profileJson);
            });
          }
        }, {
          key: "pingApi",
          value: function pingApi() {
            var _this2 = this;

            this.api.ping$().subscribe({
              next: function next(res) {
                _this2.hasApiError = false;
                _this2.responseJson = JSON.stringify(res, null, 2).trim();
              },
              error: function error() {
                return _this2.hasApiError = true;
              }
            });
          }
        }, {
          key: "order",
          value: function order(pizzaname) {
            var _this3 = this;

            this.api.placeOrder$(pizzaname).subscribe({
              next: function next(res) {
                _this3.hasApiError = false;
                _this3.responseJson = JSON.stringify(res, null, 2).trim();
              },
              error: function error() {
                return _this3.hasApiError = true;
              }
            });
          }
        }]);

        return HomeContentComponent;
      }();

      HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) {
        return new (t || HomeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthClientConfig"]));
      };

      HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeContentComponent,
        selectors: [["app-home-content"]],
        decls: 66,
        vars: 19,
        consts: [[1, "next-steps", "my-5"], [1, "my-5", "text-center"], ["class", "result-block-container", 4, "ngIf"], [1, "row"], [1, "col-md-4", "mb-4"], [1, "thumbnail"], ["src", "https://cache.dominos.com/olo/6_56_1/assets/build/market/US/_en/images/img/products/larges/S_PZTACO.jpg", "alt", "300x200", 1, "img-thumbnail", 2, "width", "300px", "height", "200px"], [1, "caption"], [4, "ngIf"], [3, "click", 4, "ngIf"], ["src", "https://cache.dominos.com/olo/6_56_1/assets/build/market/US/_en/images/img/products/larges/S_PISPF.jpg", "alt", "300x200", 1, "img-thumbnail", 2, "width", "300px", "height", "200px"], ["src", "https://cache.dominos.com/olo/6_56_1/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg", "alt", "300x200", 1, "img-thumbnail", 2, "width", "300px", "height", "200px"], ["src", "https://cache.dominos.com/olo/6_56_1/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg", "alt", "300x200", 1, "img-thumbnail", 2, "width", "300px", "height", "200px"], [1, "result-block-container"], [1, "result-block", 3, "ngClass"], ["href", "#", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["href", "#", 1, "btn", "btn-danger"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [3, "click"]],
        template: function HomeContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "What can I Order?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeContentComponent_div_3_Template, 4, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Spirit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pepporoni");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeContentComponent_p_13_Template, 5, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Opportunity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tofu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HomeContentComponent_p_23_Template, 5, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "X \xC6 A-Xii");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Elon's Favourite Taco Flavored");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HomeContentComponent_p_33_Template, 5, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Wall-E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Martian Spinach and Feta");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HomeContentComponent_p_44_Template, 5, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "R2D2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Beep Boop Cheese Steak");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, HomeContentComponent_p_54_Template, 5, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Bender's Special");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Buffalo Futurama");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, HomeContentComponent_p_64_Template, 5, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.responseJson);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 9, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 11, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 13, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 15, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 17, ctx.auth.isAuthenticated$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Auth0 Angular SDK Sample';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "d-flex", "flex-column", "h-100"], [1, "container", "flex-grow-1", "flex-shrink-1"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(auth) {
          _classCallCheck(this, ProfileComponent);

          this.auth = auth;
          this.profileJson = null;
          this.allData = null;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.auth.user$.subscribe(function (profile) {
              return _this4.profileJson = JSON.stringify(profile, null, 2), _this4.allData = JSON.parse(_this4.profileJson);
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 2,
        vars: 3,
        consts: [["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], [1, "row", "align-items-center", "profile-header", "mb-5", "text-center", "text-md-left"], [1, "col-md-2"], [1, "rounded-circle", "img-fluid", "profile-picture", "mb-3", "mb-md-0", 3, "src"], [1, "col-md"], [1, "lead", "text-muted"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 9, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".userImg[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  display: block;\n  height: 100px;\n  margin: 0 auto;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJJbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-highlightjs */
      "OtPg");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/error/error.component */
      "y+ua");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/hero/hero.component */
      "Qbzz");
      /* harmony import */


      var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/home-content/home-content.component */
      "RvBo");
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/loading/loading.component */
      "qQYQ");
      /* harmony import */


      var _pages_external_api_external_api_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/external-api/external-api.component */
      "h8vx");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
          useClass: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__["AuthHttpInterceptor"],
          multi: true
        }, {
          provide: Window,
          useValue: window
        }, {
          provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_OPTIONS"],
          useValue: {
            coreLibraryLoader: function coreLibraryLoader() {
              return __webpack_require__.e(
              /*! import() | highlight-js-lib-highlight */
              "highlight-js-lib-highlight").then(__webpack_require__.t.bind(null,
              /*! highlight.js/lib/highlight */
              "pw5m", 7));
            },
            languages: {
              json: function json() {
                return __webpack_require__.e(
                /*! import() | highlight-js-lib-languages-json */
                "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null,
                /*! highlight.js/lib/languages/json */
                "WtIr", 7));
              }
            }
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__["AuthModule"].forRoot(Object.assign(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].auth), {
          httpInterceptor: Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].httpInterceptor)
        }))]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__["HeroComponent"], _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_12__["HomeContentComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], _pages_external_api_external_api_component__WEBPACK_IMPORTED_MODULE_14__["ExternalApiComponent"], _pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__["AuthModule"]]
        });
      })();
      /***/

    },

    /***/
    "g/Dx":
    /*!*********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function gDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function NavBarComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Your Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_li_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.loginWithRedirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_li_17_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Log out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.ngIf;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", user_r7.picture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r7.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faPowerOff);
        }
      }

      function NavBarComponent_ul_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ul_19_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.loginWithRedirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_ul_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ul_21_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Log out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r12 = ctx.ngIf;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", user_r12.picture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r12.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faPowerOff);
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(auth, doc) {
          _classCallCheck(this, NavBarComponent);

          this.auth = auth;
          this.doc = doc;
          this.isCollapsed = true;
          this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
          this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPowerOff"];
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginWithRedirect",
          value: function loginWithRedirect() {
            this.auth.loginWithRedirect();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout({
              returnTo: this.doc.location.origin
            });
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 23,
        vars: 17,
        consts: [[1, "nav-container"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container"], [1, "navbar-brand"], ["src", "https://i.ibb.co/4T96D1d/logopizza42.png", "width", "30%"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-nav", "d-none", "d-md-block"], ["class", "nav-item dropdown", "ngbDropdown", "", 4, "ngIf"], ["class", "navbar-nav d-md-none", 4, "ngIf"], ["class", "navbar-nav d-md-none justify-content-between", "style", "min-height: 170px;", 4, "ngIf"], ["routerLink", "external-api", 1, "nav-link"], ["id", "qsLoginBtn", 1, "btn", "btn-primary", "btn-margin", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "id", "profileDropDown", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile picture", 1, "nav-user-profile", "rounded-circle", 2, "width", "75px", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-left"], [1, "dropdown-header"], ["routerLink", "/profile", 1, "dropdown-item", "dropdown-profile"], [1, "mr-3", 3, "icon"], ["id", "qsLogoutBtn", 1, "btn", "btn-link", "dropdown-item", 3, "click"], [1, "navbar-nav", "d-md-none"], ["id", "qsLoginBtn", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "navbar-nav", "d-md-none", "justify-content-between", 2, "min-height", "170px"], [1, "user-info"], ["alt", "Profile picture", 1, "nav-user-profile", "d-inline-block", "rounded-circle", "mr-3", 2, "width", "75px", 3, "src"], [1, "d-inline-block"], ["routerLink", "/profile"], ["id", "qsLogoutBtn", 1, "btn", "btn-link", "p-0", 3, "click"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_5_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavBarComponent_li_12_Template, 3, 0, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NavBarComponent_li_15_Template, 3, 0, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NavBarComponent_li_17_Template, 12, 4, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NavBarComponent_ul_19_Template, 3, 0, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, NavBarComponent_ul_21_Template, 14, 4, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 9, ctx.auth.isAuthenticated$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, ctx.auth.user$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 13, ctx.auth.isAuthenticated$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 15, ctx.auth.user$));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "gWCv":
    /*!**************************!*\
      !*** ./auth_config.json ***!
      \**************************/

    /*! exports provided: domain, clientId, audience, apiUri, appUri, errorPath, default */

    /***/
    function gWCv(module) {
      module.exports = JSON.parse("{\"domain\":\"pizza42-kp.us.auth0.com\",\"clientId\":\"12SDBoNLY41tSMof5eOUfbxXUkFDE47x\",\"audience\":\"https://karthika.express\",\"apiUri\":\"https://pizza.centralus.cloudapp.azure.com:3001\",\"appUri\":\"http://localhost:4200\",\"errorPath\":\"/error\"}");
      /***/
    },

    /***/
    "h8vx":
    /*!**************************************************************!*\
      !*** ./src/app/pages/external-api/external-api.component.ts ***!
      \**************************************************************/

    /*! exports provided: ExternalApiComponent */

    /***/
    function h8vx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalApiComponent", function () {
        return ExternalApiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api.service */
      "yTNM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ExternalApiComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExternalApiComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.userOrders();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Load Past Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.audience);
        }
      }

      function ExternalApiComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
        }
      }

      function ExternalApiComponent_h1_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No past orders, order now to make history ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          show: a0
        };
      };

      function ExternalApiComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83C\uDF89 Your Order has been Successfully Placed, Looks like you love this one!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !!ctx_r3.responseJson));
        }
      }

      function ExternalApiComponent_table_9_tr_9_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExternalApiComponent_table_9_tr_9_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var orderin_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.order(orderin_r8.pizza);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Again ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r9.audience);
        }
      }

      function ExternalApiComponent_table_9_tr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExternalApiComponent_table_9_tr_9_button_6_Template, 2, 1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var orderin_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderin_r8.pizza);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx_r7.auth.isAuthenticated$));
        }
      }

      function ExternalApiComponent_table_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExternalApiComponent_table_9_tr_9_Template, 8, 4, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.orders.user_metadata.orders);
        }
      }

      var ExternalApiComponent = /*#__PURE__*/function () {
        function ExternalApiComponent(auth, api, configFactory, http) {
          _classCallCheck(this, ExternalApiComponent);

          var _a;

          this.auth = auth;
          this.api = api;
          this.configFactory = configFactory;
          this.http = http;
          this.audience = (_a = this.configFactory.get()) === null || _a === void 0 ? void 0 : _a.audience;
          this.hasApiError = false;
        }

        _createClass(ExternalApiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.auth.user$.subscribe(function (profile) {
              return _this5.profileJson = JSON.stringify(profile, null, 2), _this5.allData = JSON.parse(_this5.profileJson);
            }); //  this.orders=this.userOrders();
            //  console.log(this.orders);
          }
        }, {
          key: "pingApi",
          value: function pingApi() {
            var _this6 = this;

            this.api.ping$().subscribe({
              next: function next(res) {
                _this6.hasApiError = false;
                _this6.responseJson = JSON.stringify(res, null, 2).trim();
              },
              error: function error() {
                return _this6.hasApiError = true;
              }
            });
          }
        }, {
          key: "order",
          value: function order(pizzaname) {
            var _this7 = this;

            this.api.placeOrder$(pizzaname).subscribe({
              next: function next(res) {
                _this7.hasApiError = false;
                _this7.responseJson = JSON.stringify(res, null, 2).trim();
              },
              error: function error() {
                return _this7.hasApiError = true;
              }
            });
          }
        }, {
          key: "userOrders",
          value: function userOrders() {
            var _this8 = this;

            console.log(this.allData.sub);
            this.http.get("https://pizza42-kp.us.auth0.com/api/v2/users/" + this.allData.sub, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRTbldOM1ZjTndwU0xkTnNiS0tCSiJ9.eyJpc3MiOiJodHRwczovL3BpenphNDIta3AudXMuYXV0aDAuY29tLyIsInN1YiI6Im05NEJVNlVYMGRTbjgwaFVZa1RSbG03UkFzZzNYSXFRQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3BpenphNDIta3AudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE2MjI5NTQwMDQsImV4cCI6MTYyNTU0NjAwNCwiYXpwIjoibTk0QlU2VVgwZFNuODBoVVlrVFJsbTdSQXNnM1hJcVEiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIHJlYWQ6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgZGVsZXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6aG9va3MgdXBkYXRlOmhvb2tzIGRlbGV0ZTpob29rcyBjcmVhdGU6aG9va3MgcmVhZDphY3Rpb25zIHVwZGF0ZTphY3Rpb25zIGRlbGV0ZTphY3Rpb25zIGNyZWF0ZTphY3Rpb25zIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6aW5zaWdodHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyB1cGRhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyB1cGRhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6bWZhX3BvbGljaWVzIHVwZGF0ZTptZmFfcG9saWNpZXMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgZGVsZXRlOnJvbGVzIHVwZGF0ZTpyb2xlcyByZWFkOnByb21wdHMgdXBkYXRlOnByb21wdHMgcmVhZDpicmFuZGluZyB1cGRhdGU6YnJhbmRpbmcgZGVsZXRlOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMgY3JlYXRlOnNpZ25pbmdfa2V5cyByZWFkOnNpZ25pbmdfa2V5cyB1cGRhdGU6c2lnbmluZ19rZXlzIHJlYWQ6bGltaXRzIHVwZGF0ZTpsaW1pdHMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIHJlYWQ6ZW50aXRsZW1lbnRzIHJlYWQ6YXR0YWNrX3Byb3RlY3Rpb24gdXBkYXRlOmF0dGFja19wcm90ZWN0aW9uIHJlYWQ6b3JnYW5pemF0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGNyZWF0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.d7tItSuEDaAs3cIp1VIFfdIIoUf8nMjjUkTcXEFZaHVDRWqoLPEUGysksmlj8bFVJf4cb__y7cKDYUVw9Iw5Rr_05KTuHy86iHzmWBTaI7yrxSJHM90E48UIv6GMe5bp_AkJdXdtvT01SD1Is-7JuvEB_aDnwVKmE4cR5nBHBTE5GvtEBqJgvocoZBuVcJUwywBPPE4wrqVcagmKzEWYxb5XL5hfgqkOWuQxFIUK5jh_alKTJ54w329jzBRYnYUZ3_z73Ibi7hGKqHWFFKvcTyB_ulRY5ZG9Fhw2UpMyYp3hTPzRHK--13lrMwmrPfZcnorPsnWrdoNPjsWIjAx9TA"
              }
            }).subscribe({
              next: function next(res) {
                console.log(res);
                _this8.orders = res;
              },
              error: function error() {
                return _this8.hasApiError = true;
              }
            });
            ;
          }
        }]);

        return ExternalApiComponent;
      }();

      ExternalApiComponent.ɵfac = function ExternalApiComponent_Factory(t) {
        return new (t || ExternalApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthClientConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ExternalApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExternalApiComponent,
        selectors: [["app-external-api"]],
        decls: 10,
        vars: 7,
        consts: [[1, "container", "mt-5"], ["class", "btn btn-primary mb-5", 3, "disabled", "click", 4, "ngIf"], [1, "row"], ["class", "col-md-4 mb-4", 4, "ngIf"], [4, "ngIf"], ["class", "result-block-container", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "btn", "btn-primary", "mb-5", 3, "disabled", "click"], [1, "col-md-4", "mb-4"], [1, "result-block-container"], [1, "result-block", 3, "ngClass"], [1, "muted"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["src", "https://i.ibb.co/4T96D1d/logopizza42.png", "width", "40px", "height", "40px"]],
        template: function ExternalApiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Past Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExternalApiComponent_button_3_Template, 2, 1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExternalApiComponent_div_6_Template, 1, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExternalApiComponent_h1_7_Template, 2, 0, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExternalApiComponent_div_8_Template, 4, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExternalApiComponent_table_9_Template, 10, 1, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.auth.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.user_metadata);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orders.user_metadata);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseJson);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.user_metadata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRlcm5hbC1hcGkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "qQYQ":
    /*!*********************************************************!*\
      !*** ./src/app/components/loading/loading.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function qQYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
        return new (t || LoadingComponent)();
      };

      LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingComponent,
        selectors: [["app-loading"]],
        decls: 2,
        vars: 0,
        consts: [[1, "loading"], ["src", "../../../assets/loading.svg", "alt", "Loading..."]],
        template: function LoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".loading[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 500px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_external_api_external_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/external-api/external-api.component */
      "h8vx");
      /* harmony import */


      var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/error/error.component */
      "y+ua");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'external-api',
        component: _pages_external_api_external_api_component__WEBPACK_IMPORTED_MODULE_3__["ExternalApiComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'error',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
      }, {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "y+ua":
    /*!************************************************!*\
      !*** ./src/app/pages/error/error.component.ts ***!
      \************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function yUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ErrorComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "An error was returned from Auth0");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Something went wrong when trying to authorize your application. Please inspect the error below and ensure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "auth_config.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " is configured correctly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var error_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", error_r1.error_description, " ");
        }
      }

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent(auth, router) {
          _classCallCheck(this, ErrorComponent);

          this.auth = auth;
          this.router = router;
          this.error$ = this.auth.error$;
        }

        _createClass(ErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.error$)).subscribe(function () {
              _this9.router.navigateByUrl('/');
            });
          }
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
        return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ErrorComponent,
        selectors: [["app-error"]],
        decls: 3,
        vars: 3,
        consts: [[1, "container", "mt-5"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ErrorComponent_ng_container_1_Template, 10, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.error$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../auth_config.json */
      "gWCv");

      var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../auth_config.json */
      "gWCv", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "ping$",
          value: function ping$() {
            console.log(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"]);
            return this.http.get("".concat(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"], "/api/external"));
          }
        }, {
          key: "placeOrder$",
          value: function placeOrder$(pizzaname) {
            console.log(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"]);
            pizzaname = pizzaname ? pizzaname : 'elon';
            return this.http.get("".concat(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"], "/api/placeorder?pizza=") + pizzaname);
          }
        }, {
          key: "userOrders$",
          value: function userOrders$() {
            console.log(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"]);
            return this.http.get("".concat(_auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUri"], "/api/userorders"));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map