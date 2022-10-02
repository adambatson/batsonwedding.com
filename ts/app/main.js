(() => {
  // ns-hugo:/home/runner/work/batsonwedding.com/batsonwedding.com/assets/ts/app/navbar.ts
  var NavBar = class {
    _mobileNav;
    _mobileNaveItems;
    constructor() {
      this.activateCurrentPage();
    }
    navBarClick() {
      if (this._mobileNaveItems.classList.contains("hidden")) {
        this._mobileNaveItems.classList.remove("hidden");
      } else {
        this._mobileNaveItems.classList.add("hidden");
      }
    }
    activateCurrentPage() {
      var navItems = document.getElementsByClassName("nav-item");
      var currPage = window.location.pathname;
    }
  };

  // <stdin>
  var navBar = new NavBar();
  function setNav(url) {
    console.log("setting nav");
  }
})();
