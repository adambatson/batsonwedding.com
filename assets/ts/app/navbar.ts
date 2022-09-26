export class NavBar {
    private _mobileNav: HTMLElement;

    public constructor() {
        var mobileNav = document.getElementById('mobile-nav');
        if (mobileNav == null) {
            throw new Error('#mobile-nav was null');
        }
        this._mobileNav = mobileNav;

        this._mobileNav.onclick = this.navBarClick;
    }

    private navBarClick(): void {
        alert('click oop');
    }
}
