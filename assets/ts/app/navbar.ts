import { safeGetElementById } from './utils';

export class NavBar {
    private _mobileNav: HTMLElement;
    private _mobileNaveItems: HTMLElement;

    public constructor() {
        this._mobileNav = safeGetElementById('mobile-nav');
        this._mobileNaveItems = safeGetElementById('mobile-nav-items');

        this._mobileNav.onclick = () => {
            this.navBarClick();
        };
    }

    private navBarClick(): void {
        if (this._mobileNaveItems.classList.contains('hidden')) {
            this._mobileNaveItems.classList.remove('hidden');
        } else {
            this._mobileNaveItems.classList.add('hidden');
        }
    }
}
