import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {
        showMe: true,
        dontShowMe: false
    };
    
    showMe(): void {
        this.context.showMe = true;
        this.context.dontShowMe = false;
    }
    
    dontShowMe(): void {
        this.context.showMe = false;
        this.context.dontShowMe = true;
    }
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);

// showMe()
// dontShowMe()