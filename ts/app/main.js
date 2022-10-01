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
    _mobileNaveItems;
    constructor() {
      this._mobileNav = safeGetElementById("mobile-nav");
      this._mobileNaveItems = safeGetElementById("mobile-nav-items");
      this._mobileNav.onclick = () => {
        this.navBarClick();
      };
    }
    navBarClick() {
      if (this._mobileNaveItems.classList.contains("hidden")) {
        this._mobileNaveItems.classList.remove("hidden");
      } else {
        this._mobileNaveItems.classList.add("hidden");
      }
    }
  };

  // <stdin>
  var navBar = new NavBar();
})();
