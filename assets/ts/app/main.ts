import { CountDown } from './countdown';
import { NavBar } from './navbar';

const navBar = new NavBar();
const countDown = new CountDown();

export function setNav(url: string) {
    console.log('setting nav');
}
