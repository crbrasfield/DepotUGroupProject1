import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {
        showMe: true,
        navStlyleActive: "pagenavActive",
        dontShowMe: false,
        navStlyleInactive: "pagenavInactive"
    };
    
    showMe(): void {
        this.context.showMe = true;
        this.context.navStlyleActive = "pagenavActive";
        this.context.dontShowMe = false;
        this.context.navStlyleInactive = "pagenavInactive"
    }
    
    dontShowMe(): void {
        this.context.showMe = false;
        this.context.navStlyleActive = "pagenavInactive";
        this.context.dontShowMe = true;
        this.context.navStlyleInactive = "pagenavActive"
    }
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);

// showMe()
// dontShowMe()