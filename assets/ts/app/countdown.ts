import { safeGetElementById } from './utils';

export class CountDown {
    private _countDownSpan: HTMLElement;
    private _countDownHeader: HTMLElement;
    private _countDownTextEl: HTMLElement;

    private readonly _weddingDate: Date = new Date('08/26/2023');
    //private readonly _weddingDate: Date = new Date('10/19/2022');

    public constructor() {
        this._countDownSpan = safeGetElementById('countdown');
        this._countDownHeader = safeGetElementById('countdown-header');
        this._countDownTextEl = safeGetElementById('countdown-text');

        const diffInDays = this.calculateCountdown();
        this.updateHtml(diffInDays);
    }

    private calculateCountdown(): number {
        const now = new Date();
        const then = this._weddingDate;
        const diffInSeconds = then.getTime() - now.getTime();
        const diffInDays = Math.ceil(diffInSeconds / (1000 * 3600 * 24));

        return diffInDays;
    }

    private getDaysToGoText(diffInDays: number): string {
        return diffInDays === 1 ? 'Day To Go!' : 'Days To Go';
    }

    private updateHtml(diffInDays: number): void {
        this._countDownSpan.innerHTML = `${diffInDays.toString()} `;
        this._countDownTextEl.innerHTML = this.getDaysToGoText(diffInDays);

        if (diffInDays > 0) {
            this._countDownHeader.classList.remove('invisible');
        }
    }
}
