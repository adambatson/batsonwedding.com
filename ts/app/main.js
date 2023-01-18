function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(() => {
  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/utils.ts
  function safeGetElementById(id) {
    var element = document.getElementById(id);
    if (!element) {
      throw new Error(`#${id} was null`);
    }
    return element;
  }

  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/countdown.ts
  var CountDown = class CountDown {
    //private readonly _weddingDate: Date = new Date('10/19/2022');
    constructor() {
      _defineProperty(this, "_countDownSpan", void 0);
      _defineProperty(this, "_countDownHeader", void 0);
      _defineProperty(this, "_countDownTextEl", void 0);
      _defineProperty(this, "_weddingDate", new Date("08/26/2023"));
      this._countDownSpan = safeGetElementById("countdown");
      this._countDownHeader = safeGetElementById("countdown-header");
      this._countDownTextEl = safeGetElementById("countdown-text");
      const diffInDays = this.calculateCountdown();
      this.updateHtml(diffInDays);
    }
    calculateCountdown() {
      const now = new Date();
      const then = this._weddingDate;
      const diffInSeconds = then.getTime() - now.getTime();
      const diffInDays = Math.ceil(diffInSeconds / (1e3 * 3600 * 24));
      return diffInDays;
    }
    getDaysToGoText(diffInDays) {
      return diffInDays === 1 ? "Day To Go!" : "Days To Go";
    }
    updateHtml(diffInDays) {
      this._countDownSpan.innerHTML = `${diffInDays.toString()} `;
      this._countDownTextEl.innerHTML = this.getDaysToGoText(diffInDays);
      if (diffInDays > 0) {
        this._countDownHeader.classList.remove("invisible");
      }
    }
  };

  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/navbar.ts
  var NavBar = class NavBar {
    constructor() {
      _defineProperty(this, "_mobileNav", void 0);
      _defineProperty(this, "_mobileNavewrapper", void 0);
      _defineProperty(this, "_mobileNavToggle", void 0);
      this._mobileNav = safeGetElementById("mobile-nav");
      this._mobileNavewrapper = safeGetElementById("mobile-nav-wrapper");
      this._mobileNavToggle = safeGetElementById("mobile-nav-toggle");
      this._mobileNav.onclick = () => {
        this.navBarClick();
      };
      this._mobileNavToggle.onclick = () => {
        this.toggleHamburger();
      };
    }
    navBarClick() {
      if (this._mobileNavewrapper.classList.contains("hidden")) {
        this._mobileNavewrapper.classList.remove("hidden");
      } else {
        this._mobileNavewrapper.classList.toggle("hidden-animate");
      }
    }
    toggleHamburger() {
      var lines = this._mobileNavToggle.querySelectorAll(".line");
      lines.forEach(el => {
        el.classList.toggle("change");
      });
    }
  };

  // <stdin>
  var navBar = new NavBar();
  var countDown = new CountDown();
})();
