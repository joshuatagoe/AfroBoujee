webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Menu-Profilebuttons.jsx":
/*!********************************************!*\
  !*** ./components/Menu-Profilebuttons.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuProfilebuttons; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Menu_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu-icon */ "./components/Menu-icon.jsx");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");









var MenuProfilebuttons =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuProfilebuttons, _React$Component);

  function MenuProfilebuttons(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuProfilebuttons);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuProfilebuttons).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuProfilebuttons, [{
    key: "render",
    value: function render() {
      var LoggedInMenu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        menutext: "PROFILE",
        link: "/profile"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: "/static/imgs/profile.svg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        menutext: "DASHBOARD",
        link: "/dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: "/static/imgs/manager.svg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        menutext: "NOTIFICATIONS",
        link: "notifications"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: "/static/imgs/notifications.svg"
      })));
      var LoggedOutMenu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        menutext: "PROFILE"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: "/static/imgs/profile.svg"
      })));
      var renderthis = null;

      if (typeof window !== 'undefined') {
        console.log(this.props.user);
        renderthis = this.props.user ? LoggedInMenu : LoggedOutMenu;
      }

      console.log(this.props.user);
      return renderthis;
    }
  }]);

  return MenuProfilebuttons;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=_app.js.ba8c073a767675cb3f51.hot-update.js.map