import { safeGetElementById } from './utils';

export class NavBar {
    private _mobileNav: HTMLElement;
    private _mobileNavewrapper: HTMLElement;
    private _mobileNavToggle: HTMLElement;

    public constructor() {
        this._mobileNav = safeGetElementById('mobile-nav');
        this._mobileNavewrapper = safeGetElementById('mobile-nav-wrapper');
        this._mobileNavToggle = safeGetElementById('mobile-nav-toggle');

        this._mobileNav.onclick = () => {
            this.navBarClick();
        };

        this._mobileNavToggle.onclick = () => {
            this.toggleHamburger();
        };
    }

    private navBarClick(): void {
        if (this._mobileNavewrapper.classList.contains('hidden')) {
            this._mobileNavewrapper.classList.remove('hidden');
        } else {
            this._mobileNavewrapper.classList.toggle('hidden-animate');
        }
    }

    private toggleHamburger(): void {
        var lines = this._mobileNavToggle.querySelectorAll('.line');
        lines.forEach((el) => {
            el.classList.toggle('change');
        });
    }
}
