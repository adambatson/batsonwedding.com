(() => {
  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/utils.ts
  function safeGetElementById(id) {
    var element = document.getElementById(id);
    if (!element) {
      throw new Error(`#${id} was null`);
    }
    return element;
  }

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
  function setNav(url) {
    console.log("setting nav");
  }
})();
