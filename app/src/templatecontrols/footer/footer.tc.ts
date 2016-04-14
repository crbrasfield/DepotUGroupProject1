import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import HowToPlayViewControl from '../../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    hasOwnContext = true;
    
    context: any = {
        home: HomeViewControl,
        howtoplay: HowToPlayViewControl,
        promotions: PromotionsViewControl,
        about: AboutViewControl
    };
}

register.control('footer', FooterTemplateControl);
