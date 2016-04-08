import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowtoplayvideostabViewControl extends BaseViewControl {
    templateString: string = require('./howtoplayvideostab.vc.html');

    context: any = {};
}

register.viewControl('howtoplayvideostab-vc', HowtoplayvideostabViewControl);
