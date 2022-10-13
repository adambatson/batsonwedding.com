import { safeGetElementById } from './utils';

export class CountDown {
    private _countDownSpan: HTMLElement;

    public constructor() {
        this._countDownSpan = safeGetElementById('countdown');
        this.calculateCountdown();
    }

    private calculateCountdown() {
        const now = new Date();
        const then = new Date('08/26/2023');
        const diffInSeconds = then.getTime() - now.getTime();
        const diffIndays = Math.ceil(diffInSeconds / (1000 * 3600 * 24));

        this._countDownSpan.innerHTML = diffIndays.toString() + ' ';
    }
}
