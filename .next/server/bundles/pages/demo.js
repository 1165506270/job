module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return userUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_http__ = __webpack_require__("./lib/http.js");

var userLogin = function userLogin(data) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_http__["a" /* default */].post('/user/login', data);
};
var userUpdate = function userUpdate(data) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_http__["a" /* default */].post('/user/update', data);
};
var userRegister = function userRegister(data) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_http__["a" /* default */].post('/user/register', data);
};

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "F:\\\u4E2A\u4EBA\\job2\\components\\header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "demo")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("./components/header.js");
var _jsxFileName = "F:\\\u4E2A\u4EBA\\job2\\components\\layout.js";



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/antd.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./lib/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var pro = "development" === 'production';
var test = process.env.NODE_TEST === 'test';

var callApi = function callApi(url, method, data) {
  var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var opts = _objectSpread({}, options);

  return __WEBPACK_IMPORTED_MODULE_0_axios___default()(Object.assign({}, {
    baseURL: '/api/',
    url: url,
    method: method,
    params: method === 'get' ? data : {},
    // 添加在请求URL后面的参数
    data: method !== 'get' ? data : {},
    // 适用于 PUT POST PATCH
    withCredentials: true // 请求时是否携带cookie

  }, opts)).then(function (data) {
    return data.data;
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  callApi: callApi,
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isServer = arguments.length > 2 ? arguments[2] : undefined;
    return callApi(url, 'get', data, isServer);
  },
  put: function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isServer = arguments.length > 2 ? arguments[2] : undefined;
    return callApi(url, 'put', data, isServer);
  },
  post: function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isServer = arguments.length > 2 ? arguments[2] : undefined;
    return callApi(url, 'post', data, isServer);
  },
  delete: function _delete(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isServer = arguments.length > 2 ? arguments[2] : undefined;
    return callApi(url, 'delete', data, isServer);
  }
});

/***/ }),

/***/ "./lib/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRedirectPath;
/* unused harmony export getChatId */
function getRedirectPath(_ref) {
  var type = _ref.type,
      avatar = _ref.avatar;
  // 根据用户信息 返回跳转地址
  // user.type  /boss  /genius
  // user.avatar  /bossinfo  /geniusinfo
  var url = type === 'boss' ? '/boss' : '/genius';

  if (!avatar) {
    url += 'info';
  }

  return url;
}
function getChatId(userId, targetId) {
  return [userId, targetId].sort().join('_');
}

/***/ }),

/***/ "./pages/demo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_user_redux__ = __webpack_require__("./store/user.redux.js");
var _jsxFileName = "F:\\\u4E2A\u4EBA\\job2\\pages\\demo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Demo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      console.log(this);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
        onClick: this.props.loginfn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "\u63D0\u4EA4"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.count));
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(function (state) {
  return state.user;
}, {
  loginfn: __WEBPACK_IMPORTED_MODULE_4__store_user_redux__["a" /* loginfn */]
})(Demo)); // export default () => {
//     return (
//         <Layout>
//             <ul>
//                 <PostLink id="HelloNext.js" title="Hello Next.js"/>
//                 <PostLink id="LearnNext.js is awesome" title="Learn Next.js is awesome"/>
//                 <PostLink id="DeployappswithZeit" title="Deploy apps with Zeit"/>
//             </ul>
//         </Layout>
//     )
// }

/***/ }),

/***/ "./store/user.redux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export regisger */
/* harmony export (immutable) */ __webpack_exports__["a"] = loginfn;
/* unused harmony export logoutSubmit */
/* unused harmony export update */
/* unused harmony export loadData */
/* harmony export (immutable) */ __webpack_exports__["b"] = user;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__("./api/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__("./lib/util.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



 // const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

var ERROR_MSG = 'ERROR_MSG';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var AUTH_SUCCESS = 'AUTH_SUCCESS';
var LOAD_DATA = 'LOAD_DATA';
var initState = {
  redirectTo: '',
  isAuth: '',
  mgs: '',
  user: '',
  type: ''
};
function regisger(_ref) {
  var user = _ref.user,
      pwd = _ref.pwd,
      repeatpwd = _ref.repeatpwd,
      type = _ref.type;

  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入');
  }

  if (pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不相同');
  }

  return function (dispatch) {
    Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["b" /* userRegister */])({
      user: user,
      pwd: pwd,
      type: type
    }).then(function (res) {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({
          user: user,
          pwd: pwd,
          type: type
        }));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
function loginfn(_ref2) {
  var user = _ref2.user,
      pwd = _ref2.pwd;
  // if( !user || !pwd) {
  //     console.log(user, pwd)
  //     return errorMsg('用户名密码必须输入')
  // }
  return function (dispatch) {
    Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["a" /* userLogin */])({
      user: user,
      pwd: pwd
    }).then(function (res) {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
function logoutSubmit() {
  return {
    type: LOGOUT_SUCCESS
  };
}
function update(data) {
  return function (dispatch) {
    Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["c" /* userUpdate */])(data).then(function (res) {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
function loadData(userInfo) {
  return {
    type: LOAD_DATA,
    payload: userInfo
  };
}

function errorMsg(msg) {
  return {
    msg: msg,
    type: ERROR_MSG
  };
}

function authSuccess(obj) {
  var pwd = obj.pwd,
      data = _objectWithoutProperties(obj, ["pwd"]);

  console.log(data);
  return {
    type: AUTH_SUCCESS,
    payload: data
  };
} //reducer


function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case AUTH_SUCCESS:
      return _objectSpread({}, state, {
        msg: '',
        redirectTo: Object(__WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* getRedirectPath */])(action.payload),
        isAuth: true
      }, action.payload);

    case LOAD_DATA:
      return _objectSpread({}, state, action.payload);

    case LOGOUT_SUCCESS:
      return _objectSpread({}, initState, {
        redirectTo: '/login'
      });

    case ERROR_MSG:
      return _objectSpread({}, state, {
        isAuth: false,
        msg: action.msg
      });

    default:
      return state;
  }

  return state;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/demo.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map