/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Parser = __webpack_require__(1);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _Builder = __webpack_require__(7);
	
	var _Builder2 = _interopRequireDefault(_Builder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.querySelector('#start').addEventListener('click', function () {
	  var expr = document.getElementById('expression').value;
	  //console.log(expr);
	  var parser = new _Parser2.default(expr);
	  var result = parser.getResult();
	  var builder = new _Builder2.default(result);
	
	  // let elem = document.getElementById('result');
	  // elem.innerHTML = '';
	  // result.forEach( (obj) => {
	  //   elem.innerHTML += obj.type + '<br>';
	  // });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Operator = __webpack_require__(2);
	
	var _Operator2 = _interopRequireDefault(_Operator);
	
	var _IntegerType = __webpack_require__(5);
	
	var _IntegerType2 = _interopRequireDefault(_IntegerType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Parser = function () {
	  function Parser(expression) {
	    var _literalTypes;
	
	    _classCallCheck(this, Parser);
	
	    this.expr = expression;
	    this._literalTypes = (_literalTypes = {}, _defineProperty(_literalTypes, _IntegerType2.default.type, _IntegerType2.default.pattern), _defineProperty(_literalTypes, _Operator2.default.type, _Operator2.default.pattern), _defineProperty(_literalTypes, 'T_SPACE', /[\s]+/), _literalTypes);
	
	    this.result = this._parse();
	  }
	
	  _createClass(Parser, [{
	    key: '_parse',
	    value: function _parse() {
	      var literals = [];
	
	      while (this.expr.length) {
	        try {
	          literals.push(this._defineLiteral());
	        } catch (e) {
	          console.log(e.getMessage());
	          break;
	        }
	      }
	
	      return literals;
	    }
	  }, {
	    key: '_defineLiteral',
	    value: function _defineLiteral() {
	      var literalTypes = this._literalTypes,
	          nextType = null,
	          found = null;
	
	      for (var type in literalTypes) {
	        found = literalTypes[type].exec(this.expr[0]);
	        if (found) {
	          nextType = type;
	          break;
	        } else {
	          nextType = null;
	        }
	      }
	
	      if (!nextType) {
	        throw new Error('Parse Error: Unexpected symbol "' + this.expr[0] + '"');
	      }
	
	      found = literalTypes[nextType].exec(this.expr)[0];
	
	      if (found) {
	        this.expr = this.expr.slice(found.length);
	
	        return {
	          type: nextType,
	          value: found
	        };
	      }
	    }
	  }, {
	    key: 'getResult',
	    value: function getResult() {
	      return this.result;
	    }
	  }]);
	
	  return Parser;
	}();

	exports.default = Parser;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SummOperator = __webpack_require__(3);
	
	var _SummOperator2 = _interopRequireDefault(_SummOperator);
	
	var _DiffOperator = __webpack_require__(4);
	
	var _DiffOperator2 = _interopRequireDefault(_DiffOperator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Operator = function () {
	  function Operator(type) {
	    _classCallCheck(this, Operator);
	
	    this._type = type;
	  }
	
	  _createClass(Operator, [{
	    key: 'getOperator',
	    value: function getOperator() {
	      if (this._type === '+') {
	        return _SummOperator2.default;
	      } else if (this._type === '-') {
	        return _DiffOperator2.default;
	      }
	    }
	  }, {
	    key: 'result',
	    value: function result() {
	      return this._calculate();
	    }
	  }], [{
	    key: 'type',
	    get: function get() {
	      return 'O_OPERATOR';
	    }
	  }, {
	    key: 'pattern',
	    get: function get() {
	      return (/[+\-\/*]+/
	      );
	    }
	  }]);
	
	  return Operator;
	}();

	exports.default = Operator;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Operator = __webpack_require__(2);
	
	var _Operator2 = _interopRequireDefault(_Operator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SummOperator = function () {
	  function SummOperator() {
	    _classCallCheck(this, SummOperator);
	
	    this.priority = 0;
	    this.leftOperand = null;
	    this.rightOperand = null;
	  }
	
	  _createClass(SummOperator, [{
	    key: '_calculate',
	    value: function _calculate() {
	      return parseInt(this.leftOperand) + parseInt(this.rightOperand);
	    }
	  }, {
	    key: 'getResult',
	    value: function getResult() {
	      return this._calculate();
	    }
	  }], [{
	    key: 'type',
	    get: function get() {
	      return 'O_SUMM';
	    }
	  }]);
	
	  return SummOperator;
	}();

	exports.default = SummOperator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Operator = __webpack_require__(2);
	
	var _Operator2 = _interopRequireDefault(_Operator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DiffOperator = function () {
	  function DiffOperator() {
	    _classCallCheck(this, DiffOperator);
	
	    this.priority = 0;
	    this.leftOperand = null;
	    this.rightOperand = null;
	  }
	
	  _createClass(DiffOperator, [{
	    key: '_calculate',
	    value: function _calculate() {
	      return this.leftOperand - this.rightOperand;
	    }
	  }, {
	    key: 'getResult',
	    value: function getResult() {
	      return this._calculate();
	    }
	  }], [{
	    key: 'type',
	    get: function get() {
	      return 'O_DIFF';
	    }
	  }]);
	
	  return DiffOperator;
	}();

	exports.default = DiffOperator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Type2 = __webpack_require__(6);
	
	var _Type3 = _interopRequireDefault(_Type2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IntegerType = function (_Type) {
	  _inherits(IntegerType, _Type);
	
	  function IntegerType(value) {
	    _classCallCheck(this, IntegerType);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IntegerType).call(this));
	
	    _this._value = value;
	    return _this;
	  }
	
	  _createClass(IntegerType, null, [{
	    key: 'pattern',
	    get: function get() {
	      return (/[0-9]+/
	      );
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      return 'T_INTEGER';
	    }
	  }]);
	
	  return IntegerType;
	}(_Type3.default);

	exports.default = IntegerType;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Operator = function () {
	  function Operator() {
	    _classCallCheck(this, Operator);
	  }
	
	  _createClass(Operator, [{
	    key: 'result',
	    value: function result() {
	      return this._value();
	    }
	  }], [{
	    key: 'type',
	    get: function get() {
	      return 'T_TYPE';
	    }
	  }]);
	
	  return Operator;
	}();

	exports.default = Operator;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Operator = __webpack_require__(2);
	
	var _Operator2 = _interopRequireDefault(_Operator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Builder = function () {
	  function Builder(typeList) {
	    _classCallCheck(this, Builder);
	
	    this._list = typeList;
	    this._tree = [];
	    this._stripSpaces();
	    this._setOperands();
	    this._compute(this._tree);
	  }
	
	  _createClass(Builder, [{
	    key: '_setOperands',
	    value: function _setOperands() {
	      var _this = this;
	
	      this._list.forEach(function (literal, index) {
	        if (literal.type === 'O_OPERATOR') {
	          _this._tree.push({
	            left: _this._list[index - 1],
	            operator: literal,
	            right: _this._list[index + 1]
	          });
	          if (_this._tree[_this._tree.length - 2]) {
	            _this._tree[_this._tree.length - 1].wait = 'left';
	          }
	        }
	      });
	    }
	  }, {
	    key: '_compute',
	    value: function _compute(tree) {
	      var _this2 = this;
	
	      var operationResult = void 0;
	
	      tree.every(function (command, index) {
	
	        var leftNode = tree[index - 1],
	            rightNode = tree[index + 1];
	
	        if (!command.wait) {
	          operationResult = _this2._getOperationResult(command);
	
	          if (leftNode && leftNode.wait === 'right') {
	            delete tree[index - 1].wait;
	            tree[index - 1].right.value = operationResult;
	          } else if (rightNode && rightNode.wait === 'left') {
	            delete tree[index + 1].wait;
	            tree[index + 1].left.value = operationResult;
	          }
	
	          tree = tree.filter(function (node, indexNode) {
	            return indexNode !== index;
	          });
	
	          return false;
	        }
	      });
	
	      if (tree.length >= 1) {
	        this._compute(tree);
	      } else {
	        console.log(operationResult);
	        return tree;
	      }
	    }
	  }, {
	    key: '_getOperationResult',
	    value: function _getOperationResult(command) {
	      var TypedOperator = new _Operator2.default(command.operator.value).getOperator();
	      var operator = new TypedOperator();
	      operator.leftOperand = command.left.value;
	      operator.rightOperand = command.right.value;
	      return operator.getResult();
	    }
	  }, {
	    key: '_stripSpaces',
	    value: function _stripSpaces() {
	      this._list = this._list.filter(function (literal) {
	        return literal.type !== 'T_SPACE';
	      });
	    }
	  }]);
	
	  return Builder;
	}();

	exports.default = Builder;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map