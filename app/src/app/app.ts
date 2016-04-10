import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import HowToPlayViewControl from '../viewcontrols/howtoplay/howtoplay.vc';
import HowToPlayVideoStabViewControl from '../viewcontrols/howtoplayvideostab/howtoplayvideostab.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/howtoplay', view: HowToPlayViewControl },
            { pattern: '/howtoplayvideostab', view: HowToPlayVideoStabViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
