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
  var CountDown = class {
    _countDownSpan;
    constructor() {
      this._countDownSpan = safeGetElementById("countdown");
      this.calculateCountdown();
    }
    calculateCountdown() {
      const now = new Date();
      const then = new Date("08/26/2023");
      const diffInSeconds = then.getTime() - now.getTime();
      const diffIndays = Math.ceil(diffInSeconds / (1e3 * 3600 * 24));
      this._countDownSpan.innerHTML = diffIndays.toString() + " ";
    }
  };

  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/navbar.ts
  var NavBar = class {
    _mobileNav;
    _mobileNavewrapper;
    _mobileNavToggle;
    constructor() {
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
      lines.forEach((el) => {
        el.classList.toggle("change");
      });
    }
  };

  // <stdin>
  var navBar = new NavBar();
  var countDown = new CountDown();
  function setNav(url) {
    console.log("setting nav");
  }
})();
