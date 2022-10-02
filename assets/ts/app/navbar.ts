import { safeGetElementById } from './utils';

export class NavBar {
    private _mobileNav: HTMLElement;
    private _mobileNaveItems: HTMLElement;

    public constructor() {
        /* this._mobileNav = safeGetElementById('mobile-nav');
        this._mobileNaveItems = safeGetElementById('mobile-nav-items');

        this._mobileNav.onclick = () => {
            this.navBarClick();
        }; */

        this.activateCurrentPage();
    }

    private navBarClick(): void {
        if (this._mobileNaveItems.classList.contains('hidden')) {
            this._mobileNaveItems.classList.remove('hidden');
        } else {
            this._mobileNaveItems.classList.add('hidden');
        }
    }

    private activateCurrentPage() {
        var navItems = document.getElementsByClassName('nav-item');
        var currPage = window.location.pathname;

        /* for (var i = 0; i < navItems.length; i++) {
            console.log(navItems[i].getAttribute('href'));
            console.log(currPage);
        } */
    }
}
