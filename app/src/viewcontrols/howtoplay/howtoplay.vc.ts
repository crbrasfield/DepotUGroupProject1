import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {};
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);
