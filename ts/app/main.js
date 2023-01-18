function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/utils.ts
  function safeGetElementById(id) {
    var element = document.getElementById(id);
    if (!element) {
      throw new Error("#".concat(id, " was null"));
    }
    return element;
  }

  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/countdown.ts
  var CountDown = /*#__PURE__*/function () {
    //private readonly _weddingDate: Date = new Date('10/19/2022');
    function CountDown() {
      _classCallCheck(this, CountDown);
      _defineProperty(this, "_countDownSpan", void 0);
      _defineProperty(this, "_countDownHeader", void 0);
      _defineProperty(this, "_countDownTextEl", void 0);
      _defineProperty(this, "_weddingDate", new Date("08/26/2023"));
      this._countDownSpan = safeGetElementById("countdown");
      this._countDownHeader = safeGetElementById("countdown-header");
      this._countDownTextEl = safeGetElementById("countdown-text");
      var diffInDays = this.calculateCountdown();
      this.updateHtml(diffInDays);
    }
    _createClass(CountDown, [{
      key: "calculateCountdown",
      value: function calculateCountdown() {
        var now = new Date();
        var then = this._weddingDate;
        var diffInSeconds = then.getTime() - now.getTime();
        var diffInDays = Math.ceil(diffInSeconds / (1e3 * 3600 * 24));
        return diffInDays;
      }
    }, {
      key: "getDaysToGoText",
      value: function getDaysToGoText(diffInDays) {
        return diffInDays === 1 ? "Day To Go!" : "Days To Go";
      }
    }, {
      key: "updateHtml",
      value: function updateHtml(diffInDays) {
        this._countDownSpan.innerHTML = "".concat(diffInDays.toString(), " ");
        this._countDownTextEl.innerHTML = this.getDaysToGoText(diffInDays);
        if (diffInDays > 0) {
          this._countDownHeader.classList.remove("invisible");
        }
      }
    }]);
    return CountDown;
  }();

  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/navbar.ts
  var NavBar = /*#__PURE__*/function () {
    function NavBar() {
      var _this = this;
      _classCallCheck(this, NavBar);
      _defineProperty(this, "_mobileNav", void 0);
      _defineProperty(this, "_mobileNavewrapper", void 0);
      _defineProperty(this, "_mobileNavToggle", void 0);
      this._mobileNav = safeGetElementById("mobile-nav");
      this._mobileNavewrapper = safeGetElementById("mobile-nav-wrapper");
      this._mobileNavToggle = safeGetElementById("mobile-nav-toggle");
      this._mobileNav.onclick = function () {
        _this.navBarClick();
      };
      this._mobileNavToggle.onclick = function () {
        _this.toggleHamburger();
      };
    }
    _createClass(NavBar, [{
      key: "navBarClick",
      value: function navBarClick() {
        if (this._mobileNavewrapper.classList.contains("hidden")) {
          this._mobileNavewrapper.classList.remove("hidden");
        } else {
          this._mobileNavewrapper.classList.toggle("hidden-animate");
        }
      }
    }, {
      key: "toggleHamburger",
      value: function toggleHamburger() {
        var lines = this._mobileNavToggle.querySelectorAll(".line");
        lines.forEach(function (el) {
          el.classList.toggle("change");
        });
      }
    }]);
    return NavBar;
  }();

  // <stdin>
  var navBar = new NavBar();
  var countDown = new CountDown();
})();
