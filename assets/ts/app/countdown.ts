//import { DateTime } from 'luxon';
import { DateTime } from 'luxon';
import { safeGetElementById } from './utils';

export class CountDown {
    private _countDownSpan: HTMLElement;

    public constructor() {
        this._countDownSpan = safeGetElementById('countdown');
        this.calculateCountdown();
    }

    private calculateCountdown() {
        const now = DateTime.now();
        const then = DateTime.fromISO('2023-08-26T00:00:00');

        const lapse = Math.ceil(then.diff(now, ['days']).days);
        this._countDownSpan.innerHTML = lapse.toString();
    }
}
