import { safeGetElementById } from './utils';

export class NavBar {
    private _mobileNav: HTMLElement;
    private _mobileNavewrapper: HTMLElement;

    public constructor() {
        this._mobileNav = safeGetElementById('mobile-nav');
        this._mobileNavewrapper = safeGetElementById('mobile-nav-wrapper');

        this._mobileNav.onclick = () => {
            this.navBarClick();
        };
    }

    private navBarClick(): void {
        if (this._mobileNavewrapper.classList.contains('hidden')) {
            this._mobileNavewrapper.classList.remove('hidden');
        } else {
            this._mobileNavewrapper.classList.add('hidden');
        }
    }
}
